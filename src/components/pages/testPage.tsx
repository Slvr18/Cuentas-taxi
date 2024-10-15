export const TestPage = ({message = 'Hello World'}) => {
    return (
        <>
            <h1>{message}</h1>
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
            <strong>Llevas {trips} carreras</strong>

        </>
    )
}