import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen">
      <Navigate to="/home" />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
