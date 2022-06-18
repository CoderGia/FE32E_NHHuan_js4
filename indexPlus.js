// bài tập 1: 
document.getElementById('ngayHomQua').onclick = function () {
    //input
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);
    //output
    var ketQua1 = '';
    // tiến trình
    if (thang > 12 || thang <= 0 || ngay > 31 || ngay <= 0 || nam < 0) {
        ketQua1 = 'Ngày không xác định';
    } else if (thang === 1 & ngay === 1 & nam === 0) {
        ketQua1 = 'Ngày không xác định';
    } else if (thang === 1 & ngay === 1) {
        ketQua1 = 'Ngày 31 tháng 12 năm ' + (nam - 1);
    } else if (thang === 2 & ngay > 28) {
        ketQua1 = 'Ngày không xác định';
    } else if ((thang === 4 || thang === 6 || thang === 9 || thang === 11) & ngay > 30) {
        ketQua1 = 'Ngày không xác định';
    } else if (thang === 3 & ngay === 1) {
        ketQua1 = 'Ngày 28 tháng 2 năm ' + nam;
    } else if ((thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) & (ngay === 1)) {
        ketQua1 = 'Ngày 30 tháng ' + (thang - 1) + ' năm ' + nam;
    } else if ((thang === 2 || thang === 4 || thang === 6 || thang === 9 || thang === 11) & (ngay === 1)) {
        ketQua1 = 'Ngày 31 tháng ' + (thang - 1) + ' năm ' + nam;
    } else {
        ketQua1 = 'Ngày ' + (ngay - 1) + ' tháng ' + thang + ' năm ' + nam;
    }
    // Xuất kết quả
    document.getElementById('ketQua1').innerHTML = ketQua1;
}

document.getElementById('ngayMai').onclick = function () {
    //input
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);
    //output
    var ketQua1 = '';
    // Tiến trình
    if (thang > 12 || thang <= 0 || ngay > 31 || ngay <= 0 || nam < 0) {
        ketQua1 = 'Ngày không xác định';
    } else if (thang === 12 & ngay === 31) {
        ketQua1 = 'Ngày 1 tháng 1 năm ' + (nam + 1);
    } else if (thang === 2 & ngay > 28) {
        ketQua1 = 'Ngày không xác định';
    } else if ((thang === 4 || thang === 6 || thang === 9 || thang === 11) & ngay > 30) {
        ketQua1 = 'Ngày không xác định';
    } else if (thang === 2 & ngay === 28) {
        ketQua1 = 'Ngày 1 tháng 3 năm ' + nam;
    } else if ((thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) & (ngay === 31)) {
        ketQua1 = 'Ngày 1 tháng ' + (thang + 1) + ' năm ' + nam;
    } else if ((thang === 4 || thang === 6 || thang === 9 || thang === 11) & (ngay === 30)) {
        ketQua1 = 'Ngày 1 tháng ' + (thang + 1) + ' năm ' + nam;
    } else {
        ketQua1 = 'Ngày ' + (ngay + 1) + ' tháng ' + thang + ' năm ' + nam;
    }
    //Xuất kết quả
    document.getElementById('ketQua1').innerHTML = ketQua1;
}

// Bài tập 2
document.getElementById('tinhNgay').onclick = function () {
    //input
    var ithang = Number(document.getElementById('ithang').value);
    var inam = Number(document.getElementById('inam').value);
    //output
    var ketQua2 = '';
    //tiến trình
    if (ithang === 1 || ithang === 3 || ithang === 5 || ithang === 7 || ithang === 8 || ithang === 10 || ithang === 12) {
        ketQua2 = "Tháng " + ithang + ' năm ' + inam + ' có 31 ngày';
    } else if (ithang === 4 || ithang === 6 || ithang === 9 || ithang === 11) {
        ketQua2 = "Tháng " + ithang + ' năm ' + inam + ' có 30 ngày';
    } else if (ithang === 2) {
        if (inam % 100 === 0) {
            if (inam % 400 === 0) {
                ketQua2 = "Tháng " + ithang + ' năm ' + inam + ' có 29 ngày';
            } else {
                ketQua2 = "Tháng " + ithang + ' năm ' + inam + ' có 28 ngày';
            }
        } else {
            if (inam % 4 === 0) {
                ketQua2 = "Tháng " + ithang + ' năm ' + inam + ' có 29 ngày';
            } else {
                ketQua2 = "Tháng " + ithang + ' năm ' + inam + ' có 28 ngày';
            }
        }
    } else {
        ketQua2 = "Tháng " + ithang + ' năm ' + inam + ' có 28 ngày';
    }
    // Xuất kết quả
    document.getElementById('ketQua2').innerHTML = ketQua2;
}

