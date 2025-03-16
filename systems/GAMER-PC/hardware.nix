# Do not modify this file!  It was generated by ‘nixos-generate-config’
# and may be overwritten by future invocations.  Please make changes
# to /etc/nixos/configuration.nix instead.
{
  config,
  lib,
  modulesPath,
  ...
}: {
  imports = [
    (modulesPath + "/installer/scan/not-detected.nix")
  ];

  boot = {
    initrd = {
      availableKernelModules = ["xhci_pci" "ahci" "nvme" "usbhid" "usb_storage" "sd_mod"];
      kernelModules = [];
    };
    kernelModules = ["kvm-intel" "v4l2loopback" "snd-aloop"];
    extraModulePackages = [ config.boot.kernelPackages.v4l2loopback.out ];
    supportedFilesystems = ["ntfs"];
    extraModprobeConfig = ''
      # exclusive_caps: Skype, Zoom, Teams etc. will only show device when actually streaming
      # card_label: Name of virtual camera, how it'll show up in Skype, Zoom, Teams
      # https://github.com/umlaeute/v4l2loopback
      options v4l2loopback exclusive_caps=1 card_label="Virtual Camera"
    '';
    binfmt = {
      emulatedSystems = ["aarch64-linux"];

      registrations."aarch64-linux" = {
        preserveArgvZero = true;
        matchCredentials = true;
        fixBinary = true;
      };
    };
  };

  fileSystems."/" = {
    device = "/dev/disk/by-uuid/2cd284bd-f0a1-48bc-868e-be3def467995";
    fsType = "ext4";
  };

  fileSystems."/boot/efi" = {
    device = "/dev/disk/by-uuid/F695-008D";
    fsType = "vfat";
  };

  fileSystems."/mnt/BulkStorage" =
    { device = "/dev/disk/by-label/GAMES";
      fsType = "ntfs-3g";
      options = [ "rw" "uid=1000"];
    };

  # Enables DHCP on each ethernet and wireless interface. In case of scripted networking
  # (the default) this is the recommended approach. When using systemd-networkd it's
  # still possible to use this option, but it's recommended to use it in conjunction
  # with explicit per-interface declarations with `networking.interfaces.<interface>.useDHCP`.
  networking.useDHCP = lib.mkDefault true;
  # networking.interfaces.eno1.useDHCP = lib.mkDefault true;

  hardware.cpu.intel.updateMicrocode = lib.mkDefault config.hardware.enableRedistributableFirmware;
}
