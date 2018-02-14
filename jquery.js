$(document).ready(function(){

	//Add Class(addClass.html)
  $("#btn1").click(function(){
        $("h1, h2, p").addClass("blue");
        $("div").addClass("important");
    });


//Remove Class(removeClass.html)

    $("#btn2").click(function(){
        $("h1, h2, p").removeClass("blue");
    });



//Toggle Class(toggleClass.html)
  $("#btn3").click(function(){                 //#btn3 is a id Selector.
        $("h1, h2, p").toggleClass("blue");    // "h1, h2 ,p" is a HTML Element Selector.
    });


  //Get CSS Style Property.(getCssProperty.html)
  $("#btn4").click(function(){
        var col=$("p").css("width");
        $("h4").text(col);//Set text to h4 Element.

       
    });


 //Set Multiple Style Propert.(setMultipleCssProperty.html)
  $("#btn5").click(function(){
        $("p").css({"background-color": "yellow", "font-size": "200%"});
    });


  //Get height and Width From Div.(WidthDimension.html) 
  $("#btn6").click(function(){
        var txt = ""; //undefined Variable
        txt += "Width of div: " + $("#div1").width() + "</br>"; //Get Width From Div 
        txt += "Height of div: " + $("#div1").height();         // Get Height From Div
        $("#div1").html(txt);//Set html to inside Div.
    });


    //Get innerHeight and innerWidth From Div.(WidthDimension.html) 
    $("#btn7").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Inner width of div: " + $("#div1").innerWidth() + "</br>";
        txt += "Inner height of div: " + $("#div1").innerHeight();
        $("#div1").html(txt);
    });


     //jQuery Parent Method.(jqueryParentMethod.html)
     // $("span").parent().css({"color": "red", "border": "2px solid red"});//The parent() method returns the direct parent element of the selected element.
     
     $("span").parents().css({"color": "red", "border": "2px solid red"}); 
     //The parents() method returns all ancestor elements of the selected element, all the way up to the document's root element (<html>).
    

      // $("span").parents("ul").css({"color": "red", "border": "2px solid"});
      //The parents() method returns all ancestor elements of the selected element, 
      //all the way up to the document's root element (<html>).

      


    















});