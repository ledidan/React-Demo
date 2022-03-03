const stateDefault = {
  maSP: 1,
  tenSP: "VinSmart Live",
  manHinh: "AMOLED, 6.2, Full HD+",
  heDieuHanh: "Android 9.0 (Pie)",
  cameraTruoc: "20 MP",
  cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
  ram: "4 GB",
  rom: "64 GB",
  giaBan: 5700000,
  hinhAnh: "./img/imgPhone/vsphone.jpg",
};

export const ProductDetailReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XEM_SAN_PHAM": {
      state = action.spClick;
      return { ...state };
    }
    default:
      return state;
  }
};
