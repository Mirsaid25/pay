// redistation
let contener = document.querySelector(".contener")
let p1 =  document.querySelector(".p1")



if(localStorage.length === 0){

    
    function redistation(plc) {
        plc.innerHTML = ""
    
        let title = document.createElement("h1") 
        let form  = document.createElement("form")
        let email = document.createElement("input")
        let name = document.createElement("input")
        let surName = document.createElement("input")
        let password = document.createElement("input")
        let button = document.createElement("button")
        let h4 = document.createElement("h4")
        
        title.innerHTML = "Регистрация"
        button.innerHTML = "Продолжить"
        h4.innerHTML = "Войти в аккаунт"
        
        email.type = "email"
        email.name = "email"
        email.placeholder = "Почта"
        email.required =
        name.type = "text"
        name.name = "name"
        name.placeholder = "Имя"
        name.required =
        surName.type = "text"
        surName.name = "surName"
        surName.placeholder = "Фамилия"
        surName.required =
        password.type = "password"
        password.name = "password"
        password.placeholder = "Пароль"
        password.required =
        form.name = "regiatration"
        
        plc.append(title, form, h4)
        form.append(email, name, surName, password, button)

        // functions

        h4.onclick = ()=>{
            localStorage.setItem("enter", "ee")
            location.reload()
        }
    }

    redistation(contener)

    let formRegiatration = document.forms.regiatration

    let users1 =  {}

    formRegiatration.onsubmit = (event) => {
        event.preventDefault()
    
        submit(formRegiatration)
    
        localStorage.setItem("users", JSON.stringify(users1))
        contener.style.display = "none"
        p1.style.display = "block"
    }

    function submit(form) {
        let get = {}
        
        let fm = new FormData(form)
        fm.forEach((value, key) => {
        get[key] = value
        })
    
        users1 = get
    }

} else{
    
    function enter(plc) {
        plc.innerHTML = ""
    
        let title = document.createElement("h1") 
        let form  = document.createElement("form")
        let email = document.createElement("input")
        let password = document.createElement("input")
        let button = document.createElement("button")
        let h4 = document.createElement("h4")
        
        title.innerHTML = "Войти в аккаунт"
        button.innerHTML = "Продолжить"
        h4.innerHTML = "Регистрация"
        
        email.type = "email"
        password.type = "password"
    
        email.placeholder = "Почта"
        password.placeholder = "Пароль"
    
        form.name = "enter"
        email.name = "email"
        password.name = "password"
    
        email.required =
        password.required =
        
        plc.append(title, form, h4)
        form.append(email,  password, button)

        // functions
        h4.onclick = ()=>{
            localStorage.removeItem("enter", "ee")
            localStorage.removeItem("users")
            location.reload()
        }
    }

    enter(contener)

    let formEnter = document.forms.enter

    let users2 =  {}

    formEnter.onsubmit = (e) => {
        e.preventDefault()
    
        submit(formEnter)
        if(users2.email === JSON.parse(localStorage.getItem("users")).email &&
        users2.password === JSON.parse(localStorage.getItem("users")).password){
            contener.style.display = "none"
            p1.style.display = "block"
        }
    }

    function submit(form) {
        let get = {}
        
        let fm = new FormData(form)
        fm.forEach((value, key) => {
        get[key] = value
        })
    
        users2 = get
    }
}

let email_adres = document.querySelector(".email_adres")
let name = document.querySelector(".name")
let email_adres_bule = document.querySelector(".email_adres_bule")

email_adres.innerHTML = JSON.parse(localStorage.getItem("users")).email
email_adres_bule.innerHTML = JSON.parse(localStorage.getItem("users")).email
name.innerHTML = JSON.parse(localStorage.getItem("users")).name


function cards(arr,place) {
    place.innerHTML = ""
    let block1 = document.createElement("div")
    let h1 = document.createElement("h1")
    let span = document.createElement("span")
    let block2 = document.createElement("div")
    let cards = document.createElement("div")
    for(let item of arr){
        let card = document.createElement("div")
        let card_name = document.createElement("span")
        let card_price = document.createElement("span")
        let card_valute = document.createElement("span")

        card.classList.add("card")
        card_name.classList.add("card_name")
        card_price.classList.add("card_price")
        card_valute.classList.add("card_valute")

        card_name.innerHTML = "Visa"
        card_price.innerHTML = "10000"
        card_valute.innerHTML = "RUB"

        cards.append(card)
        card.append(card_name , card_price ,card_valute)
    }
    let btn_cards = document.createElement("button")

    block1.classList.add("block1")
    block2.classList.add("block2")
    cards.classList.add("cards")
    btn_cards.classList.add("btn_cards")
    span.classList.add("email_adres_bule")

    h1.innerHTML = "Мои кошельки"
    span.innerHTML = JSON.parse(localStorage.getItem("users")).email
    btn_cards.innerHTML = "Добавить"

    place.append(block1, block2, btn_cards)
    block1.append(h1 ,span)
    block2.append(cards)
}


function tranzit(arr, place) {
    place.innerHTML = ""
    let block1 = document.createElement("div")
    let h1 = document.createElement("h1")
    let span = document.createElement("span")
    let block3 = document.createElement("div")
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let tr_of_thead = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let tbody = document.createElement("tbody")
    for(let item of arr){
        let tr_of_tbody = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
    }
}