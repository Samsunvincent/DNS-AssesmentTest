import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BodyFirstSection from "./components/BodyFirstSection";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Nav from "./components/Nav";
import Login from "./components/pages/Login";
import AdminPanel from "./components/pages/AdminPanel";

import AddCategoryForm from "./components/pages/addCategory";
import AddItemForm from "./components/pages/AddItem";
import AddMenuForm from "./components/pages/addMenu";

function App() {
  return (
    <Router> 
      <Nav />
      <Routes> 
        <Route path="/" element={
          <>
            <Head />
            <BodyFirstSection />
          </>
        } />
        <Route path="/login" element={<Login />} /> 
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/add-category" element={<AddCategoryForm/>} /> 
        <Route path="/add-item" element={<AddItemForm/>} /> 
        <Route path="/add-menu" element={<AddMenuForm/>} /> 


         
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
