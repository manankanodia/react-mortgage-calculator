import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
    return (
        <>
            <SliderComponent label="Home Value" min={10} max={50} defaultValue={20} step={10} onChange={(e, value)=>console.log(value)} unit='$' amount='3000'></SliderComponent>
            <SliderComponent label="Down Payment" min={10} max={50} defaultValue={20} step={10} onChange={(e, value)=>console.log(value)} unit='$' amount='3000'></SliderComponent>
            <SliderComponent label="Loan Amount" min={10} max={50} defaultValue={20} step={10} onChange={(e, value)=>console.log(value)} unit='$' amount='3000'></SliderComponent>
        </>
    )
}

export default SliderSelect