import React from "react";
import { getVerseOfTheDay } from "../utils/verses";
import { useLocation } from "react-router-dom";

function VerseOfTheDay() {
    const [verse, text] = getVerseOfTheDay();
    const location = useLocation();
    const browser = location.pathname;

    return (
            <div className="pt-6 pb-6 border-b shadow-lg w-full">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-xl font-bold font-[times] text-center md:text-2xl">{verse}</p>
                    <p className="text-xs md:text-[16px] text-center italic font-[georgia] w-[90dvw] md:w-[75dvw] pt-2">{text}</p>
                </div>
            </div>
    );
}

export default VerseOfTheDay;