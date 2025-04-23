import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import PropsPage from "./pages/01-Props/ProposPage";
import StatePage from "./pages/02-state/StatePage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center p-8">
                <h1 className="text-3xl font-bold">
                  Welcome to React Exercises!
                </h1>
                <p>Select an exercise from the navbar.</p>
              </div>
            }
          />
          <Route path="/exercises/props" element={<PropsPage />} />
          <Route path="/exercises/state" element={<StatePage />} />
          {/* Add more exercise routes here */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
