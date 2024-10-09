export const LabeledInput = ({ value = 0, onChange = () => {}, inputName = "dateName", labelText = 'Fecha', inputType = 'text' }) => {
    return (
        <section>
            <label htmlFor={inputName}>{labelText}</label>
            <input 
                value={value} 
                onChange={onChange} 
                name={inputName} 
                type={inputType} 
            />
        </section>
    );
};