// DOM elements for future use
const select = document.querySelector('select');
const body = document.querySelector('body');
// Initial style for body element
body.style.padding = '15px';
// Updater function for changing background and text color
function update(bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}
// You have a chance to select one of the 5 options from select list, if the option you've chosen will be matched 
// with any case in switch block, the background color and text color will be shown in those colors.
select.addEventListener('change', ()=>{
   const option = select.value;
   
switch (option) {
     case "white":
       update("white", "black");
     break;
     case "black":
       update("black", "white");
     break;
     case "yellow":
       update("yellow", "brown");
     break;
     case "psychdelic":
       update("lime", "purple");
     break;
     case "aqua":
       update("aqua", "blue");
     break;
   }
});
