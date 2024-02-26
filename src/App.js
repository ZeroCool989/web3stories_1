// Import necessary components and hooks
import './App.css';
import NavBar from "./components/NavBar"; // Ensure this path matches your file structure
import { Routes, Route } from "react-router-dom"; // Import Routes and Route for routing
import Home from './pages/Home'; // Import the Home component to use as a route

// Define the App component
function App() {
  return (
    <div className="App">
      <NavBar /> {/* NavBar will display across all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the Home page */}
      </Routes>
    </div>
  );
}

// Export the App component
export default App;
