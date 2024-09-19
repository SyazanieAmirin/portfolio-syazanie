import { useState, useEffect } from "react";

export default function ButtonCOMP({ text, size, width, onClick, ariaLabel, type }) {

    const [buttonSize, setButtonSize] = useState();
    const [buttonWidth, setButtonWidth] = useState();

    useEffect(() => {
        if (size === "sm") {
            setButtonSize("py-3 px-4 text-sm");
        } else if (size === "md") {
            setButtonSize("py-5 px-6 text-base");
        } else if (size === "lg") {
            setButtonSize("py-7 px-8 text-lg");
        } else if (size === "sm high") {
            setButtonSize("py-5 px-3 text-lg");
        } else if (size === "md high") {
            setButtonSize("py-7 px-4 text-xl");
        } else if (size === "lg high") {
            setButtonSize("py-9 px-5 text-2xl");
        } else if (size === "xs") {
            setButtonSize("py-2 px-2 text-xs");
        } else {
            setButtonSize("py-5 px-6 text-base");
        }

        if (width === "full") {
            setButtonWidth("w-full");
        } else if (width === "auto") {
            setButtonWidth("w-auto");
        } else if (width === "1/2") {
            setButtonWidth("w-1/2");
        } else if (width === "1/3") {
            setButtonWidth("w-1/3");
        } else if (width === "2/3") {
            setButtonWidth("w-2/3");
        } else if (width === "1/4") {
            setButtonWidth("w-1/4");
        } else if (width === "3/4") {
            setButtonWidth("w-3/4");
        } else if (width === "1/2 no mobile") {
            setButtonWidth("w-full lg:w-1/2");
        } else if (width === "1/3 no mobile") {
            setButtonWidth("w-full lg:w-1/3");
        } else if (width === "2/3 no mobile") {
            setButtonWidth("w-full lg:w-2/3");
        } else if (width === "1/4 no mobile") {
            setButtonWidth("w-full lg:w-1/4");
        } else if (width === "3/4 no mobile") {
            setButtonWidth("w-full lg:w-3/4");
        } else {
            setButtonWidth("w-full");
        }

        // Default type is button
        if (!type) {
            type = "button";
        }

    }, [size, width, type]);

    return (
        <button className={`bg-black rounded-lg text-white font-bold flex items-center justify-center transition-all hover:bg-btn-bg-color-hover ${buttonSize} ${buttonWidth}`} onClick={onClick}
            aria-label={ariaLabel}
            type={type}
        >
            {text}
        </button>
    );
}