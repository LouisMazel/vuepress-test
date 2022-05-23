import type { PropType } from 'vue';
import type { Color } from './types';
export type { Color } from './types';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: string) => boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: string) => boolean;
    };
}>>, {
    size: string;
    color: Color;
}>;
export default _default;
