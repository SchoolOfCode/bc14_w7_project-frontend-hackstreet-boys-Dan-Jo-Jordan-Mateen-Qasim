import "./App.css";

import HorizontalNonLinearStepper from "../timeline";

import CollapsibleTable from "../dropdown";


function App() {
    return (
        <div className="App">
            <h1>SoC Roadmap App</h1>

            <HorizontalNonLinearStepper />


           
            <CollapsibleTable />

        </div>
    );
}

export default App;
