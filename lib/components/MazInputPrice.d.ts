declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    currency: {
        type: StringConstructor;
        default: string;
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "formatted")[], "update:model-value" | "formatted", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    currency: {
        type: StringConstructor;
        default: string;
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onFormatted?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    currency: string;
    locale: string;
    min: number;
    max: number;
}>;
export default _default;
