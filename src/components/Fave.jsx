import React from 'react'
import AddToQueueIcon from '@material-ui/icons/AddToQueue'
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';

export const Fave = (props) => {

    

    const handleClick = (e) => {
        e.stopPropagation()
        props.onFaveToggle()
        console.log('handling Fave click!')
    }

    const isFaveClass = (props.isFave) ? 'remove_from_queue' : 'add_to_queue'

    return (
        <div onClick={handleClick} className={`film-row-fave ${isFaveClass}`}>
            {props.isFave ? <RemoveFromQueueIcon/> : <AddToQueueIcon />}
        </div>
    )
}
