document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
function KeyCheck(event)
{
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
      var backspace = 1;
      alwaysFocus(backspace);
      break;
      default:
      break;
   }
}