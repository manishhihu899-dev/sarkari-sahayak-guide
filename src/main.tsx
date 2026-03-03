import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

if ("serviceWorker" in navigator) {
  window.setInterval(() => {
    navigator.serviceWorker.getRegistration().then((registration) => {
      registration?.update();
    });
  }, 60 * 1000);
}


