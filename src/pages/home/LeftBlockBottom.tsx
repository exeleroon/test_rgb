import React from 'react';

const LeftBlockBottom = ({forDesktop}) => {
    return (
        <div
            className={`left-block__bottom ${forDesktop ? 'left-block__bottom-desktop' : 'left-block__bottom-mobile'}`}>
            <div className={'left-block__image-text'}>
                <span className={'left-block__image-text-img-human'}/>
                <div className={'left-block__image-text-container'}>
                    <h3 className={'left-block__image-text-title'}>КИРИЛЛ <span
                        className={'left-block__image-text-blue-text'}>КАСАТОНОВ</span></h3>
                    <p className={'left-block__image-text-desc'}>
                        6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и другими крупными корпорациями
                    </p>
                </div>
            </div>

            <div className={'left-block__image-text'}>
                <span className={'left-block__image-text-img-gift'}/>

                <div className={'left-block__image-text-container'}>
                    <h3 className={'left-block__image-text-title'}>Бонус за регистрацию</h3>
                    <p className={'left-block__image-text-desc'}>
                        {`PDF - файл "5 преимуществ`}
                        <br></br> {`профессии ${forDesktop ? 'фронтенд разработчика' : 'веб-дизайнера'}"`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LeftBlockBottom;