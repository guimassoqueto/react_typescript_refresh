import { createRoot } from 'react-dom/client';
import Refs from './refs/Refs';

function App() {
    return <Refs/>
}

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
