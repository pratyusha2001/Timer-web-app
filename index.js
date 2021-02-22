var hours=0;
var min=0;
var sec=0;
document.getElementById("time").innerHTML = "0"+hours + "h "
+ "0"+min + "m " + "0"+sec + "s ";

/*starts timer*/
function timer()
{
    if((min===59)&&(sec===59))
      {
        hours=hours+1;
        min=0;
        sec=-1;
      }
    if(sec===59)
    {
      sec=-1;
      min=min+1;
    }
      sec=sec+1;
      document.getElementById("time").innerHTML = hours + "h "
      + min + "m " + sec + "s ";  
}

/*resets timer*/
function reset(){
    hours=0;
    min=0;
    sec=0;
    document.getElementById("time").innerHTML = "0"+hours + "h "
+ "0"+min + "m " + "0"+sec + "s ";
}
