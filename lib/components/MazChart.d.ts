import { type PropType } from 'vue';
import { Chart, type Plugin } from 'chart.js';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: true;
    };
    data: {
        type: ObjectConstructor;
        required: true;
    };
    height: {
        type: StringConstructor;
        default: undefined;
    };
    width: {
        type: StringConstructor;
        default: undefined;
    };
    options: {
        type: ObjectConstructor;
        default: ObjectConstructor;
    };
    plugins: {
        type: PropType<Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        default: () => never[];
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
}, {
    chartJSState: {
        chart?: Chart<keyof import("chart.js").ChartTypeRegistry, (number | import("chart.js").ScatterDataPoint | import("chart.js").BubbleDataPoint | null)[], unknown> | undefined;
        options?: import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<keyof import("chart.js").ChartTypeRegistry> & import("chart.js").ElementChartOptions<keyof import("chart.js").ChartTypeRegistry> & import("chart.js").PluginChartOptions<keyof import("chart.js").ChartTypeRegistry> & import("chart.js").DatasetChartOptions<keyof import("chart.js").ChartTypeRegistry> & import("chart.js").ScaleChartOptions<keyof import("chart.js").ChartTypeRegistry>> | undefined;
        plugins: Plugin[];
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: StringConstructor;
                required: true;
            };
            data: {
                type: ObjectConstructor;
                required: true;
            };
            height: {
                type: StringConstructor;
                default: undefined;
            };
            width: {
                type: StringConstructor;
                default: undefined;
            };
            options: {
                type: ObjectConstructor;
                default: ObjectConstructor;
            };
            plugins: {
                type: PropType<Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
                default: () => never[];
            };
            locale: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
        }>>;
    };
    chartRef: import("vue").Ref<HTMLCanvasElement | undefined>;
    render: () => void | Chart<keyof import("chart.js").ChartTypeRegistry, (number | import("chart.js").ScatterDataPoint | import("chart.js").BubbleDataPoint | null)[], unknown>;
    resize: () => void | undefined;
    update: () => void;
    destroy: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: true;
    };
    data: {
        type: ObjectConstructor;
        required: true;
    };
    height: {
        type: StringConstructor;
        default: undefined;
    };
    width: {
        type: StringConstructor;
        default: undefined;
    };
    options: {
        type: ObjectConstructor;
        default: ObjectConstructor;
    };
    plugins: {
        type: PropType<Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        default: () => never[];
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
}, {
    height: string;
    width: string;
    options: Record<string, any>;
    plugins: Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[];
    locale: string;
}>;
export default _default;
