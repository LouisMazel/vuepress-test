declare const _default: import("vue").DefineComponent<{
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    noClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    noPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    noClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    noPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    persistent: boolean;
    noClose: boolean;
    noPadding: boolean;
}>;
export default _default;
