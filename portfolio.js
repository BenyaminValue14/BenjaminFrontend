// alert('hoola ');
window.addEventListener('scroll',()=>{
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
let indice=document.querySelector('.indice');
let enviar=document.querySelector('#enviar');
let firstBtn=document.querySelector('#firstBtn');
enviar.addEventListener('click',()=>{
  alert('Aún no esta habilitado el formulario\nPuedes enviarme un mensaje en Whatsapp');
})
toggle.addEventListener('click',()=>{
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
});
indice.addEventListener('click',()=>{
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
});
function mover(){
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
}
