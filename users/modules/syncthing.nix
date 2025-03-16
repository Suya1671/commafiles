{...}: {
  services.syncthing = {
    enable = true;
    tray.enable = true;
  };

	systemd.user.targets.tray = {
		Unit = {
			Description = "Home Manager System Tray";
			Requires = [ "graphical-session-pre.target" ];
		};
	};
}
