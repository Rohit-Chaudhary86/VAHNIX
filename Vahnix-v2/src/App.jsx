// src/App.jsx
import React from "react";
import AppRouter from "./Router/index.jsx"; // This is your router/index.jsx

// Optional: If you want dark/light mode toggle later
// import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      {/* Optional: Wrap in ThemeProvider if you add dark mode later */}
      {/* <ThemeProvider> */}
        <AppRouter />
      {/* </ThemeProvider> */}
    </>
  );
}
// redeploy trigger

export default App;