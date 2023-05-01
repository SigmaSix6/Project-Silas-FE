import "./App.css";
import Dashboard from "./components/Dashboard";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="en-gb">
        <Dashboard />
      </LocalizationProvider>
    </div>
  );
}

export default App;
