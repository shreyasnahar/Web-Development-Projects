import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Greet from "./Components/Greet"


function App(props) {
  return (
     //<Header />
     //<h1>{props.title}</h1> passing parameters between components

     <div>
        <Header title="Welcome to G20 in India"/>
        <Greet name="G20 Delegates"/>
     </div>

  );
}

export default App;
