// import createRoot from 'react-dom'
import App  from "./App";
import './index.css';

import { createRoot } from 'react-dom/client';
const container = document.getElementById("id");
const root = createRoot(container);
root.render(<App/>);