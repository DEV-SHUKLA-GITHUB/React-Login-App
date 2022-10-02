import logo from './logo.svg';
import './App.css';
import SignupFormValidation from './Signup';
import LoginFormValidation from './Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <Router>
        <Routes>
          <Route path="/" element={<SignupFormValidation/>}></Route>
          <Route path="/Login" element={<LoginFormValidation />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
