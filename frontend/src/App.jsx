import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employess from "./pages/employess";
import AddEmployee from "./pages/addEmployee";
import EditEmployee from "./pages/editEmployee";
import ViewEmployee from "./pages/viewEmployee";
import SideBar from "./components/sideBAr";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <SideBar />

        <div className="flex flex-col flex-1">
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
