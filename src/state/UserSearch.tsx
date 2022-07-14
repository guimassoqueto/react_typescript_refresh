import React, { useState } from 'react'

interface IUser {
    name: string;
    age: number;
}

const users: IUser[] = [
    {
        name: 'Maria',
        age: 8
    },
    {
        name: 'Jordi',
        age: 26
    }
]

const UserSearch: React.FC = () => {
    const [ searchValue, setSearchValue ] = useState<string>('');
    const [ usersFound, setUsersFound ] = useState<IUser[]>([])

    function onClick() {
        if (!searchValue) {
            alert('Type Something')
            return
        }

        const foundUsers: IUser[] = users.filter((user, index) => {
            return user.name.toLowerCase().includes(searchValue.toLowerCase());
        })

        setUsersFound(foundUsers);
        setSearchValue('');
    }

    return <>
        <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        <button onClick={onClick}>Search</button>

        {usersFound.length > 0 && usersFound.map((user, index) => {
            return <li key={index}><b>User: </b>{user.name} <b>Age: </b>{user.age}</li>
        })}

        {usersFound.length === 0 && <p>No users found</p>}
    </>
}

export default UserSearch;