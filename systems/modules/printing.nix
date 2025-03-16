{pkgs, ...}: {
  services.printing = {
    enable = true;
    # https://github.com/NixOS/nixpkgs/pull/369304
    # drivers = [pkgs.epson-escpr];
  };

  hardware.sane.enable = true;
  hardware.sane.extraBackends = [pkgs.sane-airscan];
}
