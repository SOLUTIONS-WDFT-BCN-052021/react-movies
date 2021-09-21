import React, { useState } from 'react'
import AddToQueueIcon from '@material-ui/icons/AddToQueue'
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';

export const Fave = () => {

    const [isFave, setIsFave] = useState(false)

    const handleClick = (e) => {
        e.stopPropagation()
        setIsFave(!isFave)
        console.log('handling Fave click!')
    }

    const isFaveClass = (isFave) ? 'remove_from_queue' : 'add_to_queue'

    return (
        <div onClick={handleClick} className={`film-row-fave ${isFaveClass}`}>
            {isFave ? <RemoveFromQueueIcon/> : <AddToQueueIcon />}
        </div>
    )
}
