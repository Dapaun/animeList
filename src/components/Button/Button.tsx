import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";

interface ButtonProps {
    buttonType: buttonTypeValue;
    handleCLick: any;
}

export enum buttonTypeValue {
    search = 'search',
    clear = 'clear',
}

const buttonConfig = {
    search: {
        text: 'Search',
        buttonStyle: 'searchButton',
        iconStyle: 'inline ml-1 scale-123',
        iconType: AiOutlineSearch,
    },
    clear: {
        text: 'Clear',
        buttonStyle: 'clearButton',
        iconStyle: 'inline ml-1 scale-123',
        iconType: AiOutlineCloseCircle,
    }
}

const Button = (props: ButtonProps) => {
    const { buttonType, handleCLick } = props;
    const IconComponent = buttonConfig[buttonType].iconType;
    return (
        <button 
        className={buttonConfig[buttonType].buttonStyle}
        onClick={handleCLick}
      >
        {buttonConfig[buttonType].text}
        <IconComponent className={buttonConfig[buttonType].iconStyle}/>
      </button>
    )
};

export default Button;