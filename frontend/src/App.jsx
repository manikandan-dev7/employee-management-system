import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employess from "./pages/employess";
import AddEmployee from "./pages/addEmployee";
import EditEmployee from "./pages/editEmployee";
import ViewEmployee from "./pages/viewEmployee";
import SideBar from "./components/sideBar";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        
        {/* Sidebar */}
        <SideBar />

        {/* Main */}
        <div className="flex-1 flex flex-col">
          <NavBar />

          <div className="p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Employess />} />
              <Route path="/add" element={<AddEmployee />} />
              <Route path="/edit/:id" element={<EditEmployee />} />
              <Route path="/view/:id" element={<ViewEmployee />} />
            </Routes>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;