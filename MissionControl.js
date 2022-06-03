 // variables
 var currTime=10;
 // function
 function countdown() 
 {
     for(var i=0; i<=11; i++)
     {
         if (i == 11) 
         {
             setTimeout(function ()
             {
                 //code goes here for timer
                 document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
             }, 1000 * i);
         } 
         else 
         {
             setTimeout(function ()
             {
                 document.getElementById("countdownTimer").innerHTML = currTime;
                 currTime = currTime - 1;
             }, 1000 * i);
         }
     }
 }