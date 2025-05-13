
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Prevenir o comportamento padrão de rolar para o topo
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

createRoot(document.getElementById("root")!).render(<App />);
