export declare const chartJsEventNames: string[];
export declare function generateEventObject(type: string, chartRef?: HTMLCanvasElement): {
    type: string;
    chartRef: HTMLCanvasElement | undefined;
    preventDefault(): void;
    isDefaultPrevented(): boolean;
    _defaultPrevented: boolean;
};
export declare function generateChartJsEventListener(emit: (event: string, ...args: unknown[]) => void, event: ReturnType<typeof generateEventObject>): {
    [x: string]: () => boolean;
};
