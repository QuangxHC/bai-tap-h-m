const phiHoaDoNhaDan = 4.5;
const phiDVNhaDan = 20.5;
const phiThueKenhNhaDan = 7.5;

const phiHoaDonDoanhNghiep = 15;
const phiDVDoanhNghiep10KetNoiDau = 75;
const phiDVDoanhNghiepThemSau10KetNoi = 5;
const phiThueKenhDoanhNghiep = 50;

let loaiKhachHang = "nhaDan";

function selectCustomerType(khachhang) {
  document.getElementById("loaiKhachHangMenuButton").textContent =
    khachhang.textContent;
  loaiKhachHang = khachhang.getAttribute("data-id");
  document.getElementById("divSoKetNoi").className = `${
    loaiKhachHang == "doanhNghiep" ? "mb-3 d-block" : "mb-3 d-none"
  }`;
}

function tinhPhiHoaDon(loaiKhachHang) {
  if (loaiKhachHang == "nhaDan") {
    return phiHoaDonNhaDan;
  }
  if (loaiKhachHang == "doanhNghiep") {
    return phiHoaDonDoanhNghiep;
  }
}

function tinhPhiDV(loaiKhachHang, soKetNoi = 0) {
  if (loaiKhachHang == "nhaDan") {
    return phiDVNhaDan;
  }
  if (loaiKhachHang == "doanhNghiep") {
    return (
      phiDVDoanhNghiep10KetNoiDau +
      (soKetNoi > 10 ? (soKetNoi - 10) * phiDVDoanhNghiepThemSau10KetNoi : 0)
    );
  }
}

function tinhPhiThue(loaiKhachHang, soKenh) {
  if (loaiKhachHang == "nhaDan") {
    return soKenh * phiThueKenhNhaDan;
  }
  if (loaiKhachHang == "doanhNghiep") {
    return soKenh * phiThueKenhDoanhNghiep;
  }
}

function hienThi(maKhachHang, soTien) {
  document.getElementById("hienThiTien").innerHTML = `
     <h2>Ma khach hang: ${maKhachHang}</h2>
    <h2>So tien thanh toan: ${soTien}</h2>
    `;
}

document.getElementById("tinhTien").onclick = function () {
  let maKhachHang = document.getElementById("maKhachHang").value;
  let soKenh = document.getElementById("soKenh").value * 1;
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  let tongTien =
    tinhPhiHoaDon(loaiKhachHang) +
    tinhPhiDV(loaiKhachHang, soKetNoi) +
    tinhPhiThue(loaiKhachHang, soKenh);
  let formattedNumberVND = tongTien.tolocaleString("vi-VN", {
    style: "currency",
    currency: "USD",
  });
  hienThi(maKhachHang, formattedNumberVND);
};
