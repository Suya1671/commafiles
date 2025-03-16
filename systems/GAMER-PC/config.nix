{pkgs, inputs, config, ...}: {
  users.users.tntman = {
    isNormalUser = true;
    description = "Tabiasgeee Human";
    extraGroups = ["networkmanager" "wheel" "scanner" "lp" "docker" "dialout"];
    initialPassword = "password"; # Change this with passwd
    shell = pkgs.fish;
  };
  nixpkgs.hostPlatform = "x86_64-linux";

  imports = [inputs.lanzaboote.nixosModules.lanzaboote];

  boot = {
    lanzaboote = {
      enable = false;
      pkiBundle = "/etc/secureboot";
    };
  };

  networking.hostName = "GAMER-PC";
  hardware.nvidia-container-toolkit.enable = true;

  time.timeZone = "Africa/Johannesburg";
  i18n.defaultLocale = "en_ZA.UTF-8";

  services = {
    xserver = {
      xkb = {
        layout = "za";
      };
    };

    gnome = {
      glib-networking.enable = true;
    };

    openssh = {
      enable = true;
      # require public key authentication for better security
      settings.PasswordAuthentication = false;
      settings.KbdInteractiveAuthentication = false;
      #settings.PermitRootLogin = "yes";
    };

    # cloudflared
    cloudflared = {
      enable = true;
      tunnels = {
        "ca4db441-b264-4db7-aa4e-cf59764d73c5" = {
           credentialsFile = "${config.sops.secrets."cloudflared/gamer-pc".path}";
           default = "http_status:404";
        };
      };
    };

    jellyfin.enable = true;
    usbmuxd.enable = true;
    avahi.enable = true;
    avahi.nssmdns4 = true;
    flatpak.enable = true;
    gvfs.enable = true;
    teamviewer.enable = true; # Being school tech support moment
    telepathy.enable = true;
};

  programs.dconf.enable = true;
  programs.wshowkeys.enable = true;
  programs.fish.enable = true;

  virtualisation = {
    podman = {
      enable = true;
      dockerCompat = true;
      defaultNetwork.settings.dns_enabled = true;
    };
  };

  environment.systemPackages = with pkgs; [
    vim # backup editor
    libimobiledevice
    adwaita-icon-theme
    cloudflared
    ifuse
    virt-manager
    xdg-desktop-portal-gtk
    sbctl
  ];

  sops.secrets."cloudflared/gamer-pc" = {
      # Both are "cloudflared" by default
      owner = config.services.cloudflared.user;
      group = config.services.cloudflared.group;
  };
}
