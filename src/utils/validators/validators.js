export const required = (value, label = 'Поле обязательное') => {

    if (!isNilOrEmptyString(value)) return undefined;
    return label;
};

export const isNilOrEmptyString = (value) => value === undefined || value === null || value === '';

export const validateEmail = (email, label = 'Неверный формат имейла') => {
    if (required(email) !== undefined) {
        return required(email);
    } else {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase())) return undefined;
        return label;
    }
};

