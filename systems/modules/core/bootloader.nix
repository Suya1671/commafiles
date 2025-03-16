{
  inputs,
  pkgs,
  lib,
  ...
}: {
  boot = {
    loader = {
      systemd-boot.enable = lib.mkForce true;
      systemd-boot.netbootxyz.enable = true;
      grub = {
        enable = lib.mkDefault false; # enable when setting up/not securebooting
        efiSupport = true;
        device = "nodev";
        useOSProber = true;
      };
      efi = {
        canTouchEfiVariables = true;
        efiSysMountPoint = "/boot/efi";
      };
    };

    initrd.systemd.enable = true;

    extraModprobeConfig = "options kvm_intel nested=1";
    supportedFilesystems = ["ntfs" "mtpfs"];

    kernelPackages = pkgs.linuxKernel.packages.linux_6_11;

    plymouth = {
      enable = true;
    };
  };
}
