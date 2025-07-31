import { DATA, NOTE } from "./data.js";


function add_note() {
    const note = document.querySelector("#section-0 .note")
    note.innerHTML = ""
    NOTE.forEach(content => {
        const li = document.createElement("li")
        li.innerHTML = content
        note.appendChild(li)
    })

}

function add_toc(parent, id, title) {
    const li = document.createElement("li")
    li.innerHTML = `<li><a href='#section-${id}'>${title}</a></li>`
    parent.appendChild(li)
}

function add_section(data) {
    const section = document.createElement("div")
    section.id = "section-" + data.id
    section.className = "section"

    const previous = document.getElementById("section-" + (data.id - 1))

    const h2 = document.createElement("h2")
    h2.innerHTML = data.title
    section.appendChild(h2)
    
    if (data.description){
        const DESC  = document.createElement("ul");
        data.description.forEach(content => {
            const li = document.createElement("li")
            li.innerHTML = content
            DESC.appendChild(li)
        })
        section.appendChild(DESC)
    }
    

    data.content.forEach(d => {
        if (!d.hide) {
            const h3 = document.createElement("h3")
            h3.innerHTML = d.title
            section.appendChild(h3)

            const divs = document.createElement("div")
            divs.className = "playlist"
            d.content.forEach(c => {
                if (!c.hide) {
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

function clear_sections() {
    const targetSection = document.getElementById("section-0");
    
    if (targetSection) {
        let current = targetSection.nextElementSibling;

        while (current) {
            const next = current.nextElementSibling;

            if (current.id && current.id.toLowerCase().includes("section")) {
                current.remove()
            }

            current = next;
        }
    }
}
function create_content() {
    add_note()
    const toc = document.querySelector("#section-0 .toc")
    toc.innerHTML = ""

    const hrs = document.querySelectorAll("hr")
    hrs.forEach(hr => {
        hr.remove()
    })

    const divs = document.querySelectorAll(".labeled-audio")
    divs.forEach(div => {
        div.remove()
    })

    clear_sections()

    DATA.forEach((d, pos) => {
        d.id = pos+1
        if (!d.hide) {
            add_toc(toc, d.id, d.title)
            add_section(d)
        }
    })

}

document.addEventListener("DOMContentLoaded", function () {
    create_content()
});

