var AlertTime = new Boolean();
var ibitween;
var ContinueGameNow = new Boolean(true);
var ContinueReplaying = new Boolean(true);
var NowPlay = new Boolean(true);
        var ImageClicked = new Boolean();
var CDown = new Boolean(true);
var AddedScoreFirstTime = new Boolean();
var WaitTime = 0;
        var Score= 0;
var TotalTimesClicked = 8;
        var WinWidth = screen.width;
        var WinHeight = screen.height;
        var ImgHeight=WinWidth/2 ;
        var HeaderHeight = WinHeight - ImgHeight;
        var Scale=WinWidth/8000;
        var XDistance;
        var YDistance;
        var TouchedY;
        var TouchedX;
        var WantedXPr;
        var WantedYPr;
        var Place;
        var Places = new Array(Boolean(11));
        var Recovered = new Array(Boolean(11));
var Count = 0;
        var XYScore;
        var MinHeader = (WinHeight/100)*7;
        var AppHeight= ImgHeight + MinHeader
        var PreferedImgHeight = WinHeight - MinHeader;
        var elPos = {};
var TotalDistanceX=0, TotalDistanceY=0;
var i;

/*if  (AppHeight > WinHeight)
     {


         $('#EasyImg').html('<img src="World-Map.jpg" alt="you have a problem" id="special" id="EasyImg" height="'+(PreferedImgHeight)+'px">');
         }
else{
    $('#EasyImg').html('<img src="World-Map.jpg" alt="you have a problem">');*/
jQuery(document).ready(function(){

City();
    Count++;
  var GameInterval =  window.setInterval(function(){

       if(Count ==7)
       {

FinishedGame();
NowPlay=false;
           clearInterval(GameInterval);
       }
       else
       {  City();
           Count++;}

    }, 10500);





function FinishedGame(){
CDown = false;
Score=elPos.a;

    $(".FinishedGame").html("<span  class='FinishGame' ></span>");



if(Score>740)
{
WaitTime = 3000;
    setTimeout(function(){
        $("#FinishedGame").html("<h1 class='FinishGameEXL'></h1>");
        setTimeout(function(){
            $(".FinishGameEXL").html("<div class='ChangeOp'><header class='Finish'>Awesome!!</header> "+
                "<header class='Sub'>No one died! the aliens wont come anymore!</header>" +
                "<div class='Box'></div> <img src='StarPlace.png' class='StarPlace1' width= '10%' ><img src='StarPlace.png'  class='StarPlace2' width='10%'><img src='StarPlace.png' class='StarPlace3' width='10%'></div>" +
                "<img src='Star.png'  width='10%' class='Star1' >");
            setTimeout(function(){$("#StarClass2").html("<img src='Star.png'  width='10%' class='Star2' > ");},1500);
            setTimeout(function(){$("#StarClass3").html("<img src='Star.png'  width='10%' class='Star3' > ");},3000);
        },2000);
    },2000);




            }
else if(Score>630){
WaitTime = 1500;

    setTimeout(function(){
        $("#FinishedGame").html("<h1 class='FinishGameGood'></h1>");
        setTimeout(function(){
            $(".FinishGameGood").html("<div class='ChangeOp'><header class='Finish'>Good Job!</header>" +
                "<header class='Sub'>more than 3/4 citizens were recovered!</header>" +
                "<div class='Box'></div> <img src='StarPlace.png' class='StarPlace1' width= '10%' ><img src='StarPlace.png'  class='StarPlace2' width='10%'><img src='StarPlace.png' class='StarPlace3' width='10%'></div>" +
                "<img src='Star.png'  width='10%' class='Star1' >");
            setTimeout(function(){$("#StarClass2").html("<img src='Star.png'  width='10%' class='Star2' > ");},1500);
        },2000);
    },2000);


}
else if (Score>390){

    setTimeout(function(){
        $("#FinishedGame").html("<h1 class='FinishGameOK'></h1>");
        setTimeout(function(){
            $(".FinishGameOK").html("<div class='ChangeOp'><header class='Finish'>Hmmmmm.....</header>" +
                "<header class='Sub'>Half of the citizens were recovered by you but the other half is dead...</header>" +
                "<div class='Box'></div> <img src='StarPlace.png' class='StarPlace1' width= '10%' ><img src='StarPlace.png'  class='StarPlace2' width='10%'><img src='StarPlace.png' class='StarPlace3' width='10%'></div>" +
                "<img src='Star.png'  width='10%' class='Star1' >");

        },2000);
    },2000);

}
else if(TotalTimesClicked<5 && Score<350)
{

    setTimeout(function(){
        $("#FinishedGame").html("<h1 class='FinishGameNoClick'></h1>");
        setTimeout(function(){
            $(".FinishGameNoClick").html("<div class='ChangeOp'><header class='Finish'>Shame On You!!</header>" +
                "<header class='Sub'>You didnt try even to recover all the citzens!</header>" +
                "<div class='Box'></div> <img src='StarPlace.png' class='StarPlace1' width= '10%' ><img src='StarPlace.png'  class='StarPlace2' width='10%'><img src='StarPlace.png' class='StarPlace3' width='10%'></div>");

        },2000);
    },2000);

}
else{

    setTimeout(function(){
        $("#FinishedGame").html("<h1 class='FinishGameBad'></h1>");
        setTimeout(function(){

            $(".FinishGameBad").html("<div class='ChangeOp'><header class='Finish'>Horrible!</header>" +
                "<header class='Sub'></header>" +
                "<div class='Box' style='background-color: gray'></div> <img src='StarPlace.png' class='StarPlace1' width= '10%' ><img src='StarPlace.png'  class='StarPlace2' width='10%'><img src='StarPlace.png' class='StarPlace3' width='10%'></div>");
if(false)
$("header.Sub").html("all the big cities were destroyed or half destoryed!<br> <br>The blud comes like water!");
            else
$("header.Sub").html("more than half of the citizens were killed!");
        },2000);
    },2000);
}
setTimeout(function(){
    $("#BackToGame").html("<a href='index.html'><span class='BackToGame'>Back to Menu</span></a>");
},WaitTime+4000);

}

function City() {
    AlertTime = false;
NowPlay = true
elPos.x = 0;
    CDown = true;
    elPos.y=0;
$("#WantedPlace").html("");
    CountDown();
    var Random1 = Math.floor((Math.random() * 3) + 1);
    var Random2 = Math.floor((Math.random() *7) +1);
    var RandomPlace = Random1+Random2;
elPos.r = RandomPlace;
if(Recovered[RandomPlace]||!Places[RandomPlace]){
    var XYScore = 0;
    SwitchPlace(RandomPlace);

      if(Recovered[RandomPlace])
              $('#Place').html("The aliens are attacking " + Place+" again");
        else
               $('#Place').html("The aliens are attacking " + Place);
    Places[RandomPlace] = true;

 setTimeout(function () {
     if(ContinueGameNow){
         AddedScoreFirstTime = false;
AlertScores(RandomPlace);
         AlertTime = true;
     }
},7500);


  setTimeout(function () {
      if (ContinueReplaying){
       $("#HeaderAfterWrite,#HeaderWrite").html("");

$("#HeaderFont").removeClass("HeaderFont").addClass("HeaderFontShadow");
      CDown = true;
          elPos.z = false;}
    }, 10499);
}
else City();
}

function AlertScores(RandomPlace) {
        CDown = false;
        $('#Place').html(Place);
        GetClicked();
    if(!AddedScoreFirstTime)
        XYScore = ScoreMulti();
        $("#HeaderFont").removeClass("HeaderFontShadow").addClass("HeaderFont");

        if (!ImageClicked) {

            $('#HeaderAfterWrite').html(", all the people were killed");
            $('#HeaderWrite').html("No one helped ");
            TotalTimesClicked--;
        }
        else if (XYScore > 69)
        {$('#HeaderWrite').html("Youv'e succesfuly recover the city ");
            Recovered[RandomPlace] = true;
        }

        else if (XYScore > 39){
            $('#HeaderWrite').html("half of the city ");
            $('#HeaderAfterWrite').html(" was recovered");
            Recovered[RandomPlace] = true;
        }

        else {
            $('#HeaderAfterWrite').html("is fully destroyed now!");

            $('#HeaderWrite').html(" ");

        }
AddedScoreFirstTime = true;

}
 function CountDown(){

   var i = 74;
     $(".CountDown").html(7.5);
var CountInt = setInterval(function(){
    if (i  >= 0  && CDown){
    ibitween = i/10;
        if(Math.floor(ibitween)==ibitween)
        ibitween = ibitween+".0";
        $(".CountDown").html(ibitween);
    i--}
    else
    clearInterval(CountInt);
},99);


 }


function SwitchPlace(RandomPlace) {


    switch(RandomPlace){
    case 1:
    Place = "Berlin";
    WantedYPr = 790;
    WantedXPr = 4300;

    break;
    case 2:
    Place="New York";
    WantedYPr=1061;
    WantedXPr = 2345;

    break;
    case 3:
    Place="barcelona";
    WantedYPr=1049;
    WantedXPr = 4046;

    break;
    case 4:
    Place="Johannesburg";
    WantedYPr=2546;
    WantedXPr = 4618;

    break;
    case 5:
    Place="shanghai";
    WantedYPr=1272;
    WantedXPr = 6664;

    break;
    case 6:
    Place="Moskau";
    WantedYPr=732;
    WantedXPr = 4800;

    break;
    case 7:
    Place="cairo";
    WantedYPr= 1310;
    WantedXPr = 4690;

    break;
    case 8:
    Place="Delhi";
    WantedYPr=1323;
    WantedXPr = 5707;

    break;
    case 9:
    Place="rio de genero";
    WantedYPr=2478;
    WantedXPr = 3050;

    break;
    case 10:
    Place="Tokyo";
    WantedYPr=1180;
    WantedXPr = 7102;

    break;
    }
XYScore = 0;

return (WantedXPr*1000)+WantedYPr;
}





        $("body").click(function(Event){

if(NowPlay){
            if(Event.pageY <= HeaderHeight)
                Pause();
            else if (!AlertTime){
             TouchedX = Event.pageX;
            TouchedY = Event.pageY;
                if(WinHeight> 1000 && WinWidth > 1200)
            $("#WantedPlace").html("<img src='Target.png' style=' width: 30px; height: 30px; font-size: 150%;z-index: 1000; position: fixed; left:"+(TouchedX-15)+"px; top: "+(TouchedY-15)+"px;' >");
            else
                $("#WantedPlace").html("<img src='Target.png' style=' width: 16px; height: 16px; font-size: 150%;z-index: 1000; position: fixed; left:"+(TouchedX-8)+"px; top: "+(TouchedY-8)+"px;' >");




            elPos.x = TouchedX;
            elPos.y = TouchedY;
elPos.z = true;
            }
}
        });
function GetClicked()
    {
        ImageClicked = elPos.z;
        }
function ScoreMulti(){



    TouchedX = elPos.x;
    TouchedY = elPos.y;
    var RealWantedX = Scale * WantedXPr;
    var RealWantedY = HeaderHeight + (Scale * WantedYPr);

    XDistance =RealWantedX-TouchedX;
    YDistance =RealWantedY-TouchedY;
    TotalDistanceX +=XDistance;
    TotalDistanceY +=YDistance;
    XDistance = Math.abs(XDistance);
    YDistance =  Math.abs(YDistance);


    XDistance = XDistance * 0.7;
    YDistance = YDistance * 0.7;

    XDistance = 50 - XDistance;
    YDistance = 50 - YDistance;

    XYScore= XDistance+YDistance;

    if  (XYScore < 0 || isNaN(XYScore)){
    XYScore = 0}
XYScore = Math.round(XYScore);
Score +=XYScore;
$("#x2").html(Score);
elPos.a=Score;
    return XYScore;
}


function Pause(){
    clearInterval(GameInterval);
ContinueGameNow = false;
    ContinueReplaying = false;
CDown = false;
    $('#HeaderWrite, #HeaderAfterWrite, #x2, #Place, .CountDown, #WantedPlace').html("");
    $('#Pause').html("<section class='Pause'></section><h1 id='Resume'><div class='Resume' id ='ResumeButton'>Resume</div></h1>");
    NowPlay=false;

    $("#ResumeButton").click(function(){

       Resume();
    });
}
function Resume(){

    $('#Resume').html("<div class='ResumeCountDown'>3</div>");
    setTimeout(function(){
        $('#Resume').html("<div class='ResumeCountDown'>2</div>");
    document.getElementsByClassName("Pause").style.opacity=0.6;
    },1000)
    setTimeout(function(){$('#Resume').html("<div class='ResumeCountDown'>1</div>");
        document.getElementsByClassName("Pause").style.opacity=0.4;
   },2000)
    setTimeout(function(){
    $("#x2").html(Score);
$("#Pause").html("");
    if(AlertTime)
    {
        $(".CountDown").html("0.0");
        var RandomPlace = elPos.r;
        AlertScores(RandomPlace);
setTimeout(function(){
    ResumeCity();
    $("#HeaderFont").removeClass("HeaderFont").addClass("HeaderFontShadow");
    $("#HeaderAfterWrite,#HeaderWrite").html("");
},3000);
    }
   else
    ResumeCity();
    },3000);
}
    function ResumeCity(){
        CDown = true;

        setTimeout(function(){ContinueGameNow = true;},7498);
        setTimeout(function(){ContinueReplaying = true;},10496);
        City();

        GameInterval= window.setInterval(function(){

            if(Count ==7)
            {

                FinishedGame();
                NowPlay=false;
                clearInterval(GameInterval);
            }
            else
            {  $("#x2").html(Score);
                City();
                Count++;}

        }, 10500);
    }
    });


/*Ø Distance Y: "+TotalDistanceY/7+" px | Ø Distance X: "+TotalDistanceY/7+" px | Total Distance of Y: "+TotalDistanceY+" px | Total Distance of X: "+TotalDistanceX+" px" + "<br> Ø Score: "+Score/7*/
