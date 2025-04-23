let MenuIcon = document.querySelector("#MenuIcon");
let ul = document.querySelector(".midSection");
let X = document.querySelector("#x");

MenuIcon.addEventListener("click", () => {
  
if(
    ul.style.right === 0 ){
console.log("hello")
    
     (ul.style.right = "-100%")}else{
     (ul.style.right = 0);
     console.log("hello")
    }
});
X.addEventListener("click", () => {
  if (ul.style.right === "-100%") {
    ul.style.right = 0;
    // ul.style.transition = "right 0.5s linear 1"
  } else {
    ul.style.right = "-100%";
    // ul.style.transition = "right 0.5s linear 1"
  }
});
