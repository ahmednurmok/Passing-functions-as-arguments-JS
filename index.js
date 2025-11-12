function handleClick(){
   alert("i got clicked");

}
//Alternatively  document.querySelector('button').addEventListener('click', function(){alert: (“I got clicked”);

var drumbuttons = document.querySelectorAll('.drum').length;
//.length counts all drumms. without it only the 1st drum would be counted  
for (var i=0; i<drumbuttons; i++) {
document.querySelectorAll('.drum')[i].addEventListener('click', handleClick)
};
//for loop,  parameter is i instead of listing all 7 buttons.
