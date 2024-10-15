import { useEffect, useState } from "react";
import { LabeledInput } from "./LabeledInput";

export const MultiLabeledInput = ({variableName = "variable", setTotal=(_:number) => {} }) => {
    const [initial, setInitial] = useState(0);
    const [final, setFinal] = useState(0);
    const [current, setCurrent] = useState(0);

    useEffect(() => {setCurrent(final - initial)}
    ,[final, initial])

    useEffect(() => {
        setTotal(current);
    }, [current])

    return (
        <>
        <LabeledInput 
        value={initial} 
        onChange={(e: { target: { value: any; }; }) => setInitial(Number(e.target.value) || 0)}
        inputName="initial" 
        labelText={`${variableName} al empezar`} 
        inputType='number' 
    />
    <LabeledInput 
        value={final} 
        onChange={(e: { target: { value: any; }; }) => setFinal(Number(e.target.value) || 0)}
        inputName="ending" 
        labelText={`${variableName} al acabar`}
        inputType='number' 
    />
    <hr />
    <strong>Llevas {current} {variableName}</strong>
</>
    );
};