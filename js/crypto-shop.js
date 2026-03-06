import { regions } from "./regions.js"
import { cryptoProducts } from "./crypto-products.js"

let selectedRegion = null
let selectedCity = null
let selectedDistrict = null

const regionContainer = document.getElementById("region-select")
const cityContainer = document.getElementById("city-select")
const districtContainer = document.getElementById("district-select")

function renderRegions() {

regionContainer.innerHTML = ""

Object.keys(regions).forEach(region => {

const btn = document.createElement("button")
btn.innerText = region

btn.onclick = () => {
selectedRegion = region
renderCities(region)
}

regionContainer.appendChild(btn)

})

}

function renderCities(region) {

cityContainer.innerHTML = ""

Object.keys(regions[region]).forEach(city => {

const btn = document.createElement("button")
btn.innerText = city

btn.onclick = () => {
selectedCity = city
renderDistricts(region, city)
}

cityContainer.appendChild(btn)

})

}

function renderDistricts(region, city) {

districtContainer.innerHTML = ""

const districts = regions[region][city]

districts.forEach(district => {

const btn = document.createElement("button")

btn.innerText = "🔒 " + district

btn.onclick = () => {
selectedDistrict = district
}

districtContainer.appendChild(btn)

})

}

renderRegions()

function renderCategories() {

const container = document.getElementById("category-select")

const categories = [
"🌲 Кедровые шишки",
"🍫 Гематоген"
]

categories.forEach(cat => {

const btn = document.createElement("button")
btn.innerText = cat
  btn.onclick = () => {
selectedCategory = cat
renderProducts(cat)
}

container.appendChild(btn)

})

}

function renderWeights(){

const container = document.getElementById("weight")

const weights = [
"1г",
"2г",
"5г",
"10г"
]

weights.forEach(w => {

const btn = document.createElement("button")
btn.innerText = w

container.appendChild(btn)

})

}

function renderProducts(category){

const container = document.getElementById("products")
container.innerHTML=""

const products = cryptoProducts[category]

products.forEach(product=>{

const card = document.createElement("div")
card.className="product-card"

card.innerHTML = `
<div class="product-title">${product.name}</div>
<div class="product-price">${product.price} ₽</div>
`

container.appendChild(card)

})

}

renderCategories()
renderWeights()
