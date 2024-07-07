import React from 'react';

const Header: React.FC = () => {
    return (
        <div className={'header'}>
            <div className={'header__logo'}/>
            <div className={'header__right-items'}>
                <div className={'header__btn-with-icon'}>
                    <div className={'header__btn-with-icon__container'}>
                        <span className={'header__btn-with-icon__icon-calendar'}/>
                        <p className={'header__btn-with-icon__text'}>
                            28 декабря
                        </p>
                    </div>
                </div>
                <div className={'header__btn-with-icon'}>
                    <div className={'header__btn-with-icon__container'}>
                        <span className={'header__btn-with-icon__icon-time'}/>
                        <p className={'header__btn-with-icon__text'}>
                            3,5 часа
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;