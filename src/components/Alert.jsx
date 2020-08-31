import React, {useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext';

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if (!alert.visible) {
        return null
    }

    return (
        <div class={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong>Внимание!</strong> {alert.text}.
            <button onClick={hide} type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}