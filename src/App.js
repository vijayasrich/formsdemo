import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/controlledform";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Sample from "./components/sample";
import FormWithHook from "./components/formwithhook";
import RegistrationForm from "./components/useformwithdynamicfields";
import RegistrationFormWithDynamicFiedls from "./components/useformwithdynamicfields";
import DepartmentList from "./components/demowithoutuseeffect";

//import UnControlledLoginForm from "./components/uncontrolledcomponent";
function App() {
  return (
    <>
<Router>
  <Routes>
    {/*<Route path="/" element={<LoginForm />}/> 
    <Route path="/" element={<UnControlledLoginForm/>} />
    <Route path="/" element={<RegistrationFormWithDynamicFiedls />} />*/}
    <Route path="/" element={<DepartmentList />} />
    <Route path="/sample" element={<Sample />}/>
  </Routes>
</Router>
    <div className="App"></div>
    </>
  );
}

export default App;
