const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")
const products = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 9520,
        colors: [
            {
                code: "black",
                img: "img/Air.png",
            },
            {
                code: "brown",
                img: "img/Air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "JORDAN",
        price: 7899,
        colors: [
            {
                code: "orange",
                img: "img/jord.png",
            },
            {
                code: "blue",
                img: "img/jord1.png",
            },
        ],
    },
    {
        id: 3,
        title: "BLAZER",
        price: 6999,
        colors: [
            {
                code: "brown",
                img: "img/blazer.png",
            },
            {
                code: "gray",
                img: "img/blazer1.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 19950,
        colors: [
            {
                code: "purple",
                img: "img/crater.png",
            },
            {
                code: "darkblue",
                img: "img/crater1.png",
            },
        ],
    },
    {
        id: 1,
        title: "Hippie",
        price: 8888,
        colors: [
            {
                code: "lightgreen",
                img: "img/hippie.png",
            },
            {
                code: "black",
                img: "img/hippie2.png",
            },
        ],
    },
]
let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item, index) =>{
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        //change the choosen product
        choosenProduct = products[index]

        //change text of curent product
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "₹" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img
        // assining new colors
        currentProductColors.forEach((color, index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
})

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", () =>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    } )
})

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex"
})
close.addEventListener("click", ()=>{
    payment.style.display = "none"
})