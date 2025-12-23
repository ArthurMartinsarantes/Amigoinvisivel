/* 🎁 Amigo Secreto */
const amigos = {
    "Camila": "Heitor",
    "Zé Luiz": "Ana Maria",
    "Arthur": "José Luiz",
    "Heitor": "Ana Luíza",
    "Luizão": "Maria Clara",
    "Ana Maria": "Olímpio",
    "Olímpio": "Josiane",
    "Iraídes": "Arthur",
    "Josiane": "Cláudio",
    "Cláudio": "Camila",
    "Ana Luíza": "Luizão",
    "Maria Clara": "Iraídes"
};

const container = document.getElementById("giftsContainer");
const opened = new Set();

function createGifts() {
    container.innerHTML = "";
    opened.clear();

    Object.keys(amigos).forEach(nome => {
        const gift = document.createElement("div");
        gift.className = "gift";
        gift.innerHTML = `
            <strong>${nome}</strong>
            <div class="gift-box">
                <div class="lid"></div>
                <div class="box"></div>
            </div>
        `;

        gift.onclick = () => {
            if (opened.has(nome)) return;
            opened.add(nome);
            gift.classList.add("opened");

            setTimeout(() => {
                document.getElementById("modalTitle").innerText = `🎅 ${nome}`;
                document.getElementById("modalResult").innerText =
                    `Seu amigo invisível é 🎁 ${amigos[nome]}`;
                document.getElementById("modal").style.display = "flex";
            }, 600);
        };

        container.appendChild(gift);
    });
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function resetGame() {
    createGifts();
}

createGifts();

/* ❄️ Neve */
const canvas = document.getElementById("neve");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
window.onresize = resize;
resize();

let flocos = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    d: Math.random() + 1
}));

function neve() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    flocos.forEach(f => {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        f.y += f.d;
        if (f.y > canvas.height) {
            f.y = 0;
            f.x = Math.random() * canvas.width;
        }
    });
    ctx.fill();
}

setInterval(neve, 30);
