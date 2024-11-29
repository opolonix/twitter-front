document.querySelectorAll(".radio").forEach(el => {
    el.addEventListener("click", e => {
        let index = el.attributes.index.value;
        document.body.style.setProperty('--paramsIndex', el.attributes.index.value);
        
        if (index == '0') {
            document.querySelector(".positions").classList.remove('hidden')
            document.querySelector(".complited").classList.add('hidden')
        }
        else {
            document.querySelector(".complited").classList.remove('hidden')
            document.querySelector(".positions").classList.add('hidden')
        }
    })
})