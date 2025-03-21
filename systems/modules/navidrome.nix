{ pkgs, config, lib, ... }: {
  # sops required to run this anyways
  sops.secrets."lastfm/key" = {
    owner = config.systemd.services.navidrome.serviceConfig.User;
    restartUnits = [ "navidrome.service" ];
  };
  sops.secrets."lastfm/secret" = {
    owner = config.systemd.services.navidrome.serviceConfig.User;
    restartUnits = [ "navidrome.service" ];
  };
  sops.secrets."spotify/id" = {
    owner = config.systemd.services.navidrome.serviceConfig.User;
    restartUnits = [ "navidrome.service" ];
  };
  sops.secrets."spotify/secret" = {
    owner = config.systemd.services.navidrome.serviceConfig.User;
    restartUnits = [ "navidrome.service" ];
  };
  sops.templates."navidrome-config.toml" = {
    content = ''
      MusicFolder = "/music"
      Address = "192.168.3.14"
      LastFM.Enabled = true
      LastFM.ApiKey = "${config.sops.placeholder."lastfm/key"}"
      LastFM.Secret = "${config.sops.placeholder."lastfm/secret"}"
      Spotify.ID = "${config.sops.placeholder."spotify/id"}"
      Spotify.Secret = "${config.sops.placeholder."spotify/secret"}"
      EnableSharing = true
      EnableExternalServices = true
      Scanner.GroupAlbumReleases = true
    '';
    owner = config.users.users.navidrome.name;
  };

  services.navidrome = {
    enable = true;
    openFirewall = true;
    # unused but required by nixos module
    settings = {
      MusicFolder = "/music";
      Address = "192.168.1.14";
    };
  };

  systemd.services.navidrome = {
    after = lib.mkForce [ "network.target" "sops-nix.service" ];

    serviceConfig.BindReadOnlyPaths = [
      # navidrome uses online services to download additional album metadata / covers
      "${config.environment.etc."ssl/certs/ca-certificates.crt".source}:/etc/ssl/certs/ca-certificates.crt"
      builtins.storeDir
      "/etc"
      "/music"
      "/run/secrets/rendered"
    ];
    serviceConfig.DynamicUser = lib.mkForce false;
    serviceConfig.User = config.users.users.navidrome.name;
    serviceConfig.ExecStart = lib.mkForce "${pkgs.navidrome}/bin/navidrome --configfile ${config.sops.templates."navidrome-config.toml".path}";
  };

  users.users.navidrome = {
    name = "navidrome";
    home = "/var/lib/navidrome";
    homeMode = "777";
    createHome = true;
    isSystemUser = true;
    group = "navidrome";
    extraGroups = [ "wheel" "users" ];
  };
  users.groups.navidrome = {};
}
