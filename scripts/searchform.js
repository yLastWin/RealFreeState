window.onload=function(){
var coll = document.getElementsByClassName("collapsible");
var con=document.getElementsByClassName("content");
var i;

if(window.screen.width<=1024){
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

}


}