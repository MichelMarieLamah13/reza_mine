import { DATA, NOTE } from "./data.js";


function add_note(){
    const note = document.querySelector("#section-0 .note")
    note.innerHTML = ""
    NOTE.forEach(content =>{
        const li = document.createElement("li")
        li.innerHTML = content
        note.appendChild(li)
    })

}

function add_toc(parent, id, title){
    const li = document.createElement("li")
    li.innerHTML = `<li><a href='#section-${id}'>${title}</a></li>`
    parent.appendChild(li)
}

function add_section(data){
    const section = document.createElement("div")
    section.id = "section-"+data.id
    section.className = "section"

    const previous = document.getElementById("section-"+(data.id - 1))

    const h2 = document.createElement("h2")
    h2.innerHTML = data.title
    section.appendChild(h2)

    data.content.forEach(d => {
        if (!d.hide){
            const h3 = document.createElement("h3")
            h3.innerHTML = d.title
            section.appendChild(h3)
    
            const divs = document.createElement("div")
            divs.className = "playlist"
            d.content.forEach(c => {
                if (!c.hide){
                    const div = document.createElement("div")
                    div.className = "labeled-audio labeled-audio2"
                    div.innerHTML = `
                        <p class='text text2'> ${c.title}</p>
                        <audio preload='metadata' controls><source class='select-real' src='${c.path}' type='audio/mpeg'></audio>
                    `
                    divs.appendChild(div)
                }
            })
            section.appendChild(divs)
        }
    })


    const hr = document.createElement("hr")
   
    previous.after(hr)
    hr.after(section)
}

function create_content(){
    add_note()
    const toc = document.querySelector("#section-0 .toc")
    toc.innerHTML = ""

    const hrs = document.querySelectorAll("hr")
    hrs.forEach(hr =>{
        hr.remove()
    })

    const divs = document.querySelectorAll(".labeled-audio")
    divs.forEach(div=>{
        div.remove()
    })

    DATA.forEach(d => {
        const existing = document.getElementById("section-"+d.id)
        if (existing){
            existing.remove()
        }
        if (!d.hide){
            add_toc(toc, d.id, d.title)
            add_section(d)
        }
    })
    
}

document.addEventListener("DOMContentLoaded", function () {
    create_content()
});

