import React, { useState } from 'react'

const GuestList: React.FC = () => {
    const [ name, setName ] = useState<string>('')
    const [ guests, setGuests ] = useState<string[]>([])

    function onClick() {
        if (name) {
            setGuests([...guests, name]);
            setName('');
        }
    }

    return <>
        <div>
            <ul>
                { guests.length > 0 && guests.map((guest, index) => {
                    return <li key={ index }>{ guest }</li>
                })}
            </ul>

            <input value={ name } onChange={(e) => setName(e.target.value)}/>

            <button onClick={onClick}>Add Guest</button>

        </div>
    </>
}

export default GuestList