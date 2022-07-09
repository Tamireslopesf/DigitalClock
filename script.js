function clock(){ 
    let c = new Date();
    let h = c.getHours(); 
    let m = c.getMinutes(); 
    let s = c.getSeconds();   
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
 
    let time = h + ":" + m + ":" + s + " ";
    document.getElementById("clock").innerHTML = time;

setTimeout(clock, 1000);
}
clock()

function day(){
    let dayofweek = new Date();
    let day = dayofweek.getDay();
    let dayname = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("day_of_week").innerHTML = dayname[day];
}
day()
 

function date(){
  let d = new Date();
  let date = d.getDate();
  let monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = d.getMonth();
  let year = d.getFullYear();

  let show = monthnames[month] + " " + date + "," + " " + year;
  document.getElementById("date").innerHTML= show;
}
date()
    
