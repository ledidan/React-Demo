import logo from "./logo.svg";
import EventHandler from "./EventHandler/EventHandler";
import LoginForm from "./EventHandler/LoginForm";
import StyleComponent from "./StyleComponent/StyleComponent";
import BaiTapChonXe from "./StateDemo/BaiTapChonXe/BaiTapChonXe";
import BaiTapTangGiamFontSize from "./BaiTapTangGiamFontSize/BaiTapTangGiamFontSize";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./Props/DemoProps/DemoProps";
import BaiTapQLSP from "./Props/BaiTapQLSP/BaiTapQLSP";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
import CarStore from "./Props/CarStore/CarStore";

function App() {
  return (
    <div className="App">
      {/* <BaiTapDungLayout /> */}
      {/* <EventHandler /> */}
      {/* <LoginForm /> */}
      {/* <BaiTapChonXe /> */}
      {/* <BaiTapTangGiamFontSize /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <BaiTapQLSP /> */}
      {/* <BaiTapXemChiTiet /> */}
      <CarStore />
    </div>
  );
}

export default App;
