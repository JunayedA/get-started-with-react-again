// localStorage.setItem('junayed', 34353)

makeLocalStorage = () =>{
    const idInput = document.getElementById('input-id')
    const id = idInput.value;
    const valueInput = document.getElementById('input-value')
    const value = valueInput.value;

    // store in local storage
    if(id && value){
     localStorage.setItem(value , id);
     idInput.value='';
     valueInput.value=''
    }
}