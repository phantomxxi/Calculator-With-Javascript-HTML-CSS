function Lay_gia_tri_cu() {
    return document.getElementById("gia_tri_cu").innerText;
}

function In_gia_tri_cu(so) {
    document.getElementById("gia_tri_cu").innerText = so;
}

function Lay_ket_qua() {
    return document.getElementById("gia_tri_xuat").innerText;
}

function In_Ket_qua(so) {
    document.getElementById("gia_tri_xuat").innerText = so;
    // Debug loi co so 0 khi nhap so vao
    if (so == "") {
        document.getElementById("gia_tri_xuat").innerText = so;
    } else {
        document.getElementById("gia_tri_xuat").innerText = Dinh_dang_chuoi(so);
    }
}

// Dinh dang cho co dau phay khi so hang ngan vd 9,999
// Number toLocaleString() trong JavaScript biến đổi một đối tượng 
// number thành một chuỗi biểu diễn số con người có thể đọc bởi sử 
// dụng Locale của môi trường đó.
function Dinh_dang_chuoi(so) {
    var n = Number(so);
    var gia_tri = n.toLocaleString("en");
    return gia_tri;
}

// Chuyển định dạng số từ có dấu phẩy sang định dạng không dấu VD: 9,99 -> 999
function Xoa_Dinh_dang_chuoi(so) {
    return Number(so.replace(/,/g, ''));
}

// Gan va bat su kien cho cac button con so
var con_so = document.getElementsByClassName('con_so');
for (var i = 0; i < con_so.length; i++) {
    con_so[i].addEventListener('click', function() {
        var ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua());
        if (ket_qua != NaN) {
            ket_qua = ket_qua + this.id;
            In_Ket_qua(ket_qua);
        }
    })
}

// Gán sự kiện và tạo các chức năng cho các nút thuộc class he_thong
var he_thong = document.getElementsByClassName('he_thong');
for (var i = 0; i < he_thong.length; i++) {
    he_thong[i].addEventListener('click', function() {
        // Nút xóa tất cả "C"
        if (this.id == "xoa_tat_ca") {
            In_Ket_qua("");
            In_gia_tri_cu("");
            // Nút xóa từng số "CE"
        } else if (this.id == "xoa_tung_so") {
            // Chuyển kết quả từ dạng số sang chuỗi với toString()
            let ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua()).toString();
            if (ket_qua) {
                // Phương thức substr() dùng để xóa phần tử cuối cùng trong kết quả
                ket_qua = ket_qua.substr(0, ket_qua.length - 1);
                In_Ket_qua(ket_qua);
            }
        } else {
            var ket_qua = Lay_ket_qua();
            var ket_qua_cu = Lay_gia_tri_cu();
            if (ket_qua != "") {
                ket_qua = Xoa_Dinh_dang_chuoi(ket_qua);
                ket_qua_cu = ket_qua_cu + ket_qua;
                if (this.id == "=") {
                    // Phương thức eval() có chức năng tính toán biểu thức toán học hoặc thức thi 
                    // mã lệnh tùy thuộc vào tham số mà người dùng truyền vào khi khởi tạo phương thức.
                    var ket_qua_cuoi = eval(ket_qua_cu);
                    In_Ket_qua(ket_qua_cuoi);
                    In_gia_tri_cu("");
                } else {
                    ket_qua_cu = ket_qua_cu + this.id;
                    In_gia_tri_cu(ket_qua_cu);
                    In_Ket_qua("");
                }
            }
        }
    })
}