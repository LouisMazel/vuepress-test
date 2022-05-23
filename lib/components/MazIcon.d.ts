import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    src: {
        type: StringConstructor;
        default: undefined;
    };
    path: {
        type: StringConstructor;
        default: undefined;
    };
    name: {
        type: StringConstructor;
        default: undefined;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    transformSource: {
        type: PropType<(param: SVGElement) => SVGElement>;
        default: (svg: SVGElement) => SVGElement;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("loaded" | "unloaded" | "error")[], "loaded" | "unloaded" | "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        default: undefined;
    };
    path: {
        type: StringConstructor;
        default: undefined;
    };
    name: {
        type: StringConstructor;
        default: undefined;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    transformSource: {
        type: PropType<(param: SVGElement) => SVGElement>;
        default: (svg: SVGElement) => SVGElement;
    };
}>> & {
    onLoaded?: ((...args: any[]) => any) | undefined;
    onUnloaded?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}, {
    src: string;
    path: string;
    name: string;
    size: string;
    title: string;
    transformSource: (param: SVGElement) => SVGElement;
}>;
export default _default;
