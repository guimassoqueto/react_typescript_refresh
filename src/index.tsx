import { createRoot } from 'react-dom/client';
import { UserSearch } from './classes/UserSearch';

function App() {
    return <UserSearch/>
}

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
