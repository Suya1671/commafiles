import "../gtk-types/gtk-3.0-ambient.js";
import "../gtk-types/gdk-3.0-ambient.js";
import "../gtk-types/cairo-1.0-ambient.js";
import "../gtk-types/gnomebluetooth-3.0-ambient.js";
import "../gtk-types/dbusmenugtk3-0.4-ambient.js";
import "../gtk-types/gobject-2.0-ambient.js";
import "../gtk-types/nm-1.0-ambient.js";
import "../gtk-types/soup-3.0-ambient.js";
import "../gtk-types/gvc-1.0-ambient.js";
import Gio from 'gi://Gio';
import Service from '../service.js';
declare class Application extends Service {
    _app: InstanceType<typeof Gio.DesktopAppInfo>;
    _frequency: number;
    get app(): import("../gtk-types/gio-2.0.js").Gio.DesktopAppInfo;
    get frequency(): number;
    set frequency(value: number);
    get name(): string | null;
    get desktop(): string | null;
    get description(): string | null;
    get wm_class(): string | null;
    get executable(): string;
    get icon_name(): string | null;
    constructor(app: InstanceType<typeof Gio.DesktopAppInfo>, frequency?: number);
    private _match;
    getKey(key: string): string | null;
    match(term: string): boolean;
    launch(): void;
}
declare class Applications extends Service {
    private _list;
    private _frequents;
    query(term: string): Application[];
    constructor();
    get list(): Application[];
    get frequents(): {
        [app: string]: number;
    };
    private _launched;
    private _sync;
}
declare const _default: Applications;
export default _default;