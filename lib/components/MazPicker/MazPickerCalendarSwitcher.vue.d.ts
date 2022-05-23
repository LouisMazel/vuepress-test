declare const _default: import("vue").DefineComponent<{
    calendarDate: {
        type: StringConstructor;
        default: undefined;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    double: {
        type: BooleanConstructor;
        required: true;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("previous" | "next" | "open-month-switcher" | "open-year-switcher" | "update:calendar-date")[], "previous" | "next" | "open-month-switcher" | "open-year-switcher" | "update:calendar-date", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    calendarDate: {
        type: StringConstructor;
        default: undefined;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    double: {
        type: BooleanConstructor;
        required: true;
    };
}>> & {
    onPrevious?: ((...args: any[]) => any) | undefined;
    onNext?: ((...args: any[]) => any) | undefined;
    "onOpen-month-switcher"?: ((...args: any[]) => any) | undefined;
    "onOpen-year-switcher"?: ((...args: any[]) => any) | undefined;
    "onUpdate:calendar-date"?: ((...args: any[]) => any) | undefined;
}, {
    calendarDate: string;
}>;
export default _default;
