import React from 'react';

const RightSideFrameworks = () => {
    return (
        <div className={'frameworks'}>
            <div className={'frameworks__html-container'}>
                <span className={'frameworks__html-img'}></span><span className={'frameworks__html-dot'}></span>
            </div>
            <div className={'frameworks__css-container'}>
                <span className={'frameworks__css-img'}></span><span className={'frameworks__css-dot'}></span>
            </div>
            <div className={'frameworks__js-container'}>
                <span className={'frameworks__js-img'}></span><span className={'frameworks__js-dot'}></span>
            </div>
            <div className={'frameworks__sublime-container'}>
                <span className={'frameworks__sublime-img'}></span><span className={'frameworks__sublime-dot'}></span>
            </div>
            <div className={'frameworks__vs-code-container'}>
                <span className={'frameworks__vs-code-img'}></span><span className={'frameworks__vs-code-dot'}></span>
            </div>
        </div>
    );
};

export default RightSideFrameworks;