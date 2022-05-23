export declare type SimpleValue = string | undefined;
export declare type RangeValue = {
    start: string;
    end: string;
};
export declare type PartialRangeValue = Partial<RangeValue>;
export declare type PickerValue = SimpleValue | PartialRangeValue;
export declare type PickerShortcut = {
    identifier: string;
    label: string;
    value: {
        start: string;
        end: string;
    };
};
