 const SelectMenu= document.querySelectorAll("select");
 const btn= document.querySelector("button");
 const content= document.querySelector(".content");
 const time= document.querySelector("h1"); // fetching current time 
 let alarmTime;
 let isAlarmset= false;
 for(let i=12; i>0; i--){
    i= i<10? "0"+i:i;
    let option= `<option value="${i}">${i}</option>`
    SelectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
 }
 for(let i=59; i>=0; i--){
    i= i<10? "0"+i:i;
    let option= `<option value="${i}">${i}</option>`
    SelectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
 }
 for(let i=2; i>0; i--){
    let ampm= i== 1? "AM":"PM";
    let option= `<option value="${ampm}">${ampm}</option>`
    SelectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
 }

 setInterval(() => {
    let date= new Date(),
    h=date.getHours(),
    m=date.getMinutes(),
    s=date.getSeconds(),
    ampm="AM";
    if(h>=12){
        h=h-12;
        ampm= "PM";
    }
    // if hour is 0 make it 12 
    h = h==0? h=12 : h;
     h= h<10? "0"+h :h ;
     m= m<10? "0"+m :m ;
     s= s<10? "0"+s :s ;

     time.innerText= `${h}:${m}:${s} ${ampm}`;
     if(alarmTime== `${h}:${m}:${s} ${ampm}`){

     }
 },1000);
 function setAlarm(){
    if(isAlarmset){
        alarmTime="";
        content.classList.remove("disable");
        btn.innerText="Set Alarm";
        return isAlarmset=false;
    }
    let t= `${SelectMenu[0].value}:${SelectMenu[1].value}:${SelectMenu[2].value}`
    if(t.includes("Hour")|| t.includes("Minute")||t.includes("AM/PM")){
        return alert("enter valid input");
    }
    isAlarmset=true;
    alarmTime=t;
    content.classList.add("disable");
    btn.innerText="Clear Alarm";
 }   
 btn.addEventListener("click",setAlarm);