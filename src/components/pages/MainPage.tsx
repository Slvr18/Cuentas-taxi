import { useEffect, useState } from "react";
import { LabeledInput } from "../LabeledInput";
import { MultiLabeledInput } from "../MultiLabeledInput";

export const MainPage = () => {
    const [emptyKMS,setEmptyKMS] = useState(0);
    const [fullKMS,setfullKMS] = useState(0);
    const [totalKMS,settotalKMS] = useState(0);

    useEffect(() => {setEmptyKMS(totalKMS - fullKMS)}
    ,[totalKMS, fullKMS])



    return (
        <main>
            <LabeledInput 
                inputName="dateName" 
                labelText='Fecha' 
                inputType='date' 
            />
            <MultiLabeledInput variableName="carreras" />
            <MultiLabeledInput variableName="taximetro" />
            <MultiLabeledInput variableName="horas" />
            <MultiLabeledInput variableName="kms Cargado" setTotal={setfullKMS}/>
            <MultiLabeledInput variableName="Kms En Total" setTotal={settotalKMS}/>
            <strong>llevas {emptyKMS} kms vacío</strong>




            
        </main>
    );
};
