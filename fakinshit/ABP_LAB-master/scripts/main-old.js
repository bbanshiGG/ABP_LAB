let listElements = ducument.querySelectorAll('.list__button--click');

listElements.forEach(listElements =>{
    listElements.addEventListener('click',()=>{
        
        listElements.classList.toggle('arrow');
    })
});