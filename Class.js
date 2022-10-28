class nguoidung {
    tenhienthi;
    tendangnhap;
    matkhau;

    constructor(tenhienthi, tendangnhap, matkhau) {
        this.tenhienthi = tenhienthi;
        this.tendangnhap = tendangnhap;
        this.matkhau = matkhau;
    }
}

let user1 = new nguoidung("Ngọc Tu Tiên", "ngocngu", 1)
let user2 = new nguoidung("Dương ti sụt", "duongngu", "1")
let user3 = new nguoidung("Bon chặt chân", "bonngu", "1")
let arruser = [user1, user2, user3]
// localStorage.setItem("user", JSON.stringify(arruser))
// let User = JSON.parse(localStorage.getItem("user"))
