import { Component } from "react";

interface IUser {
    name: string;
    age: number;
}

interface IUserSearchProps {
    users?: IUser[] | undefined;
}

interface IUserSearchState {
    name: string;
    users: IUser[] | undefined;
}

const users: IUser[] = [
    {
        name: 'Maria',
        age: 8
    },
    {
        name: 'Jordi',
        age: 26
    },
    {
        name: 'Janaina',
        age: 32
    }
]

class UserSearch extends Component<IUserSearchProps> {
    state: IUserSearchState = {
        name: '',
        users: undefined
    }

    onClick = () => {
        if (!this.state.name) {
            alert('Type Something')
            return
        }

        const foundUsers: IUser[] = users.filter((user, _) => {
            return user.name.toLowerCase().includes(this.state.name.toLowerCase());
        })

        this.setState({ users: foundUsers });
        this.setState({ name: '' });
    }

    render() {
        const { name, users } = this.state;
        return <>
            <input type="text" value={name} onChange={e => this.setState({name: e.target.value})}/>
            <button onClick={this.onClick}>Search</button>

            <ul>
                {users && users.map((user, index) => {
                    return <li key={index}>{user.name}, {user.age} years old</li>
                })}
            </ul>
        </>
    }
}

export { UserSearch };