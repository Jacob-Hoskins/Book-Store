
function changePage(value){
    //button values
    const home = document.getElementById('homePageButton')
    const profile = document.getElementById('profilePageButton')
    const cart = document.getElementById('shoppingCartPageButton')

    //css view values
    const profileCSS = document.getElementsByClassName('profilePage')
    const cartCSS = document.getElementsByClassName('shoppingCart')
    const mainCSS = document.getElementsByTagName('main')

    if(value === 'home'){
        mainCSS[0].style.display = 'block'
        cartCSS[0].style.display = 'none'
        profileCSS[0].style.display = 'none'

    }else if(value ==='profile'){
        mainCSS[0].style.display = 'none'
        cartCSS[0].style.display = 'none'
        profileCSS[0].style.display = 'block'

    }else if(value === 'cart'){
        mainCSS[0].style.display = 'none'
        cartCSS[0].style.display = 'block'
        profileCSS[0].style.display = 'none'
    }
}