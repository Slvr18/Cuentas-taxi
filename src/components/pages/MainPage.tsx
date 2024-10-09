import { useState } from "react";
import { LabeledInput } from "../LabeledInput";

export const MainPage = () => {
    const [trips, setTrips] = useState(0);
    const [initialTrips, setInitialTrips] = useState(0);
    const [finalTrips, setFinalTrips] = useState(0);

    return (
        <main>
            <LabeledInput 
                inputName="dateName" 
                labelText='Fecha' 
                inputType='date' 
            />
            <LabeledInput 
                value={initialTrips} 
                onChange={(e: { target: { value: any; }; }) => setInitialTrips(Number(e.target.value) || 0)}
                inputName="initialTrips" 
                labelText='Carreras al empezar' 
                inputType='number' 
            />
            <LabeledInput 
                value={finalTrips} 
                onChange={(e: { target: { value: any; }; }) => setFinalTrips(Number(e.target.value) || 0)}
                inputName="endingTrips" 
                labelText='Carreras al acabar' 
                inputType='number' 
            />
            <hr />
            <button onClick={() => setTrips(finalTrips - initialTrips)}>Calcular</button>
            <strong>Llevas {trips} carreras</strong>
        </main>
    );
};
