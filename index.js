// Bài tập 1: Xuất 3 số theo thứ tự tăng dần
document.getElementById('sapXep').onclick = function () {
    var number1 = Number(document.getElementById('soThu1').value);
    var number2 = Number(document.getElementById('soThu2').value);
    var number3 = Number(document.getElementById('soThu3').value);
    var ketQua = '';
    if (number1 >= number2) {
        if (number2 >= number3) {
            ketQua = number3 + ' ' + number2 + ' ' + number1;
        } else if (number1 >= number3) {
            ketQua = number2 + ' ' + number3 + ' ' + number1;
        } else {
            ketQua = number2 + ' ' + number1 + ' ' + number3;
        }
    } else if (number1 >= number3) {
        ketQua = number3 + ' ' + number1 + ' ' + number2;
    } else if (number2 >= number3) {
        ketQua = number1 + ' ' + number3 + ' ' + number2;
    } else {
        ketQua = number1 + ' ' + number2 + ' ' + number3;
    }
    document.getElementById('ketQua').innerHTML = ketQua;
}

// Bài tập 2: Chào hỏi
document.getElementById('xinChao').onclick = function () {
    var aiDo = document.getElementById('thanhVienGiaDinh').value;
    var chao = '';
    switch (aiDo) {
        case "B": {
            chao = "Xin chào Bố";
            break;
        }
        case "M": {
            chao = "Xin chào Mẹ";
            break;
        }
        case "A": {
            chao = "Xin chào Anh trai";
            break;
        }
        case "E": {
            chao = "Xin chào Em gái";
            break;
        }

    }
    document.getElementById('chao').innerHTML = chao;
}

// Bài tập 3: Đếm số chắn lẻ
document.getElementById('demChanLe').onclick = function () {
    var n1 = Number(document.getElementById('soNThu1').value);
    var n2 = Number(document.getElementById('soNThu2').value);
    var n3 = Number(document.getElementById('soNThu3').value);
    var soSoChan = 0;
    var soSoLe = 0;
    var count = 0;
    var ketQuaChanLe = '';
    if (n1 % 2 == 0) {
        count++;
    }
    if (n2 % 2 == 0) {
        count++;
    }
    if (n3 % 2 == 0) {
        count++;
    }
    soSoChan = count;
    soSoLe = 3 - count;
    ketQuaChanLe = "Số lượng số chẵn là: " + soSoChan + '; ' + "Số lượng số lẻ là: " + soSoLe;
    document.getElementById('ketQuaChanLe').innerHTML = ketQuaChanLe;
}

// Bài tập 4: Dự đoán tam giác cân, vuông, đều

document.getElementById('duDoan').onclick = function () {
    var canh1 = Number(document.getElementById('canh1').value);
    var canh2 = Number(document.getElementById('canh2').value);
    var canh3 = Number(document.getElementById('canh3').value);
    var duDoan = ''
    if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
        duDoan = "Đây là tam giác cân";
    } else if (canh1 === canh2 & canh1 === canh3) {
        duDoan = "Đây là tam giác đều";
    } else if (canh1 * canh1 + canh2 * canh2 === canh3 * canh3 || canh1 * canh1 + canh3 * canh3 === canh2 * canh2 || canh2 * canh2 + canh3 * canh3 === canh1 * canh1) {
        duDoan = "Đây là tam giác vuông";
    } else {
        duDoan = "Đây là tam giác thường";
    }
    document.getElementById('tamGiac').innerHTML = duDoan;
}