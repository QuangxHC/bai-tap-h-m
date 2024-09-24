const thueDen60 = 0.05;
const thueTren60Den120 = 0.1;
const thueTren120Den210 = 0.15;
const thueTren210Den384 = 0.2;
const thueTren384Den624 = 0.25;
const thueTren624Den960 = 0.3;
const thueTren960 = 0.35;

const offset = 4000000;
const heSoPhuThuoc = 1600000;

function tinhThue(tongThuNhap, nguoiPhuThuoc) {
  let thuNhapChiuThue = tongThuNhap - offset - nguoiPhuThuoc * heSoPhuThuoc;
  if (thuNhapChiuThue <= 60000000) {
    return thuNhapChiuThue * thueDen60;
  }
  if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    return thuNhapChiuThue * thueTren60Den120;
  }
  if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    return thuNhapChiuThue * thueTren120Den210;
  }
  if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    return thuNhapChiuThue * thueTren210Den384;
  }
  if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    return thuNhapChiuThue * thueTren384Den624;
  }
  if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    return thuNhapChiuThue * thueTren624Den960;
  }
}

function hienThi(ten, tienThue) {
  document.getElementById("hienThiThue").innerHTML = `
    <h2>Tên: ${ten}</h2>
    <h2>Tiền thuế phải trả: ${tienThue}</h2>
    `;
}

document.getElementById("tinhTienThue").onclick = function () {
  let ten = document.getElementById("hoTen").value;
  let nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
  let thuNhap = document.getElementById("tongThuNhapNam").value * 1;

  let tienThue = tinhThue(thuNhap, nguoiPhuThuoc);
  let formattedNumberVND = tienThue.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  hienThi(ten, formattedNumberVND);
};