// Bài tập 3
document.getElementById('docSo').onclick = function () {
    //input
    var so = Number(document.getElementById('so').value);
    // output
    var ketQua3 = '';
    //tiên trình: tách số có 3 chữ số
    var hangTram = Math.floor(so / 100);
    var hangChuc = Math.floor((so - hangTram * 100) / 10);
    var hanDonVi = so % 10;
    //tiến trình đọc số
    var docHangTram = '';
    var docHangChuc = '';
    var docHangDonVi = '';
    switch (hangTram) {
        case 1: {
            docHangTram = 'Một trăm';
            break;
        }
        case 2: {
            docHangTram = 'Hai trăm';
            break;
        }
        case 3: {
            docHangTram = 'Ba trăm';
            break;
        }
        case 4: {
            docHangTram = 'Bốn trăm';
            break;
        }
        case 5: {
            docHangTram = 'Năm trăm';
            break;
        }
        case 6: {
            docHangTram = 'Sáu trăm';
            break;
        }
        case 7: {
            docHangTram = 'Bảy trăm';
            break;
        }
        case 8: {
            docHangTram = 'Tám trăm';
            break;
        }
        case 9: {
            docHangTram = 'Chín trăm';
            break;
        }
    }

    switch (hangChuc) {
        case 0: {
            docHangChuc = 'lẻ';
            break;
        }
        case 1: {
            docHangChuc = 'mười';
            break;
        }
        case 2: {
            docHangChuc = 'hai mươi';
            break;
        }
        case 3: {
            docHangChuc = 'ba mươi';
            break;
        }
        case 4: {
            docHangChuc = 'bốn mươi';
            break;
        }
        case 5: {
            docHangChuc = 'năm mươi';
            break;
        }
        case 6: {
            docHangChuc = 'sáu mươi';
            break;
        }
        case 7: {
            docHangChuc = 'bảy mươi';
            break;
        }
        case 8: {
            docHangChuc = 'tám mươi';
            break;
        }
        case 9: {
            docHangChuc = 'chín mươi';
            break;
        }
    }

    switch (hanDonVi) {
        case 1: {
            docHangDonVi = 'một';
            break;
        }
        case 2: {
            docHangDonVi = 'hai';
            break;
        }
        case 3: {
            docHangDonVi = 'ba';
            break;
        }
        case 4: {
            docHangDonVi = 'bốn';
            break;
        }
        case 5: {
            docHangDonVi = 'năm';
            break;
        }
        case 6: {
            docHangDonVi = 'sáu';
            break;
        }
        case 7: {
            docHangDonVi = 'bảy';
            break;
        }
        case 8: {
            docHangDonVi = 'tám';
            break;
        }
        case 9: {
            docHangDonVi = 'chín';
            break;
        }
    }
    ketQua3 = docHangTram + ' ' + docHangChuc + ' ' + docHangDonVi;
    if (hangChuc === 0 & hanDonVi === 0) {
        ketQua3 = docHangTram;
    }
    //Xuất kết quả
    document.getElementById('ketQua3').innerHTML = ketQua3;
}

// Bài tập 4
document.getElementById('tim').onclick = function () {
    // input
    var ten1 = document.getElementById('ten1').value;
    var ten2 = document.getElementById('ten2').value;
    var ten3 = document.getElementById('ten3').value;
    var toaDoX1 = Number(document.getElementById('toaDoX1').value);
    var toaDoX2 = Number(document.getElementById('toaDoX2').value);
    var toaDoX3 = Number(document.getElementById('toaDoX3').value);
    var toaDoY1 = Number(document.getElementById('toaDoY1').value);
    var toaDoY2 = Number(document.getElementById('toaDoY2').value);
    var toaDoY3 = Number(document.getElementById('toaDoY3').value);
    var toaDoXT = Number(document.getElementById('toaDoXT').value);
    var toaDoYT = Number(document.getElementById('toaDoYT').value);
    //Output
    var ketQua4 = '';
    //Tiến trình tính khoảng cách
    var khoangCach1 = Math.sqrt(Math.pow((toaDoXT - toaDoX1),2) + Math.pow((toaDoYT - toaDoY1),2));
    var khoangCach2 = Math.sqrt(Math.pow((toaDoXT - toaDoX2),2) + Math.pow((toaDoYT - toaDoY2),2));
    var khoangCach3 = Math.sqrt(Math.pow((toaDoXT - toaDoX3),2) + Math.pow((toaDoYT - toaDoY3),2));
    // Tiến trình so sánh
    if (khoangCach1 > khoangCach2) {
        if (khoangCach2 > khoangCach3) {
            ketQua4 = "Người xa trường nhất là: " + ten1;
        } else if (khoangCach1 > khoangCach3) {
            ketQua4 = "Người xa trường nhất là: " + ten1;
        } else {
            ketQua4 = "Người xa trường nhất là: " + ten3;
        }
    } else if (khoangCach1 > khoangCach3) {
        ketQua4 = "Người xa trường nhất là: " + ten2;
    } else if (khoangCach2 > khoangCach3) {
        ketQua4 = "Người xa trường nhất là: " + ten2;
    } else {
        ketQua4 = "Người xa trường nhất là: " + ten3;
    }
    // In ra kết quả
    document.getElementById('ketQua4').innerHTML = ketQua4;
}