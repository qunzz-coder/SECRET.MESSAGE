/*document.querySelector(".btn").addEventListener("mouseenter", function () {
    if (this.dataset.heartCreated) return;

    for (let i = 0; i < 3 + Math.floor(Math.random() * 2); i++) { // 3-4 trái tim mỗi bên
        createHeart(this, -1, i); // Bên trái
        createHeart(this, 1, i);  // Bên phải
    }

    this.dataset.heartCreated = "true";
});

document.querySelector(".btn").addEventListener("mouseleave", function () {
    setTimeout(() => {
        document.querySelectorAll(".heart").forEach(heart => heart.remove());
        delete this.dataset.heartCreated;
    }, 200);
});

function createHeart(button, direction, index) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    const btnRect = button.getBoundingClientRect();
    const size = Math.random() * 10 + 20; // 20px - 30px

    heart.style.fontSize = `${size}px`;
    heart.style.transform = `rotate(${direction * (Math.random() * 20 + 10)}deg) scale(0.5)`; // Nghiêng & scale nhỏ ban đầu

    // Vị trí gần nút hơn
    const spacing = (size + 10) * index; // Cách xa hơn xíu
    heart.style.left = `${
        direction === -1
            ? btnRect.left - size - spacing // Bên trái
            : btnRect.right + spacing // Bên phải
    }px`;

    heart.style.top = `${btnRect.top + btnRect.height / 2 - size / 3}px`; // Điều chỉnh gần nút hơn
    heart.style.position = "fixed";
    heart.style.opacity = "0"; // Ẩn ban đầu

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.opacity = "1";
        heart.style.transform = `rotate(${direction * (Math.random() * 20 + 10)}deg) scale(1)`;
    }, 50); // Hiệu ứng xuất hiện mềm mại
}*/

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("loveBtn");
    let heartsCreated = false; // Kiểm soát chỉ tạo tim 1 lần

    btn.addEventListener("mouseenter", function () {
        if (heartsCreated) return;
        heartsCreated = true;

        const container = document.createElement("div");
        container.classList.add("heart-container");
        btn.appendChild(container);

        const numHearts = 2; // Số lượng trái tim mỗi bên
        const heartSymbols = [ 
            '<img src="../html/images_html/trai-tim3-xoanen.jpg">'];

        for (let i = 0; i < numHearts * 2; i++) {
            let heart = document.createElement("span");
            heart.classList.add("heart");
            heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

            let size = Math.random() * 15*0 + 10; // Kích thước từ 25px đến 40px
            heart.style.fontSize = size + "px";

            let offsetX = (i < numHearts ? -1 : 1) * (Math.random() * 50 + 40) + (i < numHearts ? 5 : 15); // Cách nút từ 30px - 70px
            let offsetY = Math.random() * (-10) -28; // Chỉnh lệch cao thấp một chút
            heart.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${i < numHearts ? "-15deg" : "15deg"})`;

            heart.style.opacity = "1";
            container.appendChild(heart);
        }
    });

    btn.addEventListener("mouseleave", function () {
        heartsCreated = false; // Reset lại để có thể tạo lại
        const container = btn.querySelector(".heart-container");
        if (container) {
            container.remove();
        }
    });
});