const likeButtons=document.querySelectorAll(".like-btn");
function handleLike(event){
    event.target.classList.toggle("active");
    
}

likeButtons.forEach((likeButtons)=>{
    likeButtons.addEventListener("click",handleLike);
    
});
