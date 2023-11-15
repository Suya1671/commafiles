import "../gtk-types/gtk-3.0-ambient.js";
import "../gtk-types/gdk-3.0-ambient.js";
import "../gtk-types/cairo-1.0-ambient.js";
import "../gtk-types/gnomebluetooth-3.0-ambient.js";
import "../gtk-types/dbusmenugtk3-0.4-ambient.js";
import "../gtk-types/gobject-2.0-ambient.js";
import "../gtk-types/nm-1.0-ambient.js";
import "../gtk-types/soup-3.0-ambient.js";
import "../gtk-types/gvc-1.0-ambient.js";
import GLib from 'gi://GLib';
import Service from '../service.js';
interface Action {
    id: string;
    label: string;
}
interface Hints {
    'image-data'?: InstanceType<typeof GLib.Variant>;
    'desktop-entry'?: InstanceType<typeof GLib.Variant>;
    'urgency'?: InstanceType<typeof GLib.Variant>;
}
interface NotifcationJson {
    id: number;
    appName: string;
    appEntry: string | null;
    appIcon: string;
    summary: string;
    body: string;
    actions: Action[];
    urgency: string;
    time: number;
    image: string | null;
}
declare class Notification extends Service {
    _id: number;
    _appName: string;
    _appEntry: string | null;
    _appIcon: string;
    _summary: string;
    _body: string;
    _actions: Action[];
    _urgency: string;
    _time: number;
    _image: string | null;
    _popup: boolean;
    get id(): number;
    get app_name(): string;
    get app_entry(): string | null;
    get app_icon(): string;
    get summary(): string;
    get body(): string;
    get actions(): Action[];
    get urgency(): string;
    get time(): number;
    get image(): string | null;
    get popup(): boolean;
    constructor(appName: string, id: number, appIcon: string, summary: string, body: string, acts: string[], hints: Hints, popup: boolean);
    dismiss(): void;
    close(): void;
    invoke(id: string): void;
    toJson(cacheActions?: boolean): {
        id: number;
        appName: string;
        appEntry: string | null;
        appIcon: string;
        summary: string;
        body: string;
        actions: Action[];
        urgency: string;
        time: number;
        image: string | null;
    };
    static fromJson(json: NotifcationJson): Notification;
    private _appIconIsFile;
    private _parseImageData;
}
declare class Notifications extends Service {
    private _dbus;
    private _notifications;
    private _dnd;
    private _idCount;
    constructor();
    get dnd(): boolean;
    set dnd(value: boolean);
    get notifications(): Notification[];
    get popups(): Notification[];
    getPopup(id: number): Notification | null;
    getNotification(id: number): Notification | undefined;
    Notify(appName: string, replacesId: number, appIcon: string, summary: string, body: string, acts: string[], hints: Hints): number;
    Clear(): void;
    DismissNotification(id: number): void;
    CloseNotification(id: number): void;
    InvokeAction(id: number, actionId: string): void;
    GetCapabilities(): string[];
    GetServerInformation(): import("../gtk-types/glib-2.0.js").GLib.Variant;
    clear(): void;
    private _addNotification;
    private _onDismissed;
    private _onClosed;
    private _onInvoked;
    private _register;
    private _readFromFile;
    private _cache;
}
declare const _default: Notifications;
export default _default;