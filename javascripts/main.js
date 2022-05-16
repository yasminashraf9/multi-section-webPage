
let navbar = document.querySelector('nav')
window.addEventListener('scroll',()=>{
    if(window.pageYOffset >= navbar.offsetTop){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }
})

let servicesOptions = document.querySelector('#service-options')
servicesOptions.addEventListener('click',(clicked)=>{
    if(clicked.target.classList.contains('option-img') || clicked.target.classList.contains('option-title') ){
        let cards = servicesOptions.querySelectorAll('div')
        for(let card of cards){
            card.classList.remove('shadow')
        }
        clicked.target.parentElement.classList.add('shadow')
        fillOptionShow(clicked.target.parentElement)
    }
})

function fillOptionShow(option){
    let showSection = document.querySelector('#option-show')
    // reset 
    showSection.querySelectorAll('.animate__animated').forEach((item)=>{
        item.classList.remove('animate__fadeInTopLeft','animate__fadeInTopRight')
    })
    // to out animation 
    showSection.querySelectorAll('.animate__animated')[0].classList.add('animate__fadeOutTopLeft')
    showSection.querySelectorAll('.animate__animated')[1].classList.add('animate__fadeOutTopRight')
    setTimeout(()=>{
        if(option.classList.contains('option1')){
            showSection.querySelector('h4').textContent=`SEO Analysis & Daily Reports`
            showSection.querySelector('img').setAttribute('src',"assets/Capture61.PNG")
        }else if(option.classList.contains('option2')){
            showSection.querySelector('h4').textContent=`Healthy Food & Life`
            showSection.querySelector('img').setAttribute('src',"assets/Capture62.PNG")
        }else if(option.classList.contains('option3')){
            showSection.querySelector('h4').textContent=`Car Re-search & Transport`
            showSection.querySelector('img').setAttribute('src',"assets/Capture63.PNG")
        }else if(option.classList.contains('option4')){
            showSection.querySelector('h4').textContent=`Online Shopping & Tracking ID`
            showSection.querySelector('img').setAttribute('src',"assets/Capture64.PNG")
        }else if(option.classList.contains('option5')){
            showSection.querySelector('h4').textContent=`Enjoy & Travel`
            showSection.querySelector('img').setAttribute('src',"assets/Capture61.PNG")
        }
        // replacing outing animation with entering ones
        showSection.querySelectorAll('.animate__animated')[0].classList.replace('animate__fadeOutTopLeft','animate__fadeInTopLeft')
        showSection.querySelectorAll('.animate__animated')[1].classList.replace('animate__fadeOutTopRight','animate__fadeInTopRight')
    },600)
}

let animatedSections = ['#home','#about','#blog']

for(let section of animatedSections){
    const element = document.querySelector(section);
    // every section has 2 parts which selected to move in a certain way
    const items = element.querySelectorAll('.animate__animated')
    const observer = new IntersectionObserver(entries => {
        // IntersectionObserver returns an array whose first element is an 
        // object contains intersection with portview information
        // is isIntersecting returns true or false

    items[0].classList.toggle( 'animate__slideInLeft', entries[0].isIntersecting );
    items[1].classList.toggle( 'animate__slideInRight', entries[0].isIntersecting );
    });
    // watch the selected elements 
    observer.observe( element );
}

