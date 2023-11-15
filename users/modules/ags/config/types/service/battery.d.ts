import "../gtk-types/gtk-3.0-ambient.js";
import "../gtk-types/gdk-3.0-ambient.js";
import "../gtk-types/cairo-1.0-ambient.js";
import "../gtk-types/gnomebluetooth-3.0-ambient.js";
import "../gtk-types/dbusmenugtk3-0.4-ambient.js";
import "../gtk-types/gobject-2.0-ambient.js";
import "../gtk-types/nm-1.0-ambient.js";
import "../gtk-types/soup-3.0-ambient.js";
import "../gtk-types/gvc-1.0-ambient.js";
import Service from '../service.js';
declare class Battery extends Service {
    private _proxy;
    private _available;
    private _percent;
    private _charging;
    private _charged;
    private _iconName;
    private _timeRemaining;
    private _energy;
    private _energyFull;
    private _energyRate;
    get available(): boolean;
    get percent(): number;
    get charging(): boolean;
    get charged(): boolean;
    get icon_name(): string;
    get time_remaining(): number;
    get energy(): number;
    get energy_full(): number;
    get energy_rate(): number;
    constructor();
    private _sync;
}
declare const _default: Battery;
export default _default;