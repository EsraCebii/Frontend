let name =prompt("Adınız nedir?")
let myName= document.querySelector("#myName")
myName.innerHTML=`${myName.innerHTML} <strong>${name}</strong>`

setInterval(showTime,1000);
    function showTime(){
        const tarih=new Date();
        var gunler =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
        let gun=tarih.getDay();
        document.querySelector(".clock").innerHTML=`${tarih.toLocaleTimeString()} ${gunler[gun]}`
    }
