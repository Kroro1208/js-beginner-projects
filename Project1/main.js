const bodyEl = document.querySelector('body');
bodyEl.addEventListener('mousemove', (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement('span');
    spanEl.style.left = xPos + "px"; // span要素の左端をマウスのX座標に設定
    spanEl.style.top = yPos + "px"; // span要素の上端をマウスのY座標に設定
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";


    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);

});