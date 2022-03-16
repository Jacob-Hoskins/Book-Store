
function changePage(value, bookNumber){
    //button values
    const home = document.getElementById('homePageButton')
    const profile = document.getElementById('profilePageButton')
    const cart = document.getElementById('shoppingCartPageButton')
    const product = document.getElementById('bookInfo')

    //css view values
    const profileCSS = document.getElementsByClassName('profilePage')
    const cartCSS = document.getElementsByClassName('shoppingCart')
    const mainCSS = document.getElementsByTagName('main')
    const productCSS = document.getElementsByClassName('bookInfo')

    console.log('clicked')

    if(value === 'home'){
        mainCSS[0].style.display = 'block'
        cartCSS[0].style.display = 'none'
        profileCSS[0].style.display = 'none'
        productCSS[0].style.display = 'none'


    }else if(value ==='profile'){
        mainCSS[0].style.display = 'none'
        cartCSS[0].style.display = 'none'
        profileCSS[0].style.display = 'block'
        productCSS[0].style.display = 'none'

    }else if(value === 'cart'){
        mainCSS[0].style.display = 'none'
        cartCSS[0].style.display = 'block'
        profileCSS[0].style.display = 'none'
        productCSS[0].style.display = 'none'

    }else if(value === 'product'){
        mainCSS[0].style.display = 'none'
        cartCSS[0].style.display = 'none'
        profileCSS[0].style.display = 'none'
        productCSS[0].style.display = 'block'

        //element clicked info
        // const book = document.getElementById('book1')
        // console.log(book.querySelector('h4'))
        
        updateBookPage(bookNumber)

    }
}

//takes value of clicked element, will grab the documents info to fill page info
function updateBookPage(value){
    let bookInfo = 'book' + value
    let bookElement = document.getElementById(bookInfo)
    let bookTitle = document.getElementById('title')
    let bookPrice = document.getElementById('price')
    let bookImg = document.getElementById('image')
    
    
    if(value === 1){
        let pageTitle = bookElement.querySelector('h4')
        let pagePrice = bookElement.querySelector('p')
        let pageImg = bookElement.querySelector('img')
        let sourceImg = pageImg.getAttribute('src')
    
        bookTitle.innerText = pageTitle.textContent
        bookPrice.innerText = '$' + pagePrice.textContent
        bookImg.src = sourceImg
        
    }else if(value === 2){
        let pageTitle = bookElement.querySelector('h4')
        let pagePrice = bookElement.querySelector('p')
        let pageImg = bookElement.querySelector('img')
        let sourceImg = pageImg.getAttribute('src')

        bookTitle.innerText = pageTitle.textContent
        bookPrice.innerText = '$' + pagePrice.textContent
        bookImg.src = sourceImg
    }
    else if(value === 3){
        let pageTitle = bookElement.querySelector('h4')
        let pagePrice = bookElement.querySelector('p')
        let pageImg = bookElement.querySelector('img')
        let sourceImg = pageImg.getAttribute('src')

        bookTitle.innerText = pageTitle.textContent
        bookPrice.innerText = '$' + pagePrice.textContent
        bookImg.src = sourceImg

    }else if(value === 4){
        let pageTitle = bookElement.querySelector('h4')
        let pagePrice = bookElement.querySelector('p')
        let pageImg = bookElement.querySelector('img')
        let sourceImg = pageImg.getAttribute('src')

        bookTitle.innerText = pageTitle.textContent
        bookPrice.innerText = '$' + pagePrice.textContent
        bookImg.src = sourceImg

    }else if(value === 5){
        let pageTitle = bookElement.querySelector('h4')
        let pagePrice = bookElement.querySelector('p')
        let pageImg = bookElement.querySelector('img')
        let sourceImg = pageImg.getAttribute('src')

        bookTitle.innerText = pageTitle.textContent
        bookPrice.innerText = '$' + pagePrice.textContent
        bookImg.src = sourceImg

    }else if(value === 6){
        let pageTitle = bookElement.querySelector('h4')
        let pagePrice = bookElement.querySelector('p')
        let pageImg = bookElement.querySelector('img')
        let sourceImg = pageImg.getAttribute('src')

        bookTitle.innerText = pageTitle.textContent
        bookPrice.innerText = '$' + pagePrice.textContent
        bookImg.src = sourceImg

    }else if(value === 7){
        let pageTitle = bookElement.querySelector('h4')
        let pagePrice = bookElement.querySelector('p')
        let pageImg = bookElement.querySelector('img')
        let sourceImg = pageImg.getAttribute('src')

        bookTitle.innerText = pageTitle.textContent
        bookPrice.innerText = '$' + pagePrice.textContent
        bookImg.src = sourceImg

    }else if(value === 8){
        let pageTitle = bookElement.querySelector('h4')
        let pagePrice = bookElement.querySelector('p')
        let pageImg = bookElement.querySelector('img')
        let sourceImg = pageImg.getAttribute('src')

        bookTitle.innerText = pageTitle.textContent
        bookPrice.innerText = '$' + pagePrice.textContent
        bookImg.src = sourceImg

    }else if(value === 9){
        let pageTitle = bookElement.querySelector('h4')
        let pagePrice = bookElement.querySelector('p')
        let pageImg = bookElement.querySelector('img')
        let sourceImg = pageImg.getAttribute('src')

        bookTitle.innerText = pageTitle.textContent
        bookPrice.innerText = '$' + pagePrice.textContent
        bookImg.src = sourceImg

    }

}

function addToCart(){
    const cart = document.getElementById('inCart')
    const newDiv = document.createElement('div')
    let newTitle = document.createElement('h5')
    let newPrice = document.createElement('p')
    let title = document.getElementById('title')
    let price = document.getElementById('price')

    cart.appendChild(newDiv)
    
    newDiv.appendChild(newTitle)
    newDiv.appendChild(newPrice)

    newPrice.setAttribute('id', 'cartPrice')

    newTitle.innerText = title.textContent
    newPrice.innerText = '$' + price.textContent

    cartTotal(price.textContent)


}

//array for cart total function that adds item price to array when add to cart button is pushed
let priceArray = []

//adds items to the array and returns the sum of the array
function cartTotal(value){
    priceArray.push(value)
    let sum = 0

    console.log(priceArray)
    for(let i = 0; i < priceArray.length; i++){
        sum += parseFloat(priceArray[i])
    }
    console.log(sum)

    updateTotal(sum)
    
}

function updateTotal(value){
    let updatedPrice = document.getElementById('finalTotal')
    updatedPrice.innerText = '$' + value
}