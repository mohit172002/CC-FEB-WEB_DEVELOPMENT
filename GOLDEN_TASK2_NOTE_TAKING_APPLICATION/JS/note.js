const addBtn = document.querySelector("#addNote")
const main = document.querySelector("#main")

addBtn.addEventListener('click',function(){
   addNote()
})


// addNote() function for create and add note

const addNote =(text = "") =>{
   const note = document.createElement("div")
    note.classList.add('note')
    note.innerHTML =`
        <div class="tool">
        <i class="del btn fa-solid fa-trash"></i>
        <i class="save btn fa-solid fa-floppy-disk"></i>
        </div>
        <textarea>${text}</textarea>
    `;

    // delete note

    note.querySelector(".del").addEventListener('click',function(){
        note.remove()
        saveNote()
    })

    // save note 

    note.querySelector(".save").addEventListener('click',function(){
        saveNote()
    })

    note.querySelector("textarea").addEventListener("focusout", function(){
        saveNote() 
    })
    
    main.appendChild(note)
    saveNote()
}



const saveNote = () =>{
    const notes = document.querySelectorAll(".note textarea")
    const data = []
    notes.forEach((note)=>{
            data.push(note.value)
    })

    if(data.length === 0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data ))
    }
    
}



(
    function(){
        const dbnotes =JSON.parse(localStorage.getItem("notes"));

        if(dbnotes === null){
            addNote()
        }
        else{
            dbnotes.forEach((dbnote)=>{
                addNote(dbnote)
            })
        }
    }
)()



// responsive

const sWidth = screen.availWidth

if(sWidth <= 460){
   addBtn.innerHTML=`<i class="plus fa-solid fa-plus"></i>`;
}