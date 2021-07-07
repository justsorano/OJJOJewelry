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
<i class="fa fa-user" aria-hidden="true"></i>
<i class="fa fa-heart" aria-hidden="true"></i>
         </div>
<hr/>
         <div class='modal__social'>
         <span class='modal__icon _icon-tube'></span>
         <span class='modal__icon _icon-vk'></span>
         <span class='modal__icon _icon-face'></span>
         <span class='modal__icon _icon-tg'></span>
         <span class='modal__icon _icon-etsy'></span>
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

