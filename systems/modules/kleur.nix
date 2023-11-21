{...}: let
  dark = {
    base = {
      background = "#060516";
      foreground = "#d4d5f2";
    };
    base16 = {
      base00 = "#060516";
      base01 = "#09081b";
      base02 = "#141327";
      base03 = "#2b2b41";
      base04 = "#60607a";
      base05 = "#dadbf8";
      base06 = "#e7e8ff";
      base07 = "#ff5d66";
      base08 = "#ab8be3";
      base09 = "#ea9d00";
      base0A = "#aaa8ff";
      base0B = "#27b892";
      base0C = "#00c2ba";
      base0D = "#acaaff";
      base0E = "#44a8e7";
      base0F = "#45455d";
    };
    overlay = {
      background = "#141327";
      foreground = "#e7e8ff";
    };
    primary = {
      background = "#433889";
      foreground = "#acaaff";
    };
    secondary = {
      background = "#004d85";
      foreground = "#44a8e7";
    };
    surface = {
      background = "#09081b";
      foreground = "#dadbf8";
    };
    teal = "#00c2ba";
    subtle = "#45455d";
    red = "#ff5d66";
    green = "#27b892";
    mauve = "#ab8be3";
    orange = "#ea9d00";
  };
in {
  tntman.theme = dark;
}