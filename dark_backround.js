// ==UserScript==
// @name     Dark_Backround
// @version  1
// @grant    none
// ==/UserScript== 

(function () {
    function noWhiteBackgroundColor() {
        function changeBackgroundColor(x)  {  
            var backgroundColorRGB = window.getComputedStyle(x, null).backgroundColor;  
            if(backgroundColorRGB != "transparent")  {  
                var RGBValuesArray = backgroundColorRGB.match(/\d+/g);
                var red   = RGBValuesArray[0];
                var green = RGBValuesArray[1];
                var blue  = RGBValuesArray[2];

                var red_needed   = 202;
                var green_needed = 202;
                var blue_needed  = 202;


                if (red>=202 && green>=202 && blue>=202) { 

                   if (red>=250 && red<=255 && green>=250 && green<=255 && blue>=250 && blue<=255) {
                      red_needed   += 0;
                      green_needed += 0; }

                   else if (red>=240 && red<=255 && green>=240 && green<=255 && blue>=240 && blue<=255) {
                      red_needed   += 6;
                      green_needed += 3; }

                   else if (red>=230 && red<=255 && green>=230 && green<=255 && blue>=230 && blue<=255) {
                      red_needed   += 10;
                      green_needed += 5; }

                   else if (red>=220 && red<=255 && green>=220 && green<=255 && blue>=220 && blue<=255) {
                      red_needed   += 14;
                      green_needed += 7; }

                   x.style.backgroundColor = "rgb( " + red_needed + ", " + green_needed + ", " + blue_needed + ")"; 
               }
            }
        }

        var allElements=document.getElementsByTagName("*");
        for(var i=0; i<allElements.length; i++)  {
            changeBackgroundColor(allElements[i]);}
    }
    window.addEventListener("DOMContentLoaded",noWhiteBackgroundColor, false);
})();