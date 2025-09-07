document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('#year').forEach(el=>el.textContent = new Date().getFullYear());
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});