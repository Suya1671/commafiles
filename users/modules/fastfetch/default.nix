{pkgs, ...}: {
  programs.fastfetch = {
    enable = true;
    settings = builtins.fromJSON (builtins.readFile ./config/config.json);
  };
}
