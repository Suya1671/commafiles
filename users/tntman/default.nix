{
  pkgs,
  ezModules,
  inputs,
  ...
}: {
  imports = [
    inputs.nix-index-database.hmModules.nix-index

    ezModules.electron
    # ezModules.firefox
    ezModules.git
    ezModules.gtk
    ezModules.niri
    ezModules.openrgb
    ezModules.playerctl
    ezModules.kleur
    ezModules.syncthing
    ezModules.xdg
    ezModules.fastfetch
    ezModules.obs
    ezModules.wlsunset
    ezModules.vscode
    ezModules.webcord
    ezModules.yazi
    ezModules.zellij

    ezModules.shell
    ezModules.fish
    ezModules.nushell

    ezModules.terminal
    ezModules.wezterm

    ezModules.editor
    ezModules.helix

    ezModules.theme
  ];

  home = {
    username = "tntman";
    homeDirectory = "/home/tntman";

    stateVersion = "22.05";

    packages = with pkgs; [
      (pkgs.obsidian.override {
        electron = pkgs.electron_32;
      }) # notes
      anki # cards (obsidian spaced reptition has failed me again)

      nautilus # file manager
      loupe # image viewer
      fragments # for torrenting... :cluelesser:
      signal-desktop
      kicad
      freecad-wayland

      sptlrx # funni lyrics

      fractal # matrix go brrr
      polari # IRC go brrr
      (pkgs.feishin.override {
        # now this is just cursed
        electron_31 = pkgs.electron_32;
      }) # music go brrr
      protonup-qt # proton-GE go brrr
      protontricks # proton sound go brrr
      pavucontrol # sound go brrr
      openttd # gamig time
      inputs.zen-browser.packages."${system}".default # browser go brrr
      slack
      zed-editor

      # CLI utils
      btop # monitoring stuff
      ripgrep # searching stuff
      cachix # caching stuff
      cloudflared # ssh tunnel stuff
      nix-output-monitor # building stuff
      dive
      podman-tui
      podman-compose
      rsync
    ];
  };

  home.sessionVariables = {
    FLAKE = "/home/tntman/commafiles";
  };

  programs = {
    home-manager.enable = true;
    nix-index-database.comma.enable = true;
  };

  services.easyeffects.enable = true;
}
