const progress = document.querySelector(".progress");
const dot = document.querySelector(".dot");

const handleProgress = (x, is_position = true) => {
    if (is_position) {
        offset = (window.innerWidth - progress.clientWidth) / 2
        target = (x-offset) / progress.clientWidth * 100
        target = Math.max(Math.min(target, 100), 0)
    }
    else target = x

    setConfigOption('progress', target)
    progress.style.setProperty("--progress", target)

    document.querySelectorAll(".point").forEach(point => {
        if (point.offsetLeft / progress.clientWidth * 100 < target) point.classList.add("active")
        else point.classList.remove("active")
    })
}

let draggeble = false;
const points = [0, 100 / 3, (100 / 3) * 2, 100];
progress.addEventListener("touchstart", e => {
    progress.classList.remove('base')
    handleProgress(e.touches[0].clientX)
}, {passive: true})
progress.addEventListener("touchmove", e => handleProgress(e.touches[0].clientX), {passive: true})
progress.addEventListener("touchend", e => {
    
    progress.classList.add('base')
    let value = parseFloat(progress.style.getPropertyValue("--progress"))
    handleProgress(points.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev), false)
    
}, {passive: true})
progress.addEventListener("mousemove", e => {
    if (draggeble) handleProgress(e.pageX);
}, {passive: true})
progress.addEventListener("mousedown", e => {
    draggeble = true; 
    progress.classList.remove('base')
    handleProgress(e.pageX);
}, {passive: true})
progress.addEventListener("mouseup", e => {
    draggeble = false
    progress.classList.add('base')
    let value = parseFloat(progress.style.getPropertyValue("--progress"))
    handleProgress(points.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev), false)
}, {passive: true})

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