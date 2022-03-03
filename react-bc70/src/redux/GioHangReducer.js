const stateDefault = {
  gioHang: [
    // {
    //   maSP: 1,
    //   tenSP: "VinSmart Live",
    //   giaBan: 5700000,
    //   soLuong: 3,
    //   hinhAnh: "./img/imgPhone/vsphone.jpg",
    // },
  ],
};

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHang = [...state.gioHang];
      //  Từ option giỏ hàng tạo ra Object spGioHang
      let spGioHang = { ...action.sanPham, soLuong: 1 };
      // Kiểm tra sp đó đã có trong giỏ hàng hay chưa
      let sp = gioHang.find((sanPham) => sanPham.maSP === spGioHang.maSP);
      if (sp) {
        sp.soLuong += 1;
      } else {
        // Nếu sản phẩm dispatch lên chưa có trong giỏ hàng => thêm vào giỏ hàng
        gioHang.push(spGioHang);
      }
      // Gán lại giỏ hàng redux = giỏ hàng đã xử lý
      state.gioHang = gioHang;

      return { ...state };
    }
    default:
      return state;
  }
};
