const addNote = document.querySelector(".addNote");
const wrapper  = document.querySelector(".wrapper");
const selectFont = document.querySelectorAll("select");
const selectFontSize = document.querySelector(".font_size");
const selectFontFamily = document.querySelector(".font_family");
const justify_right = document.querySelector("#right");
const justify_left = document.querySelector("#left");
const justify_center = document.querySelector("#center");
const marginSelect = document.querySelector(".margin_select");
const copyText = document.querySelector(".copy_text");
const speechBtn = document.querySelector(".textToSpeech");
const task_btns = document.querySelectorAll(".taskbar ul li");
const taskbar = document.querySelector(".taskbar");
taskbar.width = window.innerWidth;

var wordCount;

const newNote = () => {
    const  noteArea = document.createElement("div");
    noteArea.spellcheck = true;
    noteArea.contentEditable = true;
    noteArea.classList.add("active");
    

    wrapper.appendChild(noteArea);
    marginSelect.addEventListener("input", (e) => {
        const textSpace  = document.querySelector(".active");
            switch (e.target.value) {
                case "normal":
                    textSpace.style.padding =  "2.54cm 2.54cm"
                    break;
                case "narrow":
                    textSpace.style.padding =  "1.27cm 1.27cm"
                break;
                case "moderate":
                    textSpace.style.padding =  "2.54cm 1.91cm"
                break;
                case "wide":
                    textSpace.style.padding =  "2.54cm 5.08cm"
                break;
            }
            })
}

selectFontSize.addEventListener("input", (e) => {
    const textSpace  = document.querySelector(".active");
    textSpace.style.fontSize = e.target.value + "px";
})

selectFontFamily.addEventListener("input", (e) => {
    const textSpace  = document.querySelector(".active");
    textSpace.style.fontFamily = e.target.value;
})


    
justify_left.addEventListener('click', () => {
    const textSpace  = document.querySelector(".active");
    textSpace.style.textAlign = "left";
})

justify_right.addEventListener('click', () => {
    const textSpace  = document.querySelector(".active");
    textSpace.style.textAlign = "right";
})

justify_center.addEventListener('click', () => {
    const textSpace  = document.querySelector(".active");
    textSpace.style.textAlign = "center";
})

addNote.addEventListener("click", newNote);

copyText.addEventListener("click", () => {
    navigator.clipboard.writeText(window.getSelection().toString());
})

speechBtn.addEventListener("click", () => {
    const textSpace  = document.querySelector(".active");
    
    if(textSpace.textContent != null){
        var utterance = new SpeechSynthesisUtterance(textSpace.textContent);
        speechSynthesis.speak(utterance);
    }
})

task_btns.forEach(x => {
    x.addEventListener("click", (e) => {
        taskbar.classList.toggle("activeWidget");
        var indicator = document.querySelector(".taskbar_liner");
        x.appendChild(indicator)
    })
})

document.querySelector("#bold").addEventListener("click", () => {
    document.execCommand("bold");
})

document.querySelector("#underline").addEventListener("click", () => {
    document.execCommand("underline");
})

document.querySelector("#italize").addEventListener("click", () => {
    document.execCommand("italic");
})

document.querySelector("#redo").addEventListener("click", () => {
    document.execCommand("redo")
})

document.querySelector("#undo").addEventListener("click", () => {
    document.execCommand("undo")
})

document.addEventListener("keydown", (e) => {
    if(e.key == "Tab"){
        document.execCommand("insertParagraph");
    }
    document.querySelectorAll(".active").forEach(x => {
        x.addEventListener("input", () => {
            wordCount = document.querySelector(".active").textContent != "" ? 
            document.querySelector(".active").textContent.split(' ').length : 
            0;
            document.querySelector(".wordCount h5").textContent = wordCount;
        })
    })
})