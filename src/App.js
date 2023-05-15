
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom'
import AddEmployee from './employee/AddEmployee';
import EditEmployee from './employee/EditEmployee';
import ViewEmployee from './employee/ViewEmployee';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path= "/" element={<Home />}> </Route>
          <Route exact path= "/add-employee" element={<AddEmployee/>}> </Route>
          <Route exact path= "/" element={<Home />}> </Route>
          <Route exact path="/edit-employee/:id" element={<EditEmployee/>}> </Route>
          <Route exact path="/view-employee/:id" element={<ViewEmployee/>}> </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
