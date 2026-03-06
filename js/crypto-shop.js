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
