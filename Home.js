/**
 * Created with JetBrains WebStorm.
 * User: boaz
 * Date: 10.12.12
 * Time: 11:06
 */
/*      function Setting(){
 if(SFX)
 SFXGreenRed="Audio <b style='color: #7cfc00'>On</b> / <span>Off</span>";
 else
 SFXGreenRed="Audio <span>On</span> / <b style='color: red'>Off</b>";
 $("#Settings").html("<b class='HomeFont' style='z-index: 6;'>Settings</b>"+
 " <a href='#' onclick='Sound(),Setting()'><div class='SettingButton1'>"+SFXGreenRed+"</div> </a>"+
 "<img src='Black.png' height='100%' class='Settings'>"+
 "<span class='Exit' onclick='Exit()'><div class='ExitX'><div class='ExitXa'></div> </div></span> "+
 " ");

 }

var SFXOnOff;
var SFX = new  Boolean(true);


function Sound(){
    if(SFX){
        SFX=false;
    }
    else{
        SFX=true;

    }
    if(SFX)
    {SFXOnOff="On"
        $("#SoundId").html("Audio <b style='color: #7cfc00'>On</b> / <span>Off</span>");}
    else
    {
        SFXOnOff="Off"
        $("#SoundId").html("Audio <span>On</span> / <b style='color: red'>Off</b>");

    }
    $("#Notification").addClass("NotificationHeader").html("SFX is turned "+SFXOnOff).slideDown(1000);
    setTimeout(function(){
        $("#Notification").slideUp(1000).html("");

    },2000)
    setTimeout(function(){
        $("#Notification").removeClass("NotificationHeader");},3000)

}*/



function About(){
    $("nav").html("<section style='font-size: 1.3em;'><h4>This App is developed by Boaz katzir and with help of Yuval Fatal, Roni Ben Dov and Roei Bason</h5> " +
        "This App is open source and was developed with html5, javascript and css3, the new web standards," +
        "developed mainly with: <b><h5>JetBrains WebStorm, Mozilla Firefox and the firefox extension csssir</h5></b>" +
        "and also with help of : Notepad++, Aptana Studio and Eclipse" +
        "<br><p>to download the code press <a href='https://gist.github.com/4246911' style='color: #bc8f8f;'>Here</a></p></section>"+
        "<a href='#' onclick='Exit()'><img src='exit.png' class ='ExitAbout'></a>").addClass("About");
    $("b.HomeFont").html("About");

}
function Exit(){
    $("nav").html('<nav><a href="EasyGame.html" class="button1">        Play!</a>       <br>            <a href="#" onclick="About()" class="Button2">            About           </a><br>                 <a href="#" class="Button3" onclick="HowTo()">How to Play</a><br>      <div class="AlertBox" >        <b class="Big">!!!!!!!!!!!!!!!!!!!!!!!!!!!</b><br>this computer was made most likely in china under very bad working conditions of 10 hours work a day without speaking and with danger of poison <br><b class="Big">!!!!!!!!!!!!!!!!!!!!!!!!!!!</b>   </div>     </nav> ').removeClass("About");
    $("b.HomeFont").html("Alien-Defense");
}
function HowTo(){
    $("nav").html("<p style='font-size: 1.2em;'>we are in year 2078 and the aliens are attacking the earth. almost all of the earth communication is destoyed by electoromagnetical radiaion<br>" +
    "of course also all the navigation system is destroyed, but we have deep in the earth the navigate system for our shields that can protect whole cities, but we must have on who navigate the shields to the attacked place, which we know from the alien Modiin?????<br>" +
        "<h2>And it's You!, click on the place of the city so fast as you can and protect the city!!!</h2></p>"+
        "<a href='#' onclick='Exit()'><img src='exit.png' class ='ExitAbout'></a>").addClass("About");
    $("b.HomeFont").html("How to Play");

}
