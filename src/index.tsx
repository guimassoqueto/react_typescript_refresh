import { createRoot } from 'react-dom/client';
import UserSearch from './state/UserSearch';

function App() {
    return <UserSearch/>
}

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
