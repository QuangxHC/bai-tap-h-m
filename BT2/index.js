const tien50Kw = 500;
const tien50KwKe = 650;
const tien100Kw = 850;
const tien150Kw = 1100;
const tienConLai = 1300;

function tinhTienDien(soKw) {
  let tongTien =
    soKw * tien50Kw +
    (soKw > 50 ? (soKw - 50) * (tien50KwKe - tien50Kw) : 0) +
    (soKw > 100 ? (soKw - 100) * (tien100Kw - tien50KwKe) : 0) +
    (soKw > 200 ? (soKw - 200) * (tien150Kw - tien100Kw) : 0) +
    (soKw > 350 ? (soKw - 350) * (tienConLai - tien150Kw) : 0);
  return tongTien;
}

function hienThi(ten, tienDien) {
  document.getElementById("hienThiTienDien").innerHTML = `
    <h2>Tên: ${ten}</h2>;
  <h2> Tiền điện: ${tienDien}</h2>`;
}

document.getElementById("tinhTienDien").onclick = function () {
  let ten = document.getElementById("ten").value;
  let soKw = document.getElementById("soKw").value * 1;
  let tongTienDien = tinhTienDien(soKw);
  let formattedNumberVND = tongTienDien.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  hienThi(ten, formattedNumberVND);
};
