import React, {useEffect, useState} from 'react';
import TextField from "../../components/TextField";
import {required, validateEmail} from "../../utils/validators/validators";
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input';
import axios from "axios";

const OrderForm: React.FC = () => {

    const [params, setParams] = useState({
        email: null,
        fullName: null,
        phone: null
    });
    const [touched, setTouched] = useState({
        email: false,
        fullName: null,
        phone: null
    });
    const [errors, setErrors] = useState<any>({});

    const handleBlur = (event) => {
        const name = event.target.name;
        setTouched(touched => ({...touched, [name]: true}))
    }

    const changeParam = (e, paramName?: string) => {
        if (!e) {
            return;
        }
        const name = e.target ? e.target.name : paramName;
        const value = e.target ? e.target.value : e;
        setParams(params => ({...params, [name]: value}));
    }

    const validateFields = () => {
        const {email, phone, fullName} = params;
        setErrors({});

        if (!email || validateEmail(email) || !isValidPhoneNumber(phone)) {
            setErrors(valid => ({
                ...valid,
                ['email']: !email ? required(email) : validateEmail(email),
                ['phone']: !phone ? required(phone) : !isValidPhoneNumber(phone) && 'Неверный формат',
                ['fullName']: !fullName ? required(fullName) : required(fullName)
            }));
        }
    }

    const clearForm = () => {
        setErrors({});
        setParams(({email: null, phone: null, fullName: null}));
        setTouched(({email: false, phone: false, fullName: false}));
    }

    const hasFormErrors = (): boolean => {
        let res = false;
        for (const name in errors) {
            if (errors[name]) {
                res = true;
                break;
            }
        }
        return res;
    }

    const doSubmit = async (e) => {
        e.preventDefault();

        setTouched(({email: true, phone: true, fullName: true}));

        if (hasFormErrors()) {
            return;
        }
        try {
            await axios.post(`https://api.telegram.org/bot7364692116:AAFA5cCAgvutUqt469IQHpcaIiyO7aKVtdI/sendMessage`, {
                chat_id: 677305500,
                text: `Имя: ${params.fullName}; Телефон: ${params.phone}; Имейл: ${params.email}`
            });
            alert('Ваша форма была успешно отправлена!');
            e.target.reset();
            clearForm();

        } catch (error) {
            console.error('Error sending message', error);
            alert('Failed to send message');
        }
    }

    useEffect(() => {
        validateFields();
    }, [params])

    return (
        <div className={'order-form'}>
            <h3 className={'order-form__title'}>
                Запишитесь <span className={'order-form__title-red'}>бесплатно</span> <br/>
                и получите подарок
            </h3>

            <form onSubmit={doSubmit}>
                <TextField
                    name={'fullName'}
                    placeholder={'Ваше имя и фамилия'}
                    onChange={changeParam}
                    onBlur={handleBlur}
                    errorMessage={touched.fullName && errors?.fullName}
                />

                <div className={'textField'}>
                    <PhoneInput
                        defaultCountry="UA"
                        name={'phone'}
                        value={params.phone}
                        placeholder="Ваш номер телефона"
                        onChange={e => changeParam(e, 'phone')}
                        onBlur={e => handleBlur(e)}
                    />
                    {errors.phone && touched.phone && (
                        <div className={'textField__error'}>{errors.phone}</div>)}
                </div>

                <TextField
                    name={'email'}
                    placeholder={'Ваш email'}
                    onChange={changeParam}
                    onBlur={handleBlur}
                    errorMessage={touched.email && errors?.email}
                />
                <button className={'btn btn-red'}>
                    Записаться бесплатно
                </button>
            </form>

            <p className={'order-form__privacy'}>
                Нажимая на кнопку я согашаюсь <br/>
                <u>с политикой конфидециальности</u>
            </p>
        </div>
    );
};

export default OrderForm;