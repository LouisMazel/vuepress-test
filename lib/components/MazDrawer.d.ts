import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCloseBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    variant: {
        type: PropType<"right" | "top">;
        default: string;
        validator: (value: string) => boolean;
    };
    backdropClass: {
        type: StringConstructor;
        default: undefined;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "close" | "update:model-value")[], "open" | "close" | "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCloseBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    variant: {
        type: PropType<"right" | "top">;
        default: string;
        validator: (value: string) => boolean;
    };
    backdropClass: {
        type: StringConstructor;
        default: undefined;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onOpen?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    noCloseBtn: boolean;
    title: string;
    variant: "right" | "top";
    backdropClass: string;
    size: string;
}>;
export default _default;
