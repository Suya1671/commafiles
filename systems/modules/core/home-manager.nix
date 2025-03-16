{inputs, ...}: {
  home-manager = {
    useGlobalPkgs = true;
    backupFileExtension = ".back";
    sharedModules = [
      inputs.sops-nix.homeManagerModules.sops
    ];
  };
}
