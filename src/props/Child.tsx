import React from 'react';

interface IChildProps {
    color: string;
    onClick: () => void;
    children: string;
}

const ChildBasic = ({ color }: IChildProps) => {
    return <h1>Child Basic</h1>
}

const ChildFC: React.FC<IChildProps> = ({ color, onClick, children }) => {
    return <button onClick={ onClick }>{ children }</button>
}

export { ChildBasic, ChildFC }