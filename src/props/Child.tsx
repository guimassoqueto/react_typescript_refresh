interface IChildProps {
    color: string;
}

function Child(props: IChildProps) {
    const { color } = props;

    return (
        <div>{ color }</div>
    )
}

export { Child }