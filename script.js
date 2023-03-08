const list = document.querySelectorAll('.main__rating')
const btn  = document.querySelector('.main__btn')

const main = document.querySelector('.main')
const thankYou = document.querySelector('.thank_you')

let feedbackContent = 0
let feedbackResult = document.querySelector('#feedback')



list.forEach((el) => {
    el.addEventListener('click',(ev) => {
        feedbackContent = ev.target.textContent
        for(let child of el.children){
            child.classList.remove('active')
        }
        ev.target.classList.toggle('active')
    })
    
})


btn.addEventListener('click',() => {
    if (feedbackContent != 0){
        main.classList.add('hidden')
        thankYou.classList.remove('hidden')
        feedbackResult.textContent = `You selected ${feedbackContent} out of 5`
    }else{
        alert('No feedback provided')
    }
})
