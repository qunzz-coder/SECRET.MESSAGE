function showContent(contentId) {
    // Ẩn tất cả nội dung
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
  
    // Hiện nội dung được chọn
    var content = document.getElementById(contentId);
    if (content) {
      content.style.display = 'block';
    }

    // Xóa nút
    var buttonContainer = document.getElementById('button-container');
  if (buttonContainer) {
    buttonContainer.style.display = 'none';
  }
}
/*document.getElementById("btnDatMk").onclick = function() {
    document.getElementById("content1").style.display = "none"; // Ẩn content1
    document.getElementById("content3").style.display = "block";
};
*/

var ket_qua = function () {
  var mk = document.getElementById("mk_dat").value;
  // Kiểm tra xem người dùng chọn loại nhập nào
  var selectedMode = document.querySelector('input[name="mode"]:checked').value;
    var name = document.getElementById("ten").value.trim();
    var presetText = document.getElementById("presetMessages").value;
    var customText = document.getElementById("customMessage").value;
    var message = "";

    // Xử lý lấy lời chúc đúng cách
    if (selectedMode === "preset") {
        message = presetText;
    } else if (selectedMode === "custom") {
        message = customText;
    } else { // "both"
        message = `${presetText}<br>${customText}`;
    }

    // Nếu có nhập tên, thêm tên vào lời chúc
    if (name) {
        message = `${name} ơi!<br>${message}`;
    }

    // Kiểm tra nếu chưa nhập mật khẩu hoặc chưa nhập lời chúc
    if (!mk || !message.trim()) {
        alert("Vui lòng nhập đầy đủ mật khẩu và lời chúc!");
        return;
    }

  var userData = {
      password: mk,
      message: message // Lưu lời chúc vào localStorage
  };

  localStorage.setItem("userInfo", JSON.stringify(userData));
  console.log("Đã lưu mật khẩu:", userData.password);
  console.log("Đã lưu lời chúc:", userData.message);
};

var kiem_tra = function () {
  var mk_nhap = document.getElementById("mk_nhap").value;
  console.log("Mật khẩu nhập kiểm tra:", mk_nhap);
  var userData = JSON.parse(localStorage.getItem("userInfo"));
  console.log("Mật khẩu đã lưu:", userData ? userData.password : "Không có dữ liệu");

  if (userData && mk_nhap === userData.password) {
      alert("Chúc mừng đã nhập đúng mật khẩu ^~^");
        // Hiển thị lời chúc đã lưu
        var outputDiv = document.getElementById("outputDiv");
        if (outputDiv) {
            outputDiv.innerHTML = "💖 Lời chúc của bạn: <br>" + (userData.message || "Chưa có lời chúc nào được lưu trước đó.");
        }

  } else {
      alert("Mật khẩu không đúng, vui lòng thử lại @_@");
  }
};

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.querySelector(".heart-container").appendChild(heart);
    
    // Vị trí ngẫu nhiên
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(createHeart, 500);

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

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitButton").addEventListener("click", getMessage);
});
