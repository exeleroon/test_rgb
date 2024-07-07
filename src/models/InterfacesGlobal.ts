export interface IError {
    error: {
        data: string;
        status: string;
        error: string;
        originalStatus: number;
    }
}

export interface ITextField {
    label?: string;
    name: string;
    className?: string;
    placeholder?: string;
    checkPassword?: boolean;
    onChange: (e) => any;
    onBlur: (e) => any;
    type?: string;
    errorMessage?: any;
    value?: any;
}
