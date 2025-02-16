import React from "react";
import { createRoot } from 'react-dom/client'; 

const App = () => <h1>Hello,Frontend!</h1>;

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}

