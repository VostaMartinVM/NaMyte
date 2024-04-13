import React from "react"
import { createRoot } from "react-dom/client" // Changed import here
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"

const rootElement = document.getElementById("root")

if (!rootElement) throw new Error("Failed to find the root element")

const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
