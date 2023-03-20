import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar"; 
import Map from "./Map";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import UserProfile from "./UserProfile";
function App() {
  return (
    <>
      <ChakraProvider> 
        <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/UserProfile/:id" element={<UserProfile />} />  
          </Routes>
          <Footer />
        </Router> 
      </ChakraProvider>
    </>
  );
}

export default App;
