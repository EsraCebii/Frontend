const inputValue=document.querySelector("#task")

const startConf= function(){
    const todos=JSON.parse(localStorage.getItem("todos"));
    if(!todos){
        localStorage.setItem("todos",JSON.stringify([]))
    }else{
        for (let i = 0; i < todos.length; i++) {                            // local'deki her bir todo item'ı için
            function newElementForLocal() {

                let yeniLi = document.createElement("li");                  // yeni bir li oluştur
                let inputValue = todos[i].text;                             // yazılan değeri string olarak inputValue'da tut
                let valueMetni = document.createTextNode(inputValue);       // string değeri text node yap (html'den kurtul düz metin al)
                yeniLi.appendChild(valueMetni);                             //  girilen metni yeni li itema ekledi


                let span = document.createElement("span");                  // yeni span tagi oluştur
                let carpi = document.createTextNode("x");                   // çarpı işaret oluştur
                span.className = "close";                                   // span'a "close" classı ekle
                span.appendChild(carpi);                                    // span'a carpi ekle
                yeniLi.appendChild(span);                                   // span'ı li'ye ekle
                listYaniUL.appendChild(yeniLi);                             // li'yi ul'ye ekle

                if (todos[i].isChecked == true) {
                    yeniLi.classList.add("checked")
                } else {
                    yeniLi.classList.remove("checked")
                }
            };
            newElementForLocal();                                           
        }


    }

}
startConf();

// "close"butonu oluşturalım ve her liste itemine ekleyelim.
var myNodelist =document.getElementsByTagName("li");
var i;
for(i=0; i<myNodelist.length;i++){
    var span =document.createElement("SPAN");
    var txt =document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// "close" butonuna basınca item gizlesin.
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";

        //localstorageden de silmek
        const icerikMetni = div.textContent;
        const icerikMetniKesilmis = icerikMetni.slice(0, icerikMetni.length - 2);

        let todos = JSON.parse(localStorage.getItem("todos")); 
        todos = todos.filter(item => item.text != icerikMetniKesilmis);
        localStorage.setItem("todos", JSON.stringify(todos)) 

    }
}



// item'a tıklanınca "checked" eklensin.
var list =document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName =='LI'){
        ev.target.classList.toggle('checked');

        const icerikMetni = div.textContent;
        const icerikMetniKesilmis = icerikMetni.slice(0, icerikMetni.length - 2);

        if(ev.target.classList.contains("checked")==true){
            const todos=JSON.parse(localStorage.getItem("todos"));
            todos.forEach(element => {
                if(element.text==icerikMetniKesilmis){
                    element.isChecked=true; 
               }
               localStorage.setItem("todos",JSON.stringify(todos))
                
            });
        }else if(ev.target.classList.contains("checked")==false){
            const todos=JSON.parse(localStorage.getItem("todos"));
            todos.forEach(element=>{
                if(element.text==icerikMetniKesilmis){
                    element.isChecked=false; 
                
                };
                localStorage.setItem("todos",JSON.stringify(todos))
            });
        }
    }
}, false);

// Ekle butonuna basınca yeni item oluşturmak
function newElement(){
    var li=document.createElement("li");
    var inputValue=document.querySelector("#task").value;
    var t=document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {    
        $(".error").toast("show");                                                  
    } else {
        $(".success").toast("show");
        document.querySelector("#list").appendChild(li);
    }
    document.querySelector("#task").value="";

    var span =document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
    }
    //add todo
    const todo={
        text:inputValue,
        isChecked: false
    }
    const todos =JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
//enter tuşuna basınca eleman ekleme
var input= document.querySelector("#task");
input.addEventListener("keyup",function(event){
    if(event.key==='Enter'){
        event.preventDefault();
        document.querySelector("#liveToastBtn").click();
    }
});











