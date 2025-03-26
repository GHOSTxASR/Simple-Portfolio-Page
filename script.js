function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.innerHTML = "*"; // You can replace this with an image
    snowflake.classList.add("snowflake");
    document.body.appendChild(snowflake);

    let size = Math.random() * 20 + 10;
    let position = Math.random() * window.innerWidth;
    let duration = Math.random() * 3 + 2;

    snowflake.style.left = `${position}px`;
    snowflake.style.fontSize = `${size}px`;
    snowflake.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

setInterval(createSnowflake, 200);
