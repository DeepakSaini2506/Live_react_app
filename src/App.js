
import './App.css';
import ToDoListComponent from './Components/ToDoListComponent';
import HomePage from './Components/newComponent';
import {BrowserRouter , Route , Routes} from "react-router-dom" 
import NavBarComponent from './NavBar component';
import PracticeComponent from './Components/PracticeComp';
import MuiComponent from './Components/MUIComponent';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <>
     {/* <ToDoListComponent/> */}
     
     <BrowserRouter>
     <NavBarComponent/> 
     {/* <MuiComponent /> */}
     <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/about" element={<HomePage name= {'About page'}/>}/>
      <Route path="/contact" element={<HomePage name= {'contact page'}/>}/>
      <Route path="/ToDoListComponent" element={<ToDoListComponent />}/>
      <Route path="/PracticeComponent" element={<PracticeComponent/>}/>
      <Route path="/Mui-learn" element={<MuiComponent/>}/>
     </Routes>
     </BrowserRouter>
     



    </>
  );
}

export default App;


// MUI integration in react(Material user interface)
// install MUI (npm i  )
