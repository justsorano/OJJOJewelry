@@include('webp.js');
(function (){
const Modal = document.createElement('div');
   Modal.classList.add('modal')
   Modal.innerHTML = 
   `<div class='modal__body'>
   <div class='modal__container'>
   <nav class="modal__nav">
   <ul class="modal__row">
<li class="modal__item"><a href="#" class="modal__link">Контрагентам</a></li>
<li class="modal__item"><a href="#" class="modal__link">Дизайнерам</a></li>
<li class="modal__item"><a href="#" class="modal__link">Вакансии</a></li>
<li class="modal__item"><a href="#" class="modal__link">Вход/Регистрация</a></li>
   </ul>
      </nav>
<hr/>
         <div class='modal__icons'>
         <a href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
         <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
         </div>
<hr/>
         <div class='modal__social'>
         <a href="#"><span class='modal__icon _icon-tube'></span></a>
         <a href="#"><span class='modal__icon _icon-vk'></span></a>
         <a href="#"><span class='modal__icon _icon-face'></span></a>
         <a href="#"><span class='modal__icon _icon-tg'></span></a>
         <a href="#"><span class='modal__icon _icon-etsy'></span></a>
         </div>
   </div>
   </div>`
   document.querySelector('.header').appendChild(Modal)
}())
const toggle = document.querySelector('.nav__item_toggle')
const modal = document.querySelector('.modal')
   toggle.addEventListener('click',()=>{
   toggle.classList.toggle('hoverspans')
   if(modal.style.top === '88px'){
      modal.style.top = '-1000px'
   } else {
      modal.style.top = '88px'
   }
})

arrayPusher(arr,arr1)
AaA(wedding,linkWedding)
const arrow = document.querySelectorAll('#title')
const ul = []
const ul2 = [[],[],[],[]]
for(let y = 0;y < arrow.length;y++){
   ul.push(arrow[y].parentNode.children)
   for(let i = 0;i < ul[y].length;i++){
      ul2[y].push(ul[y][i])
   }
}
for(let i = 0;i < ul2.length;i++){
   ul2[i].shift()
}
if(window.innerWidth <= 950){
   console.log(window.innerWidth)
   for(let i = 0;i < arrow.length;i++){
      arrow[i].addEventListener('click',()=>{
         ul2[i].forEach(i => {
            if(i.style.display === 'flex'){
               i.style.display = 'none'
            } else {
               i.style.display = 'flex'
            }
         })
      })
   }
}

