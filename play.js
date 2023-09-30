score = 0;
cross = true;
document.onkeydown = function(e) {
    key = e.key;
    if (key == "Enter") {

        boy = document.querySelector(".boy");
        boy.classList.add("animateBoy");
        setTimeout(() => {
                boy.classList.remove("animateBoy");
            }, 700)
            //boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue("left"));
            //boy.style.left = boyX + 120 + "px";

    }
    if (key == "ArrowRight") {

        boy = document.querySelector(".boy");
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue("left"));
        boy.style.left = boyX + 100 + "px";
    }
    if (key == "ArrowLeft") {

        boy = document.querySelector(".boy");
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue("left"));
        boy.style.left = (boyX - 50) + "px";
    }
}
setInterval(() => {
    boy = document.querySelector(".boy");
    gameOver = document.querySelector(".gameOver");
    fire = document.querySelector(".fire");
    bx = parseInt(window.getComputedStyle(boy, null).getPropertyValue("left"));
    by = parseInt(window.getComputedStyle(boy, null).getPropertyValue("top"));
    //by=window.getComputedStyle(boy,null).getPropertyValue("top");
    fx = parseInt(window.getComputedStyle(fire, null).getPropertyValue("left"));
    fy = parseInt(window.getComputedStyle(fire, null).getPropertyValue("top"));
    offsetX = Math.abs(bx - fx);
    offsetY = Math.abs(by - fy);
    console.log(offsetX, offsetY);
    if (offsetX < 123 && offsetY < 112) {
        gameOver.style.visibility = "visible";
        fire.classList.remove("fireAni");

    } else if (offsetX < 102 && cross) {
        score += 1;
        updatedScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(fire, null).getPropertyValue("animation-duration"));
            newDur = aniDur - 0.1;
            fire.style.animationDuration = newDur + "s";
        }, 500);
    }

}, 100)

function updatedScore(score) {
    scoreCount.innerHTML = "Your Score:" + score;
}