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
import Gvc from 'gi://Gvc';
declare class Stream extends Service {
    private _stream;
    private _ids;
    private _oldVolume;
    constructor(stream: InstanceType<typeof Gvc.MixerStream>);
    get application_id(): string | null;
    get stream(): import("../gtk-types/gvc-1.0.js").Gvc.MixerStream;
    get description(): string | null;
    get icon_name(): string | null;
    get id(): number;
    get name(): string | null;
    get state(): string;
    get is_muted(): boolean;
    set is_muted(mute: boolean);
    get volume(): number;
    set volume(value: number);
    close(): void;
}
declare class Audio extends Service {
    private _control;
    private _streams;
    private _streamBindings;
    private _speaker;
    private _microphone;
    private _speakerBinding;
    private _microphoneBinding;
    constructor();
    get control(): import("../gtk-types/gvc-1.0.js").Gvc.MixerControl;
    get speaker(): Stream;
    set speaker(stream: Stream);
    get microphone(): Stream;
    set microphone(stream: Stream);
    get microphones(): Stream[];
    get speakers(): Stream[];
    get apps(): Stream[];
    get recorders(): Stream[];
    getStream(id: number): Stream | undefined;
    private _defaultChanged;
    private _streamAdded;
    private _streamRemoved;
    private _getStreams;
    private _notifyStreams;
}
declare const audioService: Audio;
export default audioService;