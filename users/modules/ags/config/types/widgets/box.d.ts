import "../gtk-types/gtk-3.0-ambient";
import "../gtk-types/gdk-3.0-ambient";
import "../gtk-types/cairo-1.0-ambient";
import "../gtk-types/gnomebluetooth-3.0-ambient";
import "../gtk-types/dbusmenugtk3-0.4-ambient";
import "../gtk-types/gobject-2.0-ambient";
import "../gtk-types/nm-1.0-ambient";
import "../gtk-types/soup-3.0-ambient";
import "../gtk-types/gvc-1.0-ambient";
import Gtk from 'gi://Gtk?version=3.0';
import GtkTypes from "../gtk-types/gtk-3.0";
export interface BoxProps extends GtkTypes.Box.ConstructorProperties {
    children?: GtkTypes.Widget[];
    vertical?: boolean;
}
export default class AgsBox extends Gtk.Box {
    constructor({ children, ...rest }?: BoxProps);
    get children(): InstanceType<typeof Gtk.Widget>[] | null;
    set children(children: InstanceType<typeof Gtk.Widget>[] | null);
    get vertical(): boolean;
    set vertical(vertical: boolean);
}