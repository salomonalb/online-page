const accordions=document.getElementsByClassName("faq-card__accordion");for(const c of accordions)c.addEventListener("click",(()=>{c.children[0].classList.toggle("question-open"),c.children[1].classList.toggle("icon-open"),c.children[2].classList.toggle("answer-open")}));