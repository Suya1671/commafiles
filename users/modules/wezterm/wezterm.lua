-- This table will hold the configuration.
local config = {}

-- In newer versions of wezterm, use the config_builder which will
-- help provide clearer error messages
if wezterm.config_builder then
  config = wezterm.config_builder()
end

config.color_scheme = 'stylix'
config.font = wezterm.font_with_fallback {
  "ComicCodeLigatures Nerd Font",
  "JetBrains Mono Nerd Font Mono",
}
config.enable_wayland = true
config.enable_tab_bar = false
config.underline_thickness = "2pt"
config.enable_kitty_keyboard = true

config.visual_bell = {
  fade_in_function = 'EaseIn',
  fade_in_duration_ms = 150,
  fade_out_function = 'EaseOut',
  fade_out_duration_ms = 150,
}
local gpus = wezterm.gui.enumerate_gpus()
config.front_end = "WebGpu"
config.webgpu_preferred_adapter = gpus[1]

-- and finally, return the configuration to wezterm
return config
