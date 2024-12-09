const progress = document.querySelector(".progress");
const dot = document.querySelector(".dot");

const handleProgress = (x) => {
    offset = (window.innerWidth - progress.clientWidth) / 2
    target = (x-offset) / progress.clientWidth * 100
    target = Math.max(Math.min(target, 100), 0)
    progress.style.setProperty("--progress", target)

    document.querySelectorAll(".point").forEach(point => {
        if (point.offsetLeft / progress.clientWidth * 100 < target) point.classList.add("active")
        else point.classList.remove("active")
    })
}

let draggeble = false;

progress.addEventListener("touchstart", e => handleProgress(e.touches[0].clientX))
progress.addEventListener("touchmove", e => handleProgress(e.touches[0].clientX))
progress.addEventListener("mousemove", e => {
    if (draggeble) handleProgress(e.pageX);
})
progress.addEventListener("mousedown", e => {
    draggeble = true;
    handleProgress(e.pageX);
})
progress.addEventListener("mouseup", e => draggeble = false)

document.querySelectorAll(".selection").forEach(selects => {
    let buttons = selects.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", e => {
            e.preventDefault()
            buttons.forEach(b => b.classList.remove("active"))
            button.classList.add("active")
        })
    })
})

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
})