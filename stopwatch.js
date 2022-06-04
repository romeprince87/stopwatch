hr=0;
min=0;
sec=0;
count=0;

var timer=false;

function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
    hr="00";
    min="00";
    sec="00";
    count="00";
    document.getElementById("count").innerHTML = count;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("hr").innerHTML = hr;


}
function stopwatch(){
    if(timer == true){
        count=count+1;
        if(count==100){
            sec=sec + 1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr= hr + 1;
            min=0;
            sec=0;
        }
        
        hrstring=hr;
        minstring=min;
        secstring=sec;
        countstring=count;

        if(hr<10){
            hrstring="0" + hrstring;
        }
        if(min<10){
            minstring="0" + minstring;
        }
        if(sec<10){
            secstring="0" + secstring;
        }
        if(count<10){
            countstring="0" + countstring;
        }

        document.getElementById("count").innerHTML = countstring;
        document.getElementById("sec").innerHTML = secstring;
        document.getElementById("min").innerHTML = minstring;
        document.getElementById("hr").innerHTML = hrstring;

        setTimeout("stopwatch()",10)
    }
}


