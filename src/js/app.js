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
const wedding = document.querySelector('.navigation__item_black')
const linkWedding = document.querySelector('.navigation__link_black')
const nebox  = document.querySelectorAll('.navigation__item')
const neitem = document.querySelectorAll('.navigation__link')
const arr = []
const arr1 = []
for(let i = 0;i < nebox.length;i++){
   arr.push(nebox[i])
}
for(let i = 0;i < nebox.length;i++){
   arr1.push(neitem[i])
}
function arrayPusher(array1,array2){
   AaA2(arr[1],arr1[1])
   AaA2(arr[2],arr1[2])
   AaA2(arr[3],arr1[3])
   AaA2(arr[4],arr1[4])
   AaA2(arr[5],arr1[5])
}
function AaA(box,item){
   box.addEventListener('mouseenter',()=>{
      if(box.classList.contains('bgcbg')){
         box.classList.remove('bgcbg')
         box.classList.add('accentbg')
      } else {
         box.classList.remove('accentbg')
         box.classList.add('bgcbg')
      }
      if(item.classList.contains('accentcolor')){
         item.classList.remove('accentcolor')
         item.classList.add('bgccolor')
      } else {
         item.classList.remove('bgccolor')
         item.classList.add('accentcolor')
      }
   })
   box.addEventListener('mouseleave',()=>{
      if(box.classList.contains('bgcbg')){
         box.classList.remove('bgcbg')
         box.classList.add('accentbg')
      }
      if(item.classList.contains('accentcolor')){
         item.classList.remove('accentcolor')
         item.classList.add('bgccolor')
      }
   })
}
function AaA2(box,item){
   box.addEventListener('mouseenter',()=>{
      if(box.classList.contains('accentbg')){
         box.classList.remove('accentbg')
         box.classList.add('bgcbg')
      } else {
         box.classList.remove('bgcbg')
         box.classList.add('accentbg')
      }
      if(item.classList.contains('bgccolor')){
         item.classList.remove('bgccolor')
         item.classList.add('accentcolor')
      } else {
         item.classList.remove('accentcolor')
         item.classList.add('bgccolor')
      }
   })
   box.addEventListener('mouseleave',()=>{
      if(box.classList.contains('accentbg')){
         box.classList.remove('accentbg')
         box.classList.add('bgcbg')
      }
      if(item.classList.contains('bgccolor')){
         item.classList.remove('bgccolor')
         item.classList.add('accentcolor')
      }
   })
}
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
for(let i = 0;i < arrow.length;i++){
   arrow[i].addEventListener('click',()=>{
   for(let u = 0;u < ul2.length;u++){
   for(let x = 0;x < ul2[u].length;x++){
      console.log(ul2[u][0])
   }
   }
   })
}
// ul2[0].push(ul[0])
// ul2[1].push(ul[1])
// ul2[2].push(ul[2])
// ul2[3].push(ul[3])
// console.log(ul2)
// console.log(ul2)
// console.log(ul2)