{
  config,
  pkgs,
  ...
}: {
  hardware.nvidia = {
    modesetting.enable = true;
    open = false;
    powerManagement.enable = true;
    nvidiaSettings = true;
    package = config.boot.kernelPackages.nvidiaPackages.beta;
  };

  hardware.graphics = {
    enable = true;
    package = config.boot.kernelPackages.nvidiaPackages.beta;
    extraPackages = [ pkgs.libvdpau-va-gl pkgs.mesa pkgs.mesa.drivers ];
  };
  
  boot.kernelModules = ["nvidia" "i915" "nvidia_modeset" "nvidia_drm"];
  services.xserver.videoDrivers = ["nvidia"];
}
