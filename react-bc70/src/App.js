import logo from "./logo.svg";
import EventHandler from "./EventHandler/EventHandler";
import LoginForm from "./EventHandler/LoginForm";
import StyleComponent from "./StyleComponent/StyleComponent";
import BaiTapChonXe from "./StateDemo/BaiTapChonXe/BaiTapChonXe";
import BaiTapTangGiamFontSize from "./BaiTapTangGiamFontSize/BaiTapTangGiamFontSize";
import RenderWithMap from "./RenderWithMap/RenderWithMap";

function App() {
  return (
    <div className="App">
      {/* <BaiTapDungLayout /> */}
      {/* <EventHandler /> */}
      {/* <LoginForm /> */}
      {/* <BaiTapChonXe /> */}
      {/* <BaiTapTangGiamFontSize /> */}
      <RenderWithMap />
    </div>
  );
}

export default App;
