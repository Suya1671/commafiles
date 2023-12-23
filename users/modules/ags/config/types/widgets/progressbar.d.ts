/// <reference types="@girs/dbusmenugtk3-0.4/node_modules/@girs/gtk-3.0/gtk-3.0-ambient.js" />
/// <reference types="@girs/gtk-3.0/gtk-3.0-ambient.js" />
import { type BaseProps } from "./widget.js";
import Gtk from "node_modules/@girs/gtk-3.0/gtk-3.0";
export type ProgressBarProps = BaseProps<
  AgsProgressBar,
  Gtk.ProgressBar.ConstructorProperties & {
    vertical?: boolean;
    value?: number;
  }
>;
declare const AgsProgressBar_base: {
  new (...args: any[]): {
    _init(config?: Gtk.Widget.ConstructorProperties): void;
    _handleParamProp<Prop extends keyof any>(prop: Prop, value: any): void;
    readonly is_destroyed: boolean;
    _get<T>(field: string): T;
    _set<T_1>(field: string, value: T_1, notify?: boolean): void;
    connections: import("./widget.js").Connection<Gtk.ProgressBar>[];
    binds: import("./widget.js").Bind[];
    properties: import("./widget.js").Property[];
    connectTo<GObject extends import("@girs/gobject-2.0").GObject.Object>(
      gobject: GObject,
      callback: (self: Gtk.ProgressBar, ...args: any[]) => void,
      signal?: string | undefined,
    ): any;
    attribute: any;
    _setPack(
      orientation: "h" | "v",
      align: "fill" | "start" | "end" | "center" | "baseline",
    ): void;
    _getPack(
      orientation: "h" | "v",
    ): "fill" | "start" | "end" | "center" | "baseline";
    hpack: "fill" | "start" | "end" | "center" | "baseline";
    vpack: "fill" | "start" | "end" | "center" | "baseline";
    toggleClassName(className: string, condition?: boolean): void;
    class_name: string;
    class_names: string[];
    _cssProvider: Gtk.CssProvider;
    setCss(css: string): void;
    css: string;
    get child(): Gtk.Widget | null;
    set child(child: Gtk.Widget);
    _updateCursor(): void;
    cursor: import("./widget.js").Cursor;
    isHovered(event?: import("@girs/gdk-3.0").Gdk.Event | undefined): boolean;
    app_paintable: boolean;
    appPaintable: boolean;
    can_default: boolean;
    canDefault: boolean;
    can_focus: boolean;
    canFocus: boolean;
    readonly composite_child: boolean;
    readonly compositeChild: boolean;
    double_buffered: boolean;
    doubleBuffered: boolean;
    events: import("@girs/gdk-3.0").Gdk.EventMask;
    expand: boolean;
    focus_on_click: boolean;
    focusOnClick: boolean;
    halign: Gtk.Align;
    has_default: boolean;
    hasDefault: boolean;
    has_focus: boolean;
    hasFocus: boolean;
    has_tooltip: boolean;
    hasTooltip: boolean;
    height_request: number;
    heightRequest: number;
    hexpand: boolean;
    hexpand_set: boolean;
    hexpandSet: boolean;
    is_focus: boolean;
    isFocus: boolean;
    margin: number;
    margin_bottom: number;
    marginBottom: number;
    margin_end: number;
    marginEnd: number;
    margin_left: number;
    marginLeft: number;
    margin_right: number;
    marginRight: number;
    margin_start: number;
    marginStart: number;
    margin_top: number;
    marginTop: number;
    name: string | null;
    no_show_all: boolean;
    noShowAll: boolean;
    opacity: number;
    parent: Gtk.Container;
    receives_default: boolean;
    receivesDefault: boolean;
    readonly scale_factor: number;
    readonly scaleFactor: number;
    sensitive: boolean;
    style: Gtk.Style;
    tooltip_markup: string | null;
    tooltipMarkup: string | null;
    tooltip_text: string | null;
    tooltipText: string | null;
    valign: Gtk.Align;
    vexpand: boolean;
    vexpand_set: boolean;
    vexpandSet: boolean;
    visible: boolean;
    width_request: number;
    widthRequest: number;
    readonly window: import("@girs/gdk-3.0").Gdk.Window;
    parent_instance: import("@girs/gobject-2.0").GObject.InitiallyUnowned;
    activate(): boolean;
    add_accelerator(
      accel_signal: string | null,
      accel_group: Gtk.AccelGroup,
      accel_key: number,
      accel_mods: import("@girs/gdk-3.0").Gdk.ModifierType,
      accel_flags: Gtk.AccelFlags,
    ): void;
    add_device_events(
      device: import("@girs/gdk-3.0").Gdk.Device,
      events: import("@girs/gdk-3.0").Gdk.EventMask,
    ): void;
    add_events(events: number): void;
    add_mnemonic_label(label: Gtk.Widget): void;
    add_tick_callback(callback: Gtk.TickCallback): number;
    can_activate_accel(signal_id: number): boolean;
    child_focus(direction: Gtk.DirectionType): boolean;
    child_notify(child_property: string | null): void;
    class_path(): [number, string | null, string | null];
    compute_expand(orientation: Gtk.Orientation): boolean;
    create_pango_context(): import("@girs/pango-1.0").Pango.Context;
    create_pango_layout(
      text: string | null,
    ): import("@girs/pango-1.0").Pango.Layout;
    destroy(): void;
    destroyed(widget_pointer: Gtk.Widget): Gtk.Widget;
    device_is_shadowed(device: import("@girs/gdk-3.0").Gdk.Device): boolean;
    drag_begin(
      targets: Gtk.TargetList,
      actions: import("@girs/gdk-3.0").Gdk.DragAction,
      button: number,
      event: import("@girs/gdk-3.0").Gdk.Event | null,
    ): import("@girs/gdk-3.0").Gdk.DragContext;
    drag_begin_with_coordinates(
      targets: Gtk.TargetList,
      actions: import("@girs/gdk-3.0").Gdk.DragAction,
      button: number,
      event: import("@girs/gdk-3.0").Gdk.Event | null,
      x: number,
      y: number,
    ): import("@girs/gdk-3.0").Gdk.DragContext;
    drag_check_threshold(
      start_x: number,
      start_y: number,
      current_x: number,
      current_y: number,
    ): boolean;
    drag_dest_add_image_targets(): void;
    drag_dest_add_text_targets(): void;
    drag_dest_add_uri_targets(): void;
    drag_dest_find_target(
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      target_list: Gtk.TargetList | null,
    ): import("@girs/gdk-3.0").Gdk.Atom;
    drag_dest_get_target_list(): Gtk.TargetList | null;
    drag_dest_get_track_motion(): boolean;
    drag_dest_set(
      flags: Gtk.DestDefaults,
      targets: Gtk.TargetEntry[] | null,
      actions: import("@girs/gdk-3.0").Gdk.DragAction,
    ): void;
    drag_dest_set_proxy(
      proxy_window: import("@girs/gdk-3.0").Gdk.Window,
      protocol: import("@girs/gdk-3.0").Gdk.DragProtocol,
      use_coordinates: boolean,
    ): void;
    drag_dest_set_target_list(target_list: Gtk.TargetList | null): void;
    drag_dest_set_track_motion(track_motion: boolean): void;
    drag_dest_unset(): void;
    drag_get_data(
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      target: import("@girs/gdk-3.0").Gdk.Atom,
      time_: number,
    ): void;
    drag_highlight(): void;
    drag_source_add_image_targets(): void;
    drag_source_add_text_targets(): void;
    drag_source_add_uri_targets(): void;
    drag_source_get_target_list(): Gtk.TargetList | null;
    drag_source_set(
      start_button_mask: import("@girs/gdk-3.0").Gdk.ModifierType,
      targets: Gtk.TargetEntry[] | null,
      actions: import("@girs/gdk-3.0").Gdk.DragAction,
    ): void;
    drag_source_set_icon_gicon(icon: import("@girs/gio-2.0").Gio.Icon): void;
    drag_source_set_icon_name(icon_name: string | null): void;
    drag_source_set_icon_pixbuf(
      pixbuf: import("@girs/gdkpixbuf-2.0").GdkPixbuf.Pixbuf,
    ): void;
    drag_source_set_icon_stock(stock_id: string | null): void;
    drag_source_set_target_list(target_list: Gtk.TargetList | null): void;
    drag_source_unset(): void;
    drag_unhighlight(): void;
    draw(cr: import("@girs/cairo-1.0").cairo.Context): void;
    ensure_style(): void;
    error_bell(): void;
    event(event: import("@girs/gdk-3.0").Gdk.Event): boolean;
    freeze_child_notify(): void;
    get_accessible(): import("@girs/atk-1.0").Atk.Object;
    get_action_group(
      prefix: string | null,
    ): import("@girs/gio-2.0").Gio.ActionGroup | null;
    get_allocated_baseline(): number;
    get_allocated_height(): number;
    get_allocated_size(): [import("@girs/gdk-3.0").Gdk.Rectangle, number];
    get_allocated_width(): number;
    get_allocation(): import("@girs/gdk-3.0").Gdk.Rectangle;
    get_ancestor(
      widget_type: import("@girs/gobject-2.0").GObject.GType<unknown>,
    ): Gtk.Widget | null;
    get_app_paintable(): boolean;
    get_can_default(): boolean;
    get_can_focus(): boolean;
    get_child_requisition(): Gtk.Requisition;
    get_child_visible(): boolean;
    get_clip(): import("@girs/gdk-3.0").Gdk.Rectangle;
    get_clipboard(selection: import("@girs/gdk-3.0").Gdk.Atom): Gtk.Clipboard;
    get_composite_name(): string | null;
    get_device_enabled(device: import("@girs/gdk-3.0").Gdk.Device): boolean;
    get_device_events(
      device: import("@girs/gdk-3.0").Gdk.Device,
    ): import("@girs/gdk-3.0").Gdk.EventMask;
    get_direction(): Gtk.TextDirection;
    get_display(): import("@girs/gdk-3.0").Gdk.Display;
    get_double_buffered(): boolean;
    get_events(): number;
    get_focus_on_click(): boolean;
    get_font_map(): import("@girs/pango-1.0").Pango.FontMap | null;
    get_font_options(): import("@girs/cairo-1.0").cairo.FontOptions | null;
    get_frame_clock(): import("@girs/gdk-3.0").Gdk.FrameClock | null;
    get_halign(): Gtk.Align;
    get_has_tooltip(): boolean;
    get_has_window(): boolean;
    get_hexpand(): boolean;
    get_hexpand_set(): boolean;
    get_mapped(): boolean;
    get_margin_bottom(): number;
    get_margin_end(): number;
    get_margin_left(): number;
    get_margin_right(): number;
    get_margin_start(): number;
    get_margin_top(): number;
    get_modifier_mask(
      intent: import("@girs/gdk-3.0").Gdk.ModifierIntent,
    ): import("@girs/gdk-3.0").Gdk.ModifierType;
    get_modifier_style(): Gtk.RcStyle;
    get_name(): string | null;
    get_no_show_all(): boolean;
    get_opacity(): number;
    get_pango_context(): import("@girs/pango-1.0").Pango.Context;
    get_parent(): Gtk.Widget | null;
    get_parent_window(): import("@girs/gdk-3.0").Gdk.Window | null;
    get_path(): Gtk.WidgetPath;
    get_pointer(): [number, number];
    get_preferred_height(): [number, number];
    get_preferred_height_and_baseline_for_width(
      width: number,
    ): [number, number, number, number];
    get_preferred_height_for_width(width: number): [number, number];
    get_preferred_size(): [Gtk.Requisition, Gtk.Requisition];
    get_preferred_width(): [number, number];
    get_preferred_width_for_height(height: number): [number, number];
    get_realized(): boolean;
    get_receives_default(): boolean;
    get_request_mode(): Gtk.SizeRequestMode;
    get_requisition(): Gtk.Requisition;
    get_root_window(): import("@girs/gdk-3.0").Gdk.Window;
    get_scale_factor(): number;
    get_screen(): import("@girs/gdk-3.0").Gdk.Screen;
    get_sensitive(): boolean;
    get_settings(): Gtk.Settings;
    get_size_request(): [number, number];
    get_state(): Gtk.StateType;
    get_state_flags(): Gtk.StateFlags;
    get_style(): Gtk.Style;
    get_style_context(): Gtk.StyleContext;
    get_support_multidevice(): boolean;
    get_template_child(
      widget_type: import("@girs/gobject-2.0").GObject.GType<unknown>,
      name: string | null,
    ): import("@girs/gobject-2.0").GObject.Object;
    get_tooltip_markup(): string | null;
    get_tooltip_text(): string | null;
    get_tooltip_window(): Gtk.Window;
    get_toplevel(): Gtk.Widget;
    get_valign(): Gtk.Align;
    get_valign_with_baseline(): Gtk.Align;
    get_vexpand(): boolean;
    get_vexpand_set(): boolean;
    get_visible(): boolean;
    get_visual(): import("@girs/gdk-3.0").Gdk.Visual;
    get_window(): import("@girs/gdk-3.0").Gdk.Window | null;
    grab_add(): void;
    grab_default(): void;
    grab_focus(): void;
    grab_remove(): void;
    has_grab(): boolean;
    has_rc_style(): boolean;
    has_screen(): boolean;
    has_visible_focus(): boolean;
    hide(): void;
    hide_on_delete(): boolean;
    in_destruction(): boolean;
    init_template(): void;
    input_shape_combine_region(
      region: import("@girs/cairo-1.0").cairo.Region | null,
    ): void;
    insert_action_group(
      name: string | null,
      group: import("@girs/gio-2.0").Gio.ActionGroup | null,
    ): void;
    intersect(
      area: import("@girs/gdk-3.0").Gdk.Rectangle,
    ): [boolean, import("@girs/gdk-3.0").Gdk.Rectangle];
    is_ancestor(ancestor: Gtk.Widget): boolean;
    is_composited(): boolean;
    is_drawable(): boolean;
    is_sensitive(): boolean;
    is_toplevel(): boolean;
    is_visible(): boolean;
    keynav_failed(direction: Gtk.DirectionType): boolean;
    list_accel_closures(): import("@girs/gobject-2.0").GObject.TClosure<
      any,
      any
    >[];
    list_action_prefixes(): string[];
    list_mnemonic_labels(): Gtk.Widget[];
    map(): void;
    mnemonic_activate(group_cycling: boolean): boolean;
    modify_base(
      state: Gtk.StateType,
      color: import("@girs/gdk-3.0").Gdk.Color | null,
    ): void;
    modify_bg(
      state: Gtk.StateType,
      color: import("@girs/gdk-3.0").Gdk.Color | null,
    ): void;
    modify_cursor(
      primary: import("@girs/gdk-3.0").Gdk.Color | null,
      secondary: import("@girs/gdk-3.0").Gdk.Color | null,
    ): void;
    modify_fg(
      state: Gtk.StateType,
      color: import("@girs/gdk-3.0").Gdk.Color | null,
    ): void;
    modify_font(
      font_desc: import("@girs/pango-1.0").Pango.FontDescription | null,
    ): void;
    modify_style(style: Gtk.RcStyle): void;
    modify_text(
      state: Gtk.StateType,
      color: import("@girs/gdk-3.0").Gdk.Color | null,
    ): void;
    override_background_color(
      state: Gtk.StateFlags,
      color: import("@girs/gdk-3.0").Gdk.RGBA | null,
    ): void;
    override_color(
      state: Gtk.StateFlags,
      color: import("@girs/gdk-3.0").Gdk.RGBA | null,
    ): void;
    override_cursor(
      cursor: import("@girs/gdk-3.0").Gdk.RGBA | null,
      secondary_cursor: import("@girs/gdk-3.0").Gdk.RGBA | null,
    ): void;
    override_font(
      font_desc: import("@girs/pango-1.0").Pango.FontDescription | null,
    ): void;
    override_symbolic_color(
      name: string | null,
      color: import("@girs/gdk-3.0").Gdk.RGBA | null,
    ): void;
    path(): [number, string | null, string | null];
    queue_allocate(): void;
    queue_compute_expand(): void;
    queue_draw(): void;
    queue_draw_area(x: number, y: number, width: number, height: number): void;
    queue_draw_region(region: import("@girs/cairo-1.0").cairo.Region): void;
    queue_resize(): void;
    queue_resize_no_redraw(): void;
    realize(): void;
    region_intersect(
      region: import("@girs/cairo-1.0").cairo.Region,
    ): import("@girs/cairo-1.0").cairo.Region;
    register_window(window: import("@girs/gdk-3.0").Gdk.Window): void;
    remove_accelerator(
      accel_group: Gtk.AccelGroup,
      accel_key: number,
      accel_mods: import("@girs/gdk-3.0").Gdk.ModifierType,
    ): boolean;
    remove_mnemonic_label(label: Gtk.Widget): void;
    remove_tick_callback(id: number): void;
    render_icon(
      stock_id: string | null,
      size: number,
      detail: string | null,
    ): import("@girs/gdkpixbuf-2.0").GdkPixbuf.Pixbuf | null;
    render_icon_pixbuf(
      stock_id: string | null,
      size: number,
    ): import("@girs/gdkpixbuf-2.0").GdkPixbuf.Pixbuf | null;
    reparent(new_parent: Gtk.Widget): void;
    reset_rc_styles(): void;
    reset_style(): void;
    send_expose(event: import("@girs/gdk-3.0").Gdk.Event): number;
    send_focus_change(event: import("@girs/gdk-3.0").Gdk.Event): boolean;
    set_accel_path(
      accel_path: string | null,
      accel_group: Gtk.AccelGroup | null,
    ): void;
    set_allocation(allocation: import("@girs/gdk-3.0").Gdk.Rectangle): void;
    set_app_paintable(app_paintable: boolean): void;
    set_can_default(can_default: boolean): void;
    set_can_focus(can_focus: boolean): void;
    set_child_visible(is_visible: boolean): void;
    set_clip(clip: import("@girs/gdk-3.0").Gdk.Rectangle): void;
    set_composite_name(name: string | null): void;
    set_device_enabled(
      device: import("@girs/gdk-3.0").Gdk.Device,
      enabled: boolean,
    ): void;
    set_device_events(
      device: import("@girs/gdk-3.0").Gdk.Device,
      events: import("@girs/gdk-3.0").Gdk.EventMask,
    ): void;
    set_direction(dir: Gtk.TextDirection): void;
    set_double_buffered(double_buffered: boolean): void;
    set_events(events: number): void;
    set_focus_on_click(focus_on_click: boolean): void;
    set_font_map(
      font_map: import("@girs/pango-1.0").Pango.FontMap | null,
    ): void;
    set_font_options(
      options: import("@girs/cairo-1.0").cairo.FontOptions | null,
    ): void;
    set_halign(align: Gtk.Align): void;
    set_has_tooltip(has_tooltip: boolean): void;
    set_has_window(has_window: boolean): void;
    set_hexpand(expand: boolean): void;
    set_hexpand_set(set: boolean): void;
    set_mapped(mapped: boolean): void;
    set_margin_bottom(margin: number): void;
    set_margin_end(margin: number): void;
    set_margin_left(margin: number): void;
    set_margin_right(margin: number): void;
    set_margin_start(margin: number): void;
    set_margin_top(margin: number): void;
    set_name(name: string | null): void;
    set_no_show_all(no_show_all: boolean): void;
    set_opacity(opacity: number): void;
    set_parent(parent: Gtk.Widget): void;
    set_parent_window(parent_window: import("@girs/gdk-3.0").Gdk.Window): void;
    set_realized(realized: boolean): void;
    set_receives_default(receives_default: boolean): void;
    set_redraw_on_allocate(redraw_on_allocate: boolean): void;
    set_sensitive(sensitive: boolean): void;
    set_size_request(width: number, height: number): void;
    set_state(state: Gtk.StateType): void;
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void;
    set_style(style: Gtk.Style | null): void;
    set_support_multidevice(support_multidevice: boolean): void;
    set_tooltip_markup(markup: string | null): void;
    set_tooltip_text(text: string | null): void;
    set_tooltip_window(custom_window: Gtk.Window | null): void;
    set_valign(align: Gtk.Align): void;
    set_vexpand(expand: boolean): void;
    set_vexpand_set(set: boolean): void;
    set_visible(visible: boolean): void;
    set_visual(visual: import("@girs/gdk-3.0").Gdk.Visual | null): void;
    set_window(window: import("@girs/gdk-3.0").Gdk.Window): void;
    shape_combine_region(
      region: import("@girs/cairo-1.0").cairo.Region | null,
    ): void;
    show(): void;
    show_all(): void;
    show_now(): void;
    size_allocate(allocation: import("@girs/gdk-3.0").Gdk.Rectangle): void;
    size_allocate_with_baseline(
      allocation: import("@girs/gdk-3.0").Gdk.Rectangle,
      baseline: number,
    ): void;
    size_request(): Gtk.Requisition;
    style_attach(): void;
    style_get_property(property_name: string | null, value: any): void;
    thaw_child_notify(): void;
    translate_coordinates(
      dest_widget: Gtk.Widget,
      src_x: number,
      src_y: number,
    ): [boolean, number, number];
    trigger_tooltip_query(): void;
    unmap(): void;
    unparent(): void;
    unrealize(): void;
    unregister_window(window: import("@girs/gdk-3.0").Gdk.Window): void;
    unset_state_flags(flags: Gtk.StateFlags): void;
    vfunc_adjust_baseline_allocation(baseline: number): void;
    vfunc_adjust_baseline_request(
      minimum_baseline: number,
      natural_baseline: number,
    ): void;
    vfunc_adjust_size_allocation(
      orientation: Gtk.Orientation,
      minimum_size: number,
      natural_size: number,
      allocated_pos: number,
      allocated_size: number,
    ): void;
    vfunc_adjust_size_request(
      orientation: Gtk.Orientation,
      minimum_size: number,
      natural_size: number,
    ): void;
    vfunc_button_press_event(
      event: import("@girs/gdk-3.0").Gdk.EventButton,
    ): boolean;
    vfunc_button_release_event(
      event: import("@girs/gdk-3.0").Gdk.EventButton,
    ): boolean;
    vfunc_can_activate_accel(signal_id: number): boolean;
    vfunc_child_notify(
      child_property: import("@girs/gobject-2.0").GObject.ParamSpec,
    ): void;
    vfunc_composited_changed(): void;
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
    vfunc_configure_event(
      event: import("@girs/gdk-3.0").Gdk.EventConfigure,
    ): boolean;
    vfunc_damage_event(event: import("@girs/gdk-3.0").Gdk.EventExpose): boolean;
    vfunc_delete_event(event: import("@girs/gdk-3.0").Gdk.EventAny): boolean;
    vfunc_destroy(): void;
    vfunc_destroy_event(event: import("@girs/gdk-3.0").Gdk.EventAny): boolean;
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
    vfunc_dispatch_child_properties_changed(
      n_pspecs: number,
      pspecs: import("@girs/gobject-2.0").GObject.ParamSpec,
    ): void;
    vfunc_drag_begin(context: import("@girs/gdk-3.0").Gdk.DragContext): void;
    vfunc_drag_data_delete(
      context: import("@girs/gdk-3.0").Gdk.DragContext,
    ): void;
    vfunc_drag_data_get(
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      selection_data: Gtk.SelectionData,
      info: number,
      time_: number,
    ): void;
    vfunc_drag_data_received(
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      x: number,
      y: number,
      selection_data: Gtk.SelectionData,
      info: number,
      time_: number,
    ): void;
    vfunc_drag_drop(
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      x: number,
      y: number,
      time_: number,
    ): boolean;
    vfunc_drag_end(context: import("@girs/gdk-3.0").Gdk.DragContext): void;
    vfunc_drag_failed(
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      result: Gtk.DragResult,
    ): boolean;
    vfunc_drag_leave(
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      time_: number,
    ): void;
    vfunc_drag_motion(
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      x: number,
      y: number,
      time_: number,
    ): boolean;
    vfunc_draw(cr: import("@girs/cairo-1.0").cairo.Context): boolean;
    vfunc_enter_notify_event(
      event: import("@girs/gdk-3.0").Gdk.EventCrossing,
    ): boolean;
    vfunc_event(event: import("@girs/gdk-3.0").Gdk.Event): boolean;
    vfunc_focus(direction: Gtk.DirectionType): boolean;
    vfunc_focus_in_event(
      event: import("@girs/gdk-3.0").Gdk.EventFocus,
    ): boolean;
    vfunc_focus_out_event(
      event: import("@girs/gdk-3.0").Gdk.EventFocus,
    ): boolean;
    vfunc_get_accessible(): import("@girs/atk-1.0").Atk.Object;
    vfunc_get_preferred_height(): [number, number];
    vfunc_get_preferred_height_and_baseline_for_width(
      width: number,
    ): [number, number, number, number];
    vfunc_get_preferred_height_for_width(width: number): [number, number];
    vfunc_get_preferred_width(): [number, number];
    vfunc_get_preferred_width_for_height(height: number): [number, number];
    vfunc_get_request_mode(): Gtk.SizeRequestMode;
    vfunc_grab_broken_event(
      event: import("@girs/gdk-3.0").Gdk.EventGrabBroken,
    ): boolean;
    vfunc_grab_focus(): void;
    vfunc_grab_notify(was_grabbed: boolean): void;
    vfunc_hide(): void;
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void;
    vfunc_key_press_event(event: import("@girs/gdk-3.0").Gdk.EventKey): boolean;
    vfunc_key_release_event(
      event: import("@girs/gdk-3.0").Gdk.EventKey,
    ): boolean;
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
    vfunc_leave_notify_event(
      event: import("@girs/gdk-3.0").Gdk.EventCrossing,
    ): boolean;
    vfunc_map(): void;
    vfunc_map_event(event: import("@girs/gdk-3.0").Gdk.EventAny): boolean;
    vfunc_mnemonic_activate(group_cycling: boolean): boolean;
    vfunc_motion_notify_event(
      event: import("@girs/gdk-3.0").Gdk.EventMotion,
    ): boolean;
    vfunc_move_focus(direction: Gtk.DirectionType): void;
    vfunc_parent_set(previous_parent: Gtk.Widget): void;
    vfunc_popup_menu(): boolean;
    vfunc_property_notify_event(
      event: import("@girs/gdk-3.0").Gdk.EventProperty,
    ): boolean;
    vfunc_proximity_in_event(
      event: import("@girs/gdk-3.0").Gdk.EventProximity,
    ): boolean;
    vfunc_proximity_out_event(
      event: import("@girs/gdk-3.0").Gdk.EventProximity,
    ): boolean;
    vfunc_query_tooltip(
      x: number,
      y: number,
      keyboard_tooltip: boolean,
      tooltip: Gtk.Tooltip,
    ): boolean;
    vfunc_queue_draw_region(
      region: import("@girs/cairo-1.0").cairo.Region,
    ): void;
    vfunc_realize(): void;
    vfunc_screen_changed(
      previous_screen: import("@girs/gdk-3.0").Gdk.Screen,
    ): void;
    vfunc_scroll_event(event: import("@girs/gdk-3.0").Gdk.EventScroll): boolean;
    vfunc_selection_clear_event(
      event: import("@girs/gdk-3.0").Gdk.EventSelection,
    ): boolean;
    vfunc_selection_get(
      selection_data: Gtk.SelectionData,
      info: number,
      time_: number,
    ): void;
    vfunc_selection_notify_event(
      event: import("@girs/gdk-3.0").Gdk.EventSelection,
    ): boolean;
    vfunc_selection_received(
      selection_data: Gtk.SelectionData,
      time_: number,
    ): void;
    vfunc_selection_request_event(
      event: import("@girs/gdk-3.0").Gdk.EventSelection,
    ): boolean;
    vfunc_show(): void;
    vfunc_show_all(): void;
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean;
    vfunc_size_allocate(
      allocation: import("@girs/gdk-3.0").Gdk.Rectangle,
    ): void;
    vfunc_state_changed(previous_state: Gtk.StateType): void;
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
    vfunc_style_set(previous_style: Gtk.Style): void;
    vfunc_style_updated(): void;
    vfunc_touch_event(event: import("@girs/gdk-3.0").Gdk.EventTouch): boolean;
    vfunc_unmap(): void;
    vfunc_unmap_event(event: import("@girs/gdk-3.0").Gdk.EventAny): boolean;
    vfunc_unrealize(): void;
    vfunc_visibility_notify_event(
      event: import("@girs/gdk-3.0").Gdk.EventVisibility,
    ): boolean;
    vfunc_window_state_event(
      event: import("@girs/gdk-3.0").Gdk.EventWindowState,
    ): boolean;
    connect(
      sigName: "accel-closures-changed",
      callback: Gtk.Widget.AccelClosuresChangedSignalCallback,
    ): number;
    connect(
      sigName: "button-press-event",
      callback: Gtk.Widget.ButtonPressEventSignalCallback,
    ): number;
    connect(
      sigName: "button-release-event",
      callback: Gtk.Widget.ButtonReleaseEventSignalCallback,
    ): number;
    connect(
      sigName: "can-activate-accel",
      callback: Gtk.Widget.CanActivateAccelSignalCallback,
    ): number;
    connect(
      sigName: "child-notify",
      callback: Gtk.Widget.ChildNotifySignalCallback,
    ): number;
    connect(
      sigName: "composited-changed",
      callback: Gtk.Widget.CompositedChangedSignalCallback,
    ): number;
    connect(
      sigName: "configure-event",
      callback: Gtk.Widget.ConfigureEventSignalCallback,
    ): number;
    connect(
      sigName: "damage-event",
      callback: Gtk.Widget.DamageEventSignalCallback,
    ): number;
    connect(
      sigName: "delete-event",
      callback: Gtk.Widget.DeleteEventSignalCallback,
    ): number;
    connect(
      sigName: "destroy",
      callback: Gtk.Widget.DestroySignalCallback,
    ): number;
    connect(
      sigName: "destroy-event",
      callback: Gtk.Widget.DestroyEventSignalCallback,
    ): number;
    connect(
      sigName: "direction-changed",
      callback: Gtk.Widget.DirectionChangedSignalCallback,
    ): number;
    connect(
      sigName: "drag-begin",
      callback: Gtk.Widget.DragBeginSignalCallback,
    ): number;
    connect(
      sigName: "drag-data-delete",
      callback: Gtk.Widget.DragDataDeleteSignalCallback,
    ): number;
    connect(
      sigName: "drag-data-get",
      callback: Gtk.Widget.DragDataGetSignalCallback,
    ): number;
    connect(
      sigName: "drag-data-received",
      callback: Gtk.Widget.DragDataReceivedSignalCallback,
    ): number;
    connect(
      sigName: "drag-drop",
      callback: Gtk.Widget.DragDropSignalCallback,
    ): number;
    connect(
      sigName: "drag-end",
      callback: Gtk.Widget.DragEndSignalCallback,
    ): number;
    connect(
      sigName: "drag-failed",
      callback: Gtk.Widget.DragFailedSignalCallback,
    ): number;
    connect(
      sigName: "drag-leave",
      callback: Gtk.Widget.DragLeaveSignalCallback,
    ): number;
    connect(
      sigName: "drag-motion",
      callback: Gtk.Widget.DragMotionSignalCallback,
    ): number;
    connect(sigName: "draw", callback: Gtk.Widget.DrawSignalCallback): number;
    connect(
      sigName: "enter-notify-event",
      callback: Gtk.Widget.EnterNotifyEventSignalCallback,
    ): number;
    connect(sigName: "event", callback: Gtk.Widget.EventSignalCallback): number;
    connect(
      sigName: "event-after",
      callback: Gtk.Widget.EventAfterSignalCallback,
    ): number;
    connect(sigName: "focus", callback: Gtk.Widget.FocusSignalCallback): number;
    connect(
      sigName: "focus-in-event",
      callback: Gtk.Widget.FocusInEventSignalCallback,
    ): number;
    connect(
      sigName: "focus-out-event",
      callback: Gtk.Widget.FocusOutEventSignalCallback,
    ): number;
    connect(
      sigName: "grab-broken-event",
      callback: Gtk.Widget.GrabBrokenEventSignalCallback,
    ): number;
    connect(
      sigName: "grab-focus",
      callback: Gtk.Widget.GrabFocusSignalCallback,
    ): number;
    connect(
      sigName: "grab-notify",
      callback: Gtk.Widget.GrabNotifySignalCallback,
    ): number;
    connect(sigName: "hide", callback: Gtk.Widget.HideSignalCallback): number;
    connect(
      sigName: "hierarchy-changed",
      callback: Gtk.Widget.HierarchyChangedSignalCallback,
    ): number;
    connect(
      sigName: "key-press-event",
      callback: Gtk.Widget.KeyPressEventSignalCallback,
    ): number;
    connect(
      sigName: "key-release-event",
      callback: Gtk.Widget.KeyReleaseEventSignalCallback,
    ): number;
    connect(
      sigName: "keynav-failed",
      callback: Gtk.Widget.KeynavFailedSignalCallback,
    ): number;
    connect(
      sigName: "leave-notify-event",
      callback: Gtk.Widget.LeaveNotifyEventSignalCallback,
    ): number;
    connect(sigName: "map", callback: Gtk.Widget.MapSignalCallback): number;
    connect(
      sigName: "map-event",
      callback: Gtk.Widget.MapEventSignalCallback,
    ): number;
    connect(
      sigName: "mnemonic-activate",
      callback: Gtk.Widget.MnemonicActivateSignalCallback,
    ): number;
    connect(
      sigName: "motion-notify-event",
      callback: Gtk.Widget.MotionNotifyEventSignalCallback,
    ): number;
    connect(
      sigName: "move-focus",
      callback: Gtk.Widget.MoveFocusSignalCallback,
    ): number;
    connect(
      sigName: "parent-set",
      callback: Gtk.Widget.ParentSetSignalCallback,
    ): number;
    connect(
      sigName: "popup-menu",
      callback: Gtk.Widget.PopupMenuSignalCallback,
    ): number;
    connect(
      sigName: "property-notify-event",
      callback: Gtk.Widget.PropertyNotifyEventSignalCallback,
    ): number;
    connect(
      sigName: "proximity-in-event",
      callback: Gtk.Widget.ProximityInEventSignalCallback,
    ): number;
    connect(
      sigName: "proximity-out-event",
      callback: Gtk.Widget.ProximityOutEventSignalCallback,
    ): number;
    connect(
      sigName: "query-tooltip",
      callback: Gtk.Widget.QueryTooltipSignalCallback,
    ): number;
    connect(
      sigName: "realize",
      callback: Gtk.Widget.RealizeSignalCallback,
    ): number;
    connect(
      sigName: "screen-changed",
      callback: Gtk.Widget.ScreenChangedSignalCallback,
    ): number;
    connect(
      sigName: "scroll-event",
      callback: Gtk.Widget.ScrollEventSignalCallback,
    ): number;
    connect(
      sigName: "selection-clear-event",
      callback: Gtk.Widget.SelectionClearEventSignalCallback,
    ): number;
    connect(
      sigName: "selection-get",
      callback: Gtk.Widget.SelectionGetSignalCallback,
    ): number;
    connect(
      sigName: "selection-notify-event",
      callback: Gtk.Widget.SelectionNotifyEventSignalCallback,
    ): number;
    connect(
      sigName: "selection-received",
      callback: Gtk.Widget.SelectionReceivedSignalCallback,
    ): number;
    connect(
      sigName: "selection-request-event",
      callback: Gtk.Widget.SelectionRequestEventSignalCallback,
    ): number;
    connect(sigName: "show", callback: Gtk.Widget.ShowSignalCallback): number;
    connect(
      sigName: "show-help",
      callback: Gtk.Widget.ShowHelpSignalCallback,
    ): number;
    connect(
      sigName: "size-allocate",
      callback: Gtk.Widget.SizeAllocateSignalCallback,
    ): number;
    connect(
      sigName: "state-changed",
      callback: Gtk.Widget.StateChangedSignalCallback,
    ): number;
    connect(
      sigName: "state-flags-changed",
      callback: Gtk.Widget.StateFlagsChangedSignalCallback,
    ): number;
    connect(
      sigName: "style-set",
      callback: Gtk.Widget.StyleSetSignalCallback,
    ): number;
    connect(
      sigName: "style-updated",
      callback: Gtk.Widget.StyleUpdatedSignalCallback,
    ): number;
    connect(
      sigName: "touch-event",
      callback: Gtk.Widget.TouchEventSignalCallback,
    ): number;
    connect(sigName: "unmap", callback: Gtk.Widget.UnmapSignalCallback): number;
    connect(
      sigName: "unmap-event",
      callback: Gtk.Widget.UnmapEventSignalCallback,
    ): number;
    connect(
      sigName: "unrealize",
      callback: Gtk.Widget.UnrealizeSignalCallback,
    ): number;
    connect(
      sigName: "visibility-notify-event",
      callback: Gtk.Widget.VisibilityNotifyEventSignalCallback,
    ): number;
    connect(
      sigName: "window-state-event",
      callback: Gtk.Widget.WindowStateEventSignalCallback,
    ): number;
    connect(
      sigName: "notify::app-paintable",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::can-default",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::can-focus",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::composite-child",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::double-buffered",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::events",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::expand",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::focus-on-click",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::halign",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::has-default",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::has-focus",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::has-tooltip",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::height-request",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::hexpand",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::hexpand-set",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::is-focus",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::margin",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::margin-bottom",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::margin-end",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::margin-left",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::margin-right",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::margin-start",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::margin-top",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::name",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::no-show-all",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::opacity",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::parent",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::receives-default",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::scale-factor",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::sensitive",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::style",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::tooltip-markup",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::tooltip-text",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::valign",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::vexpand",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::vexpand-set",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::visible",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::width-request",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(
      sigName: "notify::window",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect(sigName: string, callback: (...args: any[]) => void): number;
    connect_after(
      sigName: "accel-closures-changed",
      callback: Gtk.Widget.AccelClosuresChangedSignalCallback,
    ): number;
    connect_after(
      sigName: "button-press-event",
      callback: Gtk.Widget.ButtonPressEventSignalCallback,
    ): number;
    connect_after(
      sigName: "button-release-event",
      callback: Gtk.Widget.ButtonReleaseEventSignalCallback,
    ): number;
    connect_after(
      sigName: "can-activate-accel",
      callback: Gtk.Widget.CanActivateAccelSignalCallback,
    ): number;
    connect_after(
      sigName: "child-notify",
      callback: Gtk.Widget.ChildNotifySignalCallback,
    ): number;
    connect_after(
      sigName: "composited-changed",
      callback: Gtk.Widget.CompositedChangedSignalCallback,
    ): number;
    connect_after(
      sigName: "configure-event",
      callback: Gtk.Widget.ConfigureEventSignalCallback,
    ): number;
    connect_after(
      sigName: "damage-event",
      callback: Gtk.Widget.DamageEventSignalCallback,
    ): number;
    connect_after(
      sigName: "delete-event",
      callback: Gtk.Widget.DeleteEventSignalCallback,
    ): number;
    connect_after(
      sigName: "destroy",
      callback: Gtk.Widget.DestroySignalCallback,
    ): number;
    connect_after(
      sigName: "destroy-event",
      callback: Gtk.Widget.DestroyEventSignalCallback,
    ): number;
    connect_after(
      sigName: "direction-changed",
      callback: Gtk.Widget.DirectionChangedSignalCallback,
    ): number;
    connect_after(
      sigName: "drag-begin",
      callback: Gtk.Widget.DragBeginSignalCallback,
    ): number;
    connect_after(
      sigName: "drag-data-delete",
      callback: Gtk.Widget.DragDataDeleteSignalCallback,
    ): number;
    connect_after(
      sigName: "drag-data-get",
      callback: Gtk.Widget.DragDataGetSignalCallback,
    ): number;
    connect_after(
      sigName: "drag-data-received",
      callback: Gtk.Widget.DragDataReceivedSignalCallback,
    ): number;
    connect_after(
      sigName: "drag-drop",
      callback: Gtk.Widget.DragDropSignalCallback,
    ): number;
    connect_after(
      sigName: "drag-end",
      callback: Gtk.Widget.DragEndSignalCallback,
    ): number;
    connect_after(
      sigName: "drag-failed",
      callback: Gtk.Widget.DragFailedSignalCallback,
    ): number;
    connect_after(
      sigName: "drag-leave",
      callback: Gtk.Widget.DragLeaveSignalCallback,
    ): number;
    connect_after(
      sigName: "drag-motion",
      callback: Gtk.Widget.DragMotionSignalCallback,
    ): number;
    connect_after(
      sigName: "draw",
      callback: Gtk.Widget.DrawSignalCallback,
    ): number;
    connect_after(
      sigName: "enter-notify-event",
      callback: Gtk.Widget.EnterNotifyEventSignalCallback,
    ): number;
    connect_after(
      sigName: "event",
      callback: Gtk.Widget.EventSignalCallback,
    ): number;
    connect_after(
      sigName: "event-after",
      callback: Gtk.Widget.EventAfterSignalCallback,
    ): number;
    connect_after(
      sigName: "focus",
      callback: Gtk.Widget.FocusSignalCallback,
    ): number;
    connect_after(
      sigName: "focus-in-event",
      callback: Gtk.Widget.FocusInEventSignalCallback,
    ): number;
    connect_after(
      sigName: "focus-out-event",
      callback: Gtk.Widget.FocusOutEventSignalCallback,
    ): number;
    connect_after(
      sigName: "grab-broken-event",
      callback: Gtk.Widget.GrabBrokenEventSignalCallback,
    ): number;
    connect_after(
      sigName: "grab-focus",
      callback: Gtk.Widget.GrabFocusSignalCallback,
    ): number;
    connect_after(
      sigName: "grab-notify",
      callback: Gtk.Widget.GrabNotifySignalCallback,
    ): number;
    connect_after(
      sigName: "hide",
      callback: Gtk.Widget.HideSignalCallback,
    ): number;
    connect_after(
      sigName: "hierarchy-changed",
      callback: Gtk.Widget.HierarchyChangedSignalCallback,
    ): number;
    connect_after(
      sigName: "key-press-event",
      callback: Gtk.Widget.KeyPressEventSignalCallback,
    ): number;
    connect_after(
      sigName: "key-release-event",
      callback: Gtk.Widget.KeyReleaseEventSignalCallback,
    ): number;
    connect_after(
      sigName: "keynav-failed",
      callback: Gtk.Widget.KeynavFailedSignalCallback,
    ): number;
    connect_after(
      sigName: "leave-notify-event",
      callback: Gtk.Widget.LeaveNotifyEventSignalCallback,
    ): number;
    connect_after(
      sigName: "map",
      callback: Gtk.Widget.MapSignalCallback,
    ): number;
    connect_after(
      sigName: "map-event",
      callback: Gtk.Widget.MapEventSignalCallback,
    ): number;
    connect_after(
      sigName: "mnemonic-activate",
      callback: Gtk.Widget.MnemonicActivateSignalCallback,
    ): number;
    connect_after(
      sigName: "motion-notify-event",
      callback: Gtk.Widget.MotionNotifyEventSignalCallback,
    ): number;
    connect_after(
      sigName: "move-focus",
      callback: Gtk.Widget.MoveFocusSignalCallback,
    ): number;
    connect_after(
      sigName: "parent-set",
      callback: Gtk.Widget.ParentSetSignalCallback,
    ): number;
    connect_after(
      sigName: "popup-menu",
      callback: Gtk.Widget.PopupMenuSignalCallback,
    ): number;
    connect_after(
      sigName: "property-notify-event",
      callback: Gtk.Widget.PropertyNotifyEventSignalCallback,
    ): number;
    connect_after(
      sigName: "proximity-in-event",
      callback: Gtk.Widget.ProximityInEventSignalCallback,
    ): number;
    connect_after(
      sigName: "proximity-out-event",
      callback: Gtk.Widget.ProximityOutEventSignalCallback,
    ): number;
    connect_after(
      sigName: "query-tooltip",
      callback: Gtk.Widget.QueryTooltipSignalCallback,
    ): number;
    connect_after(
      sigName: "realize",
      callback: Gtk.Widget.RealizeSignalCallback,
    ): number;
    connect_after(
      sigName: "screen-changed",
      callback: Gtk.Widget.ScreenChangedSignalCallback,
    ): number;
    connect_after(
      sigName: "scroll-event",
      callback: Gtk.Widget.ScrollEventSignalCallback,
    ): number;
    connect_after(
      sigName: "selection-clear-event",
      callback: Gtk.Widget.SelectionClearEventSignalCallback,
    ): number;
    connect_after(
      sigName: "selection-get",
      callback: Gtk.Widget.SelectionGetSignalCallback,
    ): number;
    connect_after(
      sigName: "selection-notify-event",
      callback: Gtk.Widget.SelectionNotifyEventSignalCallback,
    ): number;
    connect_after(
      sigName: "selection-received",
      callback: Gtk.Widget.SelectionReceivedSignalCallback,
    ): number;
    connect_after(
      sigName: "selection-request-event",
      callback: Gtk.Widget.SelectionRequestEventSignalCallback,
    ): number;
    connect_after(
      sigName: "show",
      callback: Gtk.Widget.ShowSignalCallback,
    ): number;
    connect_after(
      sigName: "show-help",
      callback: Gtk.Widget.ShowHelpSignalCallback,
    ): number;
    connect_after(
      sigName: "size-allocate",
      callback: Gtk.Widget.SizeAllocateSignalCallback,
    ): number;
    connect_after(
      sigName: "state-changed",
      callback: Gtk.Widget.StateChangedSignalCallback,
    ): number;
    connect_after(
      sigName: "state-flags-changed",
      callback: Gtk.Widget.StateFlagsChangedSignalCallback,
    ): number;
    connect_after(
      sigName: "style-set",
      callback: Gtk.Widget.StyleSetSignalCallback,
    ): number;
    connect_after(
      sigName: "style-updated",
      callback: Gtk.Widget.StyleUpdatedSignalCallback,
    ): number;
    connect_after(
      sigName: "touch-event",
      callback: Gtk.Widget.TouchEventSignalCallback,
    ): number;
    connect_after(
      sigName: "unmap",
      callback: Gtk.Widget.UnmapSignalCallback,
    ): number;
    connect_after(
      sigName: "unmap-event",
      callback: Gtk.Widget.UnmapEventSignalCallback,
    ): number;
    connect_after(
      sigName: "unrealize",
      callback: Gtk.Widget.UnrealizeSignalCallback,
    ): number;
    connect_after(
      sigName: "visibility-notify-event",
      callback: Gtk.Widget.VisibilityNotifyEventSignalCallback,
    ): number;
    connect_after(
      sigName: "window-state-event",
      callback: Gtk.Widget.WindowStateEventSignalCallback,
    ): number;
    connect_after(
      sigName: "notify::app-paintable",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::can-default",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::can-focus",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::composite-child",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::double-buffered",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::events",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::expand",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::focus-on-click",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::halign",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::has-default",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::has-focus",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::has-tooltip",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::height-request",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::hexpand",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::hexpand-set",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::is-focus",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::margin",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::margin-bottom",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::margin-end",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::margin-left",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::margin-right",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::margin-start",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::margin-top",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::name",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::no-show-all",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::opacity",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::parent",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::receives-default",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::scale-factor",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::sensitive",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::style",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::tooltip-markup",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::tooltip-text",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::valign",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::vexpand",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::vexpand-set",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::visible",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::width-request",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(
      sigName: "notify::window",
      callback: (
        $obj: Gtk.Widget,
        pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
      ) => void,
    ): number;
    connect_after(sigName: string, callback: (...args: any[]) => void): number;
    emit(sigName: "accel-closures-changed", ...args: any[]): void;
    emit(
      sigName: "button-press-event",
      event: import("@girs/gdk-3.0").Gdk.EventButton,
      ...args: any[]
    ): void;
    emit(
      sigName: "button-release-event",
      event: import("@girs/gdk-3.0").Gdk.EventButton,
      ...args: any[]
    ): void;
    emit(
      sigName: "can-activate-accel",
      signal_id: number,
      ...args: any[]
    ): void;
    emit(
      sigName: "child-notify",
      child_property: import("@girs/gobject-2.0").GObject.ParamSpec,
      ...args: any[]
    ): void;
    emit(sigName: "composited-changed", ...args: any[]): void;
    emit(
      sigName: "configure-event",
      event: import("@girs/gdk-3.0").Gdk.EventConfigure,
      ...args: any[]
    ): void;
    emit(
      sigName: "damage-event",
      event: import("@girs/gdk-3.0").Gdk.EventExpose,
      ...args: any[]
    ): void;
    emit(
      sigName: "delete-event",
      event: import("@girs/gdk-3.0").Gdk.Event,
      ...args: any[]
    ): void;
    emit(sigName: "destroy", ...args: any[]): void;
    emit(
      sigName: "destroy-event",
      event: import("@girs/gdk-3.0").Gdk.Event,
      ...args: any[]
    ): void;
    emit(
      sigName: "direction-changed",
      previous_direction: Gtk.TextDirection,
      ...args: any[]
    ): void;
    emit(
      sigName: "drag-begin",
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      ...args: any[]
    ): void;
    emit(
      sigName: "drag-data-delete",
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      ...args: any[]
    ): void;
    emit(
      sigName: "drag-data-get",
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      data: Gtk.SelectionData,
      info: number,
      time: number,
      ...args: any[]
    ): void;
    emit(
      sigName: "drag-data-received",
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      x: number,
      y: number,
      data: Gtk.SelectionData,
      info: number,
      time: number,
      ...args: any[]
    ): void;
    emit(
      sigName: "drag-drop",
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      x: number,
      y: number,
      time: number,
      ...args: any[]
    ): void;
    emit(
      sigName: "drag-end",
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      ...args: any[]
    ): void;
    emit(
      sigName: "drag-failed",
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      result: Gtk.DragResult,
      ...args: any[]
    ): void;
    emit(
      sigName: "drag-leave",
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      time: number,
      ...args: any[]
    ): void;
    emit(
      sigName: "drag-motion",
      context: import("@girs/gdk-3.0").Gdk.DragContext,
      x: number,
      y: number,
      time: number,
      ...args: any[]
    ): void;
    emit(
      sigName: "draw",
      cr: import("@girs/cairo-1.0").cairo.Context,
      ...args: any[]
    ): void;
    emit(
      sigName: "enter-notify-event",
      event: import("@girs/gdk-3.0").Gdk.EventCrossing,
      ...args: any[]
    ): void;
    emit(
      sigName: "event",
      event: import("@girs/gdk-3.0").Gdk.Event,
      ...args: any[]
    ): void;
    emit(
      sigName: "event-after",
      event: import("@girs/gdk-3.0").Gdk.Event,
      ...args: any[]
    ): void;
    emit(sigName: "focus", direction: Gtk.DirectionType, ...args: any[]): void;
    emit(
      sigName: "focus-in-event",
      event: import("@girs/gdk-3.0").Gdk.EventFocus,
      ...args: any[]
    ): void;
    emit(
      sigName: "focus-out-event",
      event: import("@girs/gdk-3.0").Gdk.EventFocus,
      ...args: any[]
    ): void;
    emit(
      sigName: "grab-broken-event",
      event: import("@girs/gdk-3.0").Gdk.EventGrabBroken,
      ...args: any[]
    ): void;
    emit(sigName: "grab-focus", ...args: any[]): void;
    emit(sigName: "grab-notify", was_grabbed: boolean, ...args: any[]): void;
    emit(sigName: "hide", ...args: any[]): void;
    emit(
      sigName: "hierarchy-changed",
      previous_toplevel: Gtk.Widget | null,
      ...args: any[]
    ): void;
    emit(
      sigName: "key-press-event",
      event: import("@girs/gdk-3.0").Gdk.EventKey,
      ...args: any[]
    ): void;
    emit(
      sigName: "key-release-event",
      event: import("@girs/gdk-3.0").Gdk.EventKey,
      ...args: any[]
    ): void;
    emit(
      sigName: "keynav-failed",
      direction: Gtk.DirectionType,
      ...args: any[]
    ): void;
    emit(
      sigName: "leave-notify-event",
      event: import("@girs/gdk-3.0").Gdk.EventCrossing,
      ...args: any[]
    ): void;
    emit(sigName: "map", ...args: any[]): void;
    emit(
      sigName: "map-event",
      event: import("@girs/gdk-3.0").Gdk.EventAny,
      ...args: any[]
    ): void;
    emit(
      sigName: "mnemonic-activate",
      group_cycling: boolean,
      ...args: any[]
    ): void;
    emit(
      sigName: "motion-notify-event",
      event: import("@girs/gdk-3.0").Gdk.EventMotion,
      ...args: any[]
    ): void;
    emit(
      sigName: "move-focus",
      direction: Gtk.DirectionType,
      ...args: any[]
    ): void;
    emit(
      sigName: "parent-set",
      old_parent: Gtk.Widget | null,
      ...args: any[]
    ): void;
    emit(sigName: "popup-menu", ...args: any[]): void;
    emit(
      sigName: "property-notify-event",
      event: import("@girs/gdk-3.0").Gdk.EventProperty,
      ...args: any[]
    ): void;
    emit(
      sigName: "proximity-in-event",
      event: import("@girs/gdk-3.0").Gdk.EventProximity,
      ...args: any[]
    ): void;
    emit(
      sigName: "proximity-out-event",
      event: import("@girs/gdk-3.0").Gdk.EventProximity,
      ...args: any[]
    ): void;
    emit(
      sigName: "query-tooltip",
      x: number,
      y: number,
      keyboard_mode: boolean,
      tooltip: Gtk.Tooltip,
      ...args: any[]
    ): void;
    emit(sigName: "realize", ...args: any[]): void;
    emit(
      sigName: "screen-changed",
      previous_screen: import("@girs/gdk-3.0").Gdk.Screen | null,
      ...args: any[]
    ): void;
    emit(
      sigName: "scroll-event",
      event: import("@girs/gdk-3.0").Gdk.EventScroll,
      ...args: any[]
    ): void;
    emit(
      sigName: "selection-clear-event",
      event: import("@girs/gdk-3.0").Gdk.EventSelection,
      ...args: any[]
    ): void;
    emit(
      sigName: "selection-get",
      data: Gtk.SelectionData,
      info: number,
      time: number,
      ...args: any[]
    ): void;
    emit(
      sigName: "selection-notify-event",
      event: import("@girs/gdk-3.0").Gdk.EventSelection,
      ...args: any[]
    ): void;
    emit(
      sigName: "selection-received",
      data: Gtk.SelectionData,
      time: number,
      ...args: any[]
    ): void;
    emit(
      sigName: "selection-request-event",
      event: import("@girs/gdk-3.0").Gdk.EventSelection,
      ...args: any[]
    ): void;
    emit(sigName: "show", ...args: any[]): void;
    emit(
      sigName: "show-help",
      help_type: Gtk.WidgetHelpType,
      ...args: any[]
    ): void;
    emit(
      sigName: "size-allocate",
      allocation: import("@girs/gdk-3.0").Gdk.Rectangle,
      ...args: any[]
    ): void;
    emit(sigName: "state-changed", state: Gtk.StateType, ...args: any[]): void;
    emit(
      sigName: "state-flags-changed",
      flags: Gtk.StateFlags,
      ...args: any[]
    ): void;
    emit(
      sigName: "style-set",
      previous_style: Gtk.Style | null,
      ...args: any[]
    ): void;
    emit(sigName: "style-updated", ...args: any[]): void;
    emit(
      sigName: "touch-event",
      object: import("@girs/gdk-3.0").Gdk.Event,
      ...args: any[]
    ): void;
    emit(sigName: "unmap", ...args: any[]): void;
    emit(
      sigName: "unmap-event",
      event: import("@girs/gdk-3.0").Gdk.EventAny,
      ...args: any[]
    ): void;
    emit(sigName: "unrealize", ...args: any[]): void;
    emit(
      sigName: "visibility-notify-event",
      event: import("@girs/gdk-3.0").Gdk.EventVisibility,
      ...args: any[]
    ): void;
    emit(
      sigName: "window-state-event",
      event: import("@girs/gdk-3.0").Gdk.EventWindowState,
      ...args: any[]
    ): void;
    emit(sigName: "notify::app-paintable", ...args: any[]): void;
    emit(sigName: "notify::can-default", ...args: any[]): void;
    emit(sigName: "notify::can-focus", ...args: any[]): void;
    emit(sigName: "notify::composite-child", ...args: any[]): void;
    emit(sigName: "notify::double-buffered", ...args: any[]): void;
    emit(sigName: "notify::events", ...args: any[]): void;
    emit(sigName: "notify::expand", ...args: any[]): void;
    emit(sigName: "notify::focus-on-click", ...args: any[]): void;
    emit(sigName: "notify::halign", ...args: any[]): void;
    emit(sigName: "notify::has-default", ...args: any[]): void;
    emit(sigName: "notify::has-focus", ...args: any[]): void;
    emit(sigName: "notify::has-tooltip", ...args: any[]): void;
    emit(sigName: "notify::height-request", ...args: any[]): void;
    emit(sigName: "notify::hexpand", ...args: any[]): void;
    emit(sigName: "notify::hexpand-set", ...args: any[]): void;
    emit(sigName: "notify::is-focus", ...args: any[]): void;
    emit(sigName: "notify::margin", ...args: any[]): void;
    emit(sigName: "notify::margin-bottom", ...args: any[]): void;
    emit(sigName: "notify::margin-end", ...args: any[]): void;
    emit(sigName: "notify::margin-left", ...args: any[]): void;
    emit(sigName: "notify::margin-right", ...args: any[]): void;
    emit(sigName: "notify::margin-start", ...args: any[]): void;
    emit(sigName: "notify::margin-top", ...args: any[]): void;
    emit(sigName: "notify::name", ...args: any[]): void;
    emit(sigName: "notify::no-show-all", ...args: any[]): void;
    emit(sigName: "notify::opacity", ...args: any[]): void;
    emit(sigName: "notify::parent", ...args: any[]): void;
    emit(sigName: "notify::receives-default", ...args: any[]): void;
    emit(sigName: "notify::scale-factor", ...args: any[]): void;
    emit(sigName: "notify::sensitive", ...args: any[]): void;
    emit(sigName: "notify::style", ...args: any[]): void;
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void;
    emit(sigName: "notify::tooltip-text", ...args: any[]): void;
    emit(sigName: "notify::valign", ...args: any[]): void;
    emit(sigName: "notify::vexpand", ...args: any[]): void;
    emit(sigName: "notify::vexpand-set", ...args: any[]): void;
    emit(sigName: "notify::visible", ...args: any[]): void;
    emit(sigName: "notify::width-request", ...args: any[]): void;
    emit(sigName: "notify::window", ...args: any[]): void;
    emit(sigName: string, ...args: any[]): void;
    disconnect(id: number): void;
    g_type_instance: import("@girs/gobject-2.0").GObject.TypeInstance;
    bind_property(
      source_property: string | null,
      target: import("@girs/gobject-2.0").GObject.Object,
      target_property: string | null,
      flags: import("@girs/gobject-2.0").GObject.BindingFlags,
    ): import("@girs/gobject-2.0").GObject.Binding;
    bind_property_full(
      source_property: string | null,
      target: import("@girs/gobject-2.0").GObject.Object,
      target_property: string | null,
      flags: import("@girs/gobject-2.0").GObject.BindingFlags,
      transform_to: import("@girs/gobject-2.0").GObject.TClosure<any, any>,
      transform_from: import("@girs/gobject-2.0").GObject.TClosure<any, any>,
    ): import("@girs/gobject-2.0").GObject.Binding;
    force_floating(): void;
    freeze_notify(): void;
    get_data(key: string | null): any;
    get_property(property_name: string | null, value: any): void;
    get_qdata(quark: number): any;
    getv(names: string[], values: any[]): void;
    is_floating(): boolean;
    notify(property_name: string | null): void;
    notify_by_pspec(pspec: import("@girs/gobject-2.0").GObject.ParamSpec): void;
    ref(): import("@girs/gobject-2.0").GObject.Object;
    ref_sink(): import("@girs/gobject-2.0").GObject.Object;
    run_dispose(): void;
    set_data(key: string | null, data: any): void;
    set_property(property_name: string | null, value: any): void;
    steal_data(key: string | null): any;
    steal_qdata(quark: number): any;
    thaw_notify(): void;
    unref(): void;
    watch_closure(
      closure: import("@girs/gobject-2.0").GObject.TClosure<any, any>,
    ): void;
    vfunc_constructed(): void;
    vfunc_dispatch_properties_changed(
      n_pspecs: number,
      pspecs: import("@girs/gobject-2.0").GObject.ParamSpec,
    ): void;
    vfunc_dispose(): void;
    vfunc_finalize(): void;
    vfunc_get_property(
      property_id: number,
      value: any,
      pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
    ): void;
    vfunc_notify(pspec: import("@girs/gobject-2.0").GObject.ParamSpec): void;
    vfunc_set_property(
      property_id: number,
      value: any,
      pspec: import("@girs/gobject-2.0").GObject.ParamSpec,
    ): void;
    add_child(
      builder: Gtk.Builder,
      child: import("@girs/gobject-2.0").GObject.Object,
      type: string | null,
    ): void;
    construct_child(
      builder: Gtk.Builder,
      name: string | null,
    ): import("@girs/gobject-2.0").GObject.Object;
    custom_finished(
      builder: Gtk.Builder,
      child: import("@girs/gobject-2.0").GObject.Object | null,
      tagname: string | null,
      data: any,
    ): void;
    custom_tag_end(
      builder: Gtk.Builder,
      child: import("@girs/gobject-2.0").GObject.Object | null,
      tagname: string | null,
      data: any,
    ): void;
    custom_tag_start(
      builder: Gtk.Builder,
      child: import("@girs/gobject-2.0").GObject.Object | null,
      tagname: string | null,
    ): [boolean, import("@girs/glib-2.0").GLib.MarkupParser, any];
    get_internal_child(
      builder: Gtk.Builder,
      childname: string | null,
    ): import("@girs/gobject-2.0").GObject.Object;
    parser_finished(builder: Gtk.Builder): void;
    set_buildable_property(
      builder: Gtk.Builder,
      name: string | null,
      value: any,
    ): void;
    vfunc_add_child(
      builder: Gtk.Builder,
      child: import("@girs/gobject-2.0").GObject.Object,
      type: string | null,
    ): void;
    vfunc_construct_child(
      builder: Gtk.Builder,
      name: string | null,
    ): import("@girs/gobject-2.0").GObject.Object;
    vfunc_custom_finished(
      builder: Gtk.Builder,
      child: import("@girs/gobject-2.0").GObject.Object | null,
      tagname: string | null,
      data: any,
    ): void;
    vfunc_custom_tag_end(
      builder: Gtk.Builder,
      child: import("@girs/gobject-2.0").GObject.Object | null,
      tagname: string | null,
      data: any,
    ): void;
    vfunc_custom_tag_start(
      builder: Gtk.Builder,
      child: import("@girs/gobject-2.0").GObject.Object | null,
      tagname: string | null,
    ): [boolean, import("@girs/glib-2.0").GLib.MarkupParser, any];
    vfunc_get_internal_child(
      builder: Gtk.Builder,
      childname: string | null,
    ): import("@girs/gobject-2.0").GObject.Object;
    vfunc_get_name(): string | null;
    vfunc_parser_finished(builder: Gtk.Builder): void;
    vfunc_set_buildable_property(
      builder: Gtk.Builder,
      name: string | null,
      value: any,
    ): void;
    vfunc_set_name(name: string | null): void;
  };
} & typeof Gtk.ProgressBar;
export default class AgsProgressBar extends AgsProgressBar_base {
  constructor(props?: ProgressBarProps);
  get value(): number;
  set value(value: number);
  get vertical(): boolean;
  set vertical(vertical: boolean);
}
export {};
