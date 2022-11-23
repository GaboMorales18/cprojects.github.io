const div = document.querySelector('.container_barra');
 
  window.addEventListener('scroll', function(){
	  div.classList.toggle('active', window.scrollY >0)
	 } );