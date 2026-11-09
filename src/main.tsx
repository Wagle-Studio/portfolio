import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AppContextProvider from "./ui/AppContext.tsx";
import { DeckProvider } from "./ui/deck/DeckProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <DeckProvider>
        <App />
      </DeckProvider>
    </AppContextProvider>
  </StrictMode>,
);
