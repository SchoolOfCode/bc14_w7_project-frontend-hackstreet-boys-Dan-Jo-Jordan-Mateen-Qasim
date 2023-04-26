import "./App.css";

import Timeline from "../timeline";
import CollapsibleTable from "../dropdown";


function App() {
    return (
        <div className="App">
            <h1>SoC Roadmap App</h1>
            <h2>'Your one-stop-shop for your weekly learning resources!'</h2>
            <img src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" alt="School of Code Logo"></img>
            <Timeline />          
        </div>
    );
}

export default App;
