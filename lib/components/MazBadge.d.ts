import type { PropType } from 'vue';
import type { Color } from './types';
export declare type BadgeColor = Color | 'gray';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<BadgeColor>;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    nowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    pastel: {
        type: BooleanConstructor;
        default: boolean;
    };
    roundedSize: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<BadgeColor>;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    nowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    pastel: {
        type: BooleanConstructor;
        default: boolean;
    };
    roundedSize: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
}>>, {
    color: BadgeColor;
    size: string;
    nowrap: boolean;
    outline: boolean;
    pastel: boolean;
    roundedSize: string;
}>;
export default _default;
