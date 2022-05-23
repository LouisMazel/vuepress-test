import { type PropType } from 'vue';
import { type DialogData } from './MazDialogPromise/use-maz-dialog-promise';
export { useMazDialogPromise } from './MazDialogPromise/use-maz-dialog-promise';
export type { DialogState, DialogData, } from './MazDialogPromise/use-maz-dialog-promise';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<DialogData>;
        default: undefined;
    };
    identifier: {
        type: StringConstructor;
        required: true;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<DialogData>;
        default: undefined;
    };
    identifier: {
        type: StringConstructor;
        required: true;
    };
}>>, {
    data: DialogData;
}>;
export default _default;
