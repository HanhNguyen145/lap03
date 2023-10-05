// Lấy giá trị của một input : bỏ khoảng trắng 2 đầu
function getValue(id) {
    return document.getElementById(id).value.trim();
}
// Hiển thị lỗi
function showError(key, mess) {
    document.getElementById(key + '_error').innerHTML = mess;
}
// kiểm tra lỗi
function validate(obj) {
    var flag = true;
    // username
    var username = getValue('Name');
    if (username == '') {
        flag = false;
        showError('Name', 'Vui lòng kiểm tra lại tên');
    }
    // 2. Address
    var Address = getValue('Address');
    if (Address == '') {
        flag = false;
        showError('Address', 'Vui lòng kiểm tra lại địa chỉ nhận hàng');
    }
    //4. City
    var City = getValue('City');
    if (City == '') {
        flag = false;
        showError('City', 'Vui lòng kiểm tra lại tỉnh thành phố');
    }
    //5.District
    var District = getValue('District');
    if (District == '') {
        flag = false;
        showError('District', 'Vui lòng kiểm tra lại quận huyện');
    }
    //6.Village
    var Village = getValue('Village');
    if (Village == '') {
        flag = false;
        showError('Village', 'Vui lòng kiểm tra lại phường xã');
    }
    return flag;
}

function CheckNumber(obj) {
    var flag = true;
    var Number = getValue('Number');
    if (Number.length < 10) {
        flag = false;
        showError('Number', 'Vui lòng kiểm tra nhập lại số điện thoại');
    }
    return flag;
}

function Result(obj) {
    if (validate(obj) && CheckNumber(obj)) {
        alert('Lưu thông tin thành công');
    }
    else {
        alert('Thông tin nhập không hợp lệ');
    }
}

function Anounce(obj) {
    var id = '';
    if (id = getValue('vanphong')) {
        alert('Bạn chọn giao hàng tại văn phòng');
    }
    else if (id = getValue('nharieng')) {
        alert('Bạn chọn giao hàng tại nhà riêng');
    }
}