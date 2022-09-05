let login = document.querySelector('.login_Btn')
let modal = document.querySelector('.login_modal')
let save = document.querySelector('.save_btn')
let user_name = document.querySelector('.userr_name')
login.addEventListener('click', function () {
    modal.classList.add('active')
})
save.addEventListener('click', function () {
    modal.classList.remove('active')
})

