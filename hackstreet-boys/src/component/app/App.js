import "./App.css";
import Timeline from "../timeline";
import CollapsibleTable from "../dropdown";

function App() {
    return (
        <div className="App">
            <h1>SoC Roadmap App</h1>
            <Timeline />
            <CollapsibleTable />
        </div>
    );
}

export default App;
