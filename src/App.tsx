// src/App.tsx
import { useState } from "react";
import { Home } from "./pages/Home";
import { Splash } from "./components/Splash";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />;
  }

  return <Home />;
}

export default App;