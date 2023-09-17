{
  pkgs,
  inputs,
  ...
}: {
  imports = [
    inputs.nix-index-database.hmModules.nix-index
    ../modules/dunst
    ../modules/electron
    ../modules/gammastep
    ../modules/git
    ../modules/gtk
    ../modules/hyprland
    ../modules/openrgb
    ../modules/playerctl
    ../modules/programs/ags
    # ../modules/programs/emacs
    ../modules/programs/kitty
    ../modules/programs/neofetch
    ../modules/programs/neovim
    ../modules/programs/spotify
    ../modules/programs/vscode
    ../modules/programs/webcord
    ../modules/shell
    ../modules/swaylock
    ../modules/xdg
  ];

  home = {
    username = "tntman";
    homeDirectory = "/home/tntman";

    stateVersion = "22.05";

    packages = with pkgs; [
      vivaldi # chrome but better
      obsidian # notes
      obs-studio # fullscreen sharing. Basically run obs in fullscreen preview and share that. It's goofy as hell
      wofi # launcher
      authy # 2fa
      gnome.nautilus # file manager
      kooha # for screen recording

      blender # 3D monitor go brrr
      prismlauncher # minecraft go brrr
      temurin-jre-bin-17 # java go brrr
      zotero # reference manager go brrr
      jetbrains-toolbox # jetbran go brrr

      # CLI utils
      btop # monitoring stuff
      unzip # unzipping stuff
      ripgrep # searching stuff
      cachix # caching stuff
    ];
  };

  programs = {
    home-manager.enable = true;
    nix-index-database.comma.enable = true;
  };

  xresources.extraConfig = builtins.readFile (
    inputs.xresources + "/mocha.Xresources"
  );
}
