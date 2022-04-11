import { useState } from "react"


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState( initialState )

    const habdleInputChange = ({ target }) =>{
        
        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [values, habdleInputChange];
}
