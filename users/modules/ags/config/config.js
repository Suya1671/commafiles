import { SetupPowerMode } from "./powermode/index.js";
import { App } from "./imports.js";
import { NotificationsPopup } from "./notifications/index.js";
import { Launcher } from "./launcher/index.js";

/**
 * Logs the given input and returns it. Useful for debugging functional code.
 * @template T
 * @param {T} input
 * @returns {T}
 */
export const log = (/** @type {T} */ input) => {
  // @ts-expect-error this works
  console.log(input);
  return input;
};

export default {
  notificationPopupTimeout: 5000, // milliseconds
  style: App.configDir + "/style.css",
  windows: [
    ...SetupPowerMode(),
    NotificationsPopup(),
    Launcher(),
  ],
};
