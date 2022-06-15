// Bài tập 1: Xuất 3 số theo thứ tự tăng dần
document.getElementById('sapXep').onclick = function () {
    //input 3 số number1, 2, 3
    var number1 = Number(document.getElementById('soThu1').value);
    var number2 = Number(document.getElementById('soThu2').value);
    var number3 = Number(document.getElementById('soThu3').value);
    //ouput kết quả
    var ketQua = '';
    //process
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
    // xuất kết quả ra màn hình
    document.getElementById('ketQua').innerHTML = ketQua;
}

// Bài tập 2: Chào hỏi
document.getElementById('xinChao').onclick = function () {
    //input cho người dùng lựa chọn thành viên gia đình
    var aiDo = document.getElementById('thanhVienGiaDinh').value;
    //output lời chào
    var chao = '';
    //process
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
    // Xuất kết quả lời chào ra màn hình
    document.getElementById('chao').innerHTML = chao;
}

// Bài tập 3: Đếm số chắn lẻ
document.getElementById('demChanLe').onclick = function () {
    //input nhập vào 3 số nguyên n1, 2, 3
    var n1 = Number(document.getElementById('soNThu1').value);
    var n2 = Number(document.getElementById('soNThu2').value);
    var n3 = Number(document.getElementById('soNThu3').value);
    var soSoChan = 0;
    var soSoLe = 0;
    // biến đếm
    var count = 0;
    // output số lượng số chẵn và số lẻ
    var ketQuaChanLe = '';
    //process
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
    // in ra kết quả 
    document.getElementById('ketQuaChanLe').innerHTML = ketQuaChanLe;
}

// Bài tập 4: Dự đoán tam giác cân, vuông, đều

document.getElementById('duDoan').onclick = function () {
    // input người dùng nhập vào độ dài 3 cạnh của tam giác canh1, 2, 3
    var canh1 = Number(document.getElementById('canh1').value);
    var canh2 = Number(document.getElementById('canh2').value);
    var canh3 = Number(document.getElementById('canh3').value);
    //output dự đoán kết quả tam giác vuông, cân, đều và thường
    var duDoan = '';
    //process 
    if (canh1 === canh2) {
        if(canh2 === canh3) {
            duDoan = "Đây là tam giác đều";
        } else {
            duDoan = "Đây là tam giác cân";
        }
    } else if (canh2 === canh3 || canh1 === canh3) {
        duDoan = "Đây là tam giác cân";
    } else {
        duDoan = "Đây là tam giác thường";
    }
    if (canh1 * canh1 + canh2 * canh2 === canh3 * canh3 || canh1 * canh1 + canh3 * canh3 === canh2 * canh2 || canh2 * canh2 + canh3 * canh3 === canh1 * canh1) {
        duDoan = "Đây là tam giác vuông";
    }
    // in ra kết quả dự đoán
    document.getElementById('tamGiac').innerHTML = duDoan;
}