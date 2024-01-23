{
  pkgs,
  inputs,
  ...
}: {
  environment.defaultPackages = [];

  nixpkgs.config.allowUnfree = true;
  nixpkgs.config.allowBroken = false;
  nixpkgs.config.permittedInsecurePackages = [
    # "electron-25.9.0" # obsidian :pensive:
    "electron-24.8.6" # Obsidian Wayland, above does not work 
  ];

  nixpkgs.overlays = [
    inputs.nixpkgs-f2k.overlays.default
    inputs.xdg-desktop-portal-hyprland.overlays.default
    inputs.neovim-nightly-overlay.overlay
    inputs.rust-overlay.overlays.default
    inputs.emacs-overlay.overlays.default
    inputs.eww.overlays.default
    inputs.deno2nix.overlays.default
    inputs.helix.overlays.default
    (final: super: rec {
      makeModulesClosure = x:
        super.makeModulesClosure (x // {allowMissing = true;});

      craneLib = inputs.crane.lib.${pkgs.system};

      swww = craneLib.buildPackage {
        src = craneLib.cleanCargoSource inputs.swww-src;
        nativeBuildInputs = with pkgs; [pkg-config libxkbcommon];
        doCheck = false; # breaks on nixOS
      };
      obsidian-wayland = super.obsidian.override { electron = final.electron_24; }; 
    })
  ];

  nix = {
    package = pkgs.nixStable;
    gc = {
      automatic = true;
      dates = "weekly";
    };
    extraOptions = ''
      experimental-features = nix-command flakes
    '';
    settings = {
      trusted-users = ["@wheel"];
      auto-optimise-store = true;
      trusted-public-keys = [
        "cache.nixos.org-1:6NCHdD59X431o0gWypbMrAURkbJ16ZPMQFGspcDShjY="
        "fortuneteller2k.cachix.org-1:kXXNkMV5yheEQwT0I4XYh1MaCSz+qg72k8XAi2PthJI="
        "hyprland.cachix.org-1:a7pgxzMz7+chwVL3/pzj6jIBMioiJM7ypFP8PwtkuGc="
        "nixpkgs-wayland.cachix.org-1:3lwxaILxMRkVhehr5StQprHdEo4IrE8sRho9R9HOLYA="
        "nix-community.cachix.org-1:mB9FSh9qf2dCimDSUo8Zy7bkq5CX+/rkCWyvRCYg3Fs="
        "arm.cachix.org-1:5BZ2kjoL 1q6nWhlnrbAl+G7ThY7+HaBRD9PZzqZkbnM="
        "helix.cachix.org-1:ejp9KQpR1FBI2onstMQ34yogDm4OgU2ru6lIwPvuCVs="
      ];
      substituters = [
        "https://cache.nixos.org?priority=10"
        "https://fortuneteller2k.cachix.org"
        "https://hyprland.cachix.org"
        "https://nixpkgs-wayland.cachix.org"
        "https://nix-community.cachix.org"
        "https://arm.cachix.org"
        "https://helix.cachix.org"
      ];
    };
  };

  documentation = {
    enable = true;
    man.enable = true;
  };

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It‘s perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  system.stateVersion = pkgs.lib.mkDefault "22.05"; # Did you read the comment? If not, TLDR don't change this
}
