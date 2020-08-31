import React, {useState, useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    console.log(value)

    const submitHandler = (event) => {
        event.preventDefault()

        if (value.trim()) {
            alert.show(value, 'success')
            setValue('')
        } else {
            alert.show('Введите название!')
        }
        

    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Введите текст заметки"
                value={value}
                onChange={e => setValue(e.target.value)}
             />
        </form>
    )
}