import "../gtk-types/gtk-3.0-ambient.js";
import "../gtk-types/gdk-3.0-ambient.js";
import "../gtk-types/cairo-1.0-ambient.js";
import "../gtk-types/gnomebluetooth-3.0-ambient.js";
import "../gtk-types/dbusmenugtk3-0.4-ambient.js";
import "../gtk-types/gobject-2.0-ambient.js";
import "../gtk-types/nm-1.0-ambient.js";
import "../gtk-types/soup-3.0-ambient.js";
import "../gtk-types/gvc-1.0-ambient.js";
import Gtk from 'gi://Gtk?version=3.0';
import type GtkTypes from "../gtk-types/gtk-3.0.js";
import Gdk from 'gi://Gdk?version=3.0';
import { type Command } from './widget.js';
export interface SliderProps extends GtkTypes.Scale.ConstructorProperties {
    onChange?: Command;
    value?: number;
    min?: number;
    max?: number;
    step?: number;
}
export default class AgsSlider extends Gtk.Scale {
    onChange: Command;
    constructor({ onChange, value, min, max, step, ...rest }?: SliderProps);
    get value(): number;
    set value(value: number);
    get min(): number;
    set min(min: number);
    get max(): number;
    set max(max: number);
    get step(): number;
    set step(step: number);
    get dragging(): boolean;
    set dragging(dragging: boolean);
    get vertical(): boolean;
    set vertical(vertical: boolean);
    vfunc_button_release_event(event: InstanceType<typeof Gdk.EventButton>): boolean;
    vfunc_button_press_event(event: InstanceType<typeof Gdk.EventButton>): boolean;
    vfunc_key_press_event(event: InstanceType<typeof Gdk.EventKey>): boolean;
    vfunc_key_release_event(event: InstanceType<typeof Gdk.EventKey>): boolean;
    vfunc_scroll_event(event: InstanceType<typeof Gdk.EventScroll>): boolean;
}