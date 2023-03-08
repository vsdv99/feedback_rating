const list = document.querySelectorAll('.main__rating')
const submitBtn  = document.querySelector('.main__btn')
const mainSection = document.querySelector('.main')
const thankYouSection = document.querySelector('.thank_you')
let feedbackResult = document.querySelector('#feedback')
let feedbackValue = 0



list.forEach((el) => {
    el.addEventListener('click',(e) => {
        console.log(e.target.textContent)
        feedbackValue = e.target.textContent
        for(let child of el.children){
            child.classList.remove('active')
        }
        e.target.classList.toggle('active')
    })
    
})


submitBtn.addEventListener('click',() => {
    if (feedbackValue != 0){
        mainSection.classList.add('hidden')
        thankYouSection.classList.remove('hidden')
        feedbackResult.textContent = `You selected ${feedbackValue} out of 5`
    }else{
        alert('Please provide Feedback first')
    }
})
