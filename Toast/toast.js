function toast(message, duration=300){
   const toast=document.getElementById('toast');
   toast.innerText=message;
  setTimeout(()=>{
     toast.style.display="none"
  },duration);
};