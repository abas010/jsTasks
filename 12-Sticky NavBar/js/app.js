let $ =document

let navElem =$.getElementById('mainNav')
let imgHead =$.getElementById('imgHeader')

function scrollHandler(e) {
    if ($.documentElement.scrollTop>0) {
        imgHead.style.height = '68px'
        navElem.setAttribute('class','bg-black txt-white')
    }
    else{
        imgHead.style.height = '100px'
         navElem.classList.remove('bg-black')
         navElem.classList.remove('txt-white')
    }
}



$.addEventListener('scroll', scrollHandler);