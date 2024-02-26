// Import necessary components and hooks
import './App.css';
import NavBar from "./components/NavBar"; // Ensure this path matches your file structure
import Footer from './components/Footer'; // Import the Footer component
import { Routes, Route } from "react-router-dom"; // Import Routes and Route for routing
import Home from './pages/Home'; // Import the Home component to use as a route

// Define the App component
function App() {
  return (
    <div className="App">
      <NavBar /> {/* NavBar will display across all pages */}
      {/* Add a div wrapper for main content with a className */}
      <div className="App-content" style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for the Home page */}
        </Routes>
      </div>
      <Footer /> {/* Footer will display across all pages */}
    </div>
    
  );
}

// Export the App component
export default App;
