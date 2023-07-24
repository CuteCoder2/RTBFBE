let sidebar = document.querySelector('#sidebar')
let toggleCloseBtn = document.querySelectorAll('.toggle-close')


toggleCloseBtn.forEach((element)=> {
    element.addEventListener('click' , (e)=>{
        e.preventDefault()
        if(!sidebar.classList.contains("openSideBar")){
            sidebar.classList.add("openSideBar")
        }else{   
            sidebar.classList.remove("openSideBar")
        }
    })
})