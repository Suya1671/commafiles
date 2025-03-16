{pkgs, ...}: {
  fonts = {
    enableDefaultPackages = true;
    packages = with pkgs; [
      font-awesome
      noto-fonts
      noto-fonts-lgc-plus
      noto-fonts-cjk-sans
      inter
      emacs-all-the-icons-fonts
      hack-font
      open-sans
    ];

    fontconfig = {
      defaultFonts = {
        sansSerif = ["Recursive Sans Linear" "Inter"];
        monospace = ["ComicCodeLigatures Nerd Font" "JetBrainsMono Nerd Font"];
      };
    };
  };
}
