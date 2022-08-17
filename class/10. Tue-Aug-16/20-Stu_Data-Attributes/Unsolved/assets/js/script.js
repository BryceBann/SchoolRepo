var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
var element = event.target;
if(element.matches(`.box`)){
  let currentState = element.getAttribute(`data-sate`);
  let currentValue = element.getAttribute(`data-number`);
  
  if(currentState === `hidden`){
    element.innerHTML = currentValue
    element.setAttribute("data-state", "visible")
  }else{
    element.setAttribute("data-state", "hidden")
    
  }
}
  // TODO: Complete function
});
