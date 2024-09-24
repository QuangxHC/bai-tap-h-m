const tien50Kw = 500;
const tien50KwKe = 650;
const tien100Kw = 850;
const tien150Kw = 1100;
const tienConLai = 1300;

function tinhTienDien(soKw) {
  let tongTien = 0;

  if (soKw <= 50) {
    tongTien = soKw * tien50Kw;
  } else if (soKw <= 100) {
    tongTien = 50 * tien50Kw + (soKw - 50) * tien50KwKe;
  } else if (soKw <= 200) {
    tongTien = 50 * tien50Kw + 50 * tien50KwKe + (soKw - 100) * tien100Kw;
  } else if (soKw <= 350) {
    tongTien =
      50 * tien50Kw +
      50 * tien50KwKe +
      100 * tien100Kw +
      (soKw - 200) * tien150Kw;
  } else {
    tongTien =
      50 * tien50Kw +
      50 * tien50KwKe +
      100 * tien100Kw +
      150 * tien150Kw +
      (soKw - 350) * tienConLai;
  }

  return tongTien;
}

function hienThi(ten, tienDien) {
  document.getElementById("hienThiTienDien").innerHTML = `
    <h2>Tên: ${ten}</h2>
    <h2>Tiền điện: ${tienDien}</h2>`;
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
