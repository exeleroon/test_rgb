import React from 'react';
import LeftBlockBottom from "./LeftBlockBottom";

const LeftBlock: React.FC = () => {
    return (
        <div className={'left-block'}>
            <div className={'left-block__webinar'}>
                <span className={'left-block__webinar-image'}></span>
                <p className={'left-block__webinar-text'}>Вебинар</p>
            </div>
            <h2 className={'left-block__red-title'}>front-end</h2>
            <div className={'left-block__sub-title'}>
                <p className={'left-block__sub-title-first'}><span
                    className={'left-block__sub-title-first-text'}>с нуля</span></p>
                <p className={'left-block__sub-title-second'}>легкий старт в IT профессии</p>
            </div>
            <div className={'left-block__desc'}>
                <p>
                    Узнайте какими <span>навыками должен обладать фронтенд разработчик в 2022 году</span> и как начать карьеру в
                    востребованной профессии
                </p>
            </div>
            <LeftBlockBottom forDesktop={true}/>
        </div>
    );
};

export default LeftBlock;