const radioButtons = document.querySelectorAll('input[name="mode"]');
const presetMessages = document.getElementById('presetMessages');
const customMessage = document.getElementById('customMessage');
const nameInput = document.getElementById('ten'); // Lấy ô nhập tên
const output = document.getElementById("output"); // Ô hiển thị lời chúc

// Xử lý khi chọn radio button
radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === "preset") { 
            nameInput.style.display = "inline-block"; // Hiện ô nhập tên
            presetMessages.style.display = "inline-block"; // Hiện danh sách có sẵn
            customMessage.style.display = "none"; // Ẩn ô nhập tùy chỉnh
        } else if (this.value === "custom") {
            nameInput.style.display = "none"; // Ẩn ô nhập tên
            presetMessages.style.display = "none"; // Ẩn danh sách có sẵn
            customMessage.style.display = "inline-block"; // Hiện ô nhập tùy chỉnh
        } else { 
            nameInput.style.display = "inline-block"; // Cần nhập tên
            presetMessages.style.display = "inline-block"; // Hiện danh sách có sẵn
            customMessage.style.display = "inline-block"; // Hiện ô nhập tùy chỉnh
        }
    });
});

function getMessage() {
    let selectedMode = document.querySelector('input[name="mode"]:checked').value;
    let name = nameInput.value.trim(); // Lấy tên người dùng (nếu có)
    let presetText = presetMessages.value; // Lấy nội dung mẫu có sẵn
    let customText = customMessage.value; // Lấy nội dung tùy chỉnh
    let message = "";

    if (selectedMode === "preset") {
        message = presetText;
    } else if (selectedMode === "custom") {
        message = customText;
    } else { // Trường hợp "both" (Kết hợp cả hai)
        message = `${presetText}<br>${customText}`;
    }

    // Nếu có tên, thêm tên vào lời chúc với xuống dòng sau "tên ơi"
    if (name) {
        if (selectedMode === "both") {
            message = `${name} ơi!<br><br>${message}`;
        } else {
            message = `${name} ơi!<br>${message}`;
        }
    }

    // Hiển thị lời chúc (dùng innerHTML để hỗ trợ xuống dòng)
    output.innerHTML = "Lời chúc của bạn:<br>" + message;
}