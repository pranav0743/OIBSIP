function addtolist() {
    var Title=document.getElementById('Title').value
    var Description=document.getElementById('Description').value
    var tododiv=document.getElementById('mytodo')

    var newtodoitem=document.createElement('div')
    var todoname=document.createElement('li')
    todoname.innerHTML= Title 
    var deletebtn=document.createElement('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')

    newtodoitem.append(Title," ",Description)
    newtodoitem.append(deletebtn)



    tododiv.appendChild(newtodoitem)

}

var tododiv =document.getElementById('mytodo')
tododiv.addEventListener('click',deleteitem)

function deleteitem(e) {
    const element=e.target
    if(element.classList[0]=='far') {
        element.parentElement.remove()
    }
    
    
}