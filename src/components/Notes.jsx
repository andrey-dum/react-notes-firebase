import React, {useContext} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext';


export const Notes = ({notes, onRemove}) => {
    //const {alert, hide} = useContext(AlertContext)
    const alert = useContext(AlertContext)
    const hide = useContext(AlertContext)

    // const handleRemove = (id) => {
    //     onRemove(id)
    //     alert.show('уДАЛЕНО', 'danger')
    // }
    
    const handleRemove = (id) => {
        onRemove(id).then(() => {
            alert.show('Заметка удалена', 'danger')
          })
          setTimeout(alert.hide, 2600)
    }
  
    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note => (
            <CSSTransition
                key={note.id}
                classNames={'note'}
                timeout={800}
            >
                <li className="list-group-item note">
                <div>
                    <strong>{note.title}</strong>
                    <small>{note.date}</small>
                </div>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={()=> handleRemove(note.id)}
                >
                    &times;
                </button>
                </li>
            </CSSTransition>
            ))}
  </TransitionGroup>
    )
}