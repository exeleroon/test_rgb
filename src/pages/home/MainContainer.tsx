import React from 'react';
import Header from "../../components/Header";
import LeftBlock from "./LeftBlock";
import OrderForm from "./OrderForm";
import FooterText from "./FooterText";
import RightSideFrameworks from "./TopCircles";
import LeftBlockBottom from "./LeftBlockBottom";

const MainContainer = () => {
    return (
        <div className={"full-width-container"}>
            <div className={'main-container'}>
                <Header/>
                <div className={'main-content'}>
                    <LeftBlock/>
                    <OrderForm/>
                    <LeftBlockBottom forDesktop={false}/>
                </div>
            </div>
            <RightSideFrameworks/>
            <FooterText/>
        </div>
    );
};

export default MainContainer;