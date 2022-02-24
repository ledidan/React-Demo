import logo from "./logo.svg";
import "./App.css";
import BaiTapDungLayout from "./BaiTapDungLayout/BaiTapDungLayout";
import DataBinding from "./DataBind/DataBinding";
import HandlingEvent from "./HandlingEvent/HandlingEvent";

function App() {
  return (
    <div className="App">
      {/* <BaiTapDungLayout /> */}
      <DataBinding />
      <HandlingEvent />
    </div>
  );
}

export default App;
