"use strict"

const btn = document.body.querySelector('#button')
const phtBlck = document.body.querySelector('.wrapper__photos')

btn.addEventListener('click', get)

async function get() {
    this.textContent = 'loading...'
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        if(response.status > 200) throw Error(response.status)
        const result = await response.json()
        this.textContent = 'запрос'
        phtBlck.innerHTML = result.reduce((str, item) => `${str}<img src=${item.thumbnailUrl} alt=${item.title}>`, '')
    } catch (e) {
        this.textContent = 'запрос';
        alert(e.message)
    }
}