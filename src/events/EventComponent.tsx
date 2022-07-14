import React from 'react'

const EventComponent: React.FC= () => {
    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
    }

    function handleDrag(event: React.DragEvent<HTMLDivElement>) {
        console.log(event.clientX)
    }

    return <>
        <input type="text" onChange={handleOnChange}/>
        <div draggable onDragStart={handleDrag}>Drag Me</div>
    </>
}

export default EventComponent