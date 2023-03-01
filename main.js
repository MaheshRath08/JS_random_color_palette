let containerEl = document.querySelector(".container"); 
let cardNums = 32;
let refreshBtn = document.getElementById("refresh");

makeTheCards()
refreshBtn.addEventListener("click", makeTheCards)


function makeTheCards(){
    containerEl.innerHTML = ""
    for(let i = 0; i<cardNums;i++){

        let hexCode = Math.floor(Math.random() * 0xffffff).toString(16);
        console.log(hexCode)
        let color = document.createElement("li")
        color.classList.add("color")
        containerEl.appendChild(color)
        color.innerHTML = `<div class="color-box" style="background-color:#${hexCode};"></div>
                            <div class="hex">#${hexCode}</div>`
        color.addEventListener("click", ()=>{ copiedEffect(hexCode, color) })
    }
}

function copiedEffect(hex, color){
    navigator.clipboard.writeText("#" + hex)
    let hexEl = color.querySelector(".hex")
    hexEl.innerHTML = "COPIED"
    setTimeout(()=>{hexEl.innerHTML = `#${hex}`}, 1000)
}