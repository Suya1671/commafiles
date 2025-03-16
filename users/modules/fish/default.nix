{pkgs, ...}: {
  home.packages = with pkgs; [
    inshellisense # carapace completer support
    zsh # carapace completer support
    grc # grc command-line colorizer
  ];

  tntman.home.shell.executable = "${pkgs.fish}/bin/fish";

  programs = {
    fish = {
      enable = true;
      interactiveShellInit = ''
        set fish_greeting # Disable greeting
        set -Ux CARAPACE_BRIDGES 'clap,inshellisense,fish,zsh,bash'
      '';
      plugins = [
        { name = "grc"; src = pkgs.fishPlugins.grc.src; }
        # { name = "wakatime"; src = pkgs.fishPlugins.wakatime-fish.src; }
        { name = "forgit"; src = pkgs.fishPlugins.forgit.src; }
        { name = "done"; src = pkgs.fishPlugins.done.src; }
        { name = "fzf-fish"; src = pkgs.fishPlugins.fzf-fish.src; }
        { name = "pisces"; src = pkgs.fishPlugins.pisces.src; }
        {
          name = "zoxide";
          src = pkgs.fetchFromGitHub {
            owner = "icezyclon";
            repo = "zoxide.fish";
            rev = "main";
            hash = "sha256-OjrX0d8VjDMxiI5JlJPyu/scTs/fS/f5ehVyhAA/KDM=";
          };
        }
        {
          name = "fish-eza";
          src = pkgs.fetchFromGitHub {
            owner = "scaryrawr";
            repo = "fish-eza";
            rev = "75b3253ac6317a1a8bda538ae50c44b0c7965093";
            hash = "sha256-QsNZTidMdXXZMnTMLsHfDa/XUGzo+muzTw7Yc55svoU=";
          };
        }
      ];
    };

    nix-your-shell = {
      enable = true;
      enableFishIntegration = true;
    };

    pay-respects = {
      enable = true;
      enableFishIntegration = true;
    };

    direnv = {
      enable = true;
      nix-direnv.enable = true;
      # enableFishIntegration = true;
    };

    atuin = {
      enable = true;
      enableFishIntegration = true;
    };

    zoxide = {
      enable = true;
      enableFishIntegration = true;
    };

    carapace = {
      enable = true;
      enableFishIntegration = false;
    };

    eza = {
      enable = true;
      enableFishIntegration = true;
      colors = "auto";
      git = true;
      icons = "auto";
    };

    fzf = {
      enable = true;
      enableFishIntegration = true;
    };

    starship = {
      enable = true;
      enableNushellIntegration = true;
      settings = builtins.fromTOML (builtins.readFile ../nushell/config/starship.toml);
    };
  };
}
