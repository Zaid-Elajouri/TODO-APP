    let button1 = document.getElementById("add");
    let textbox = document.getElementById("userinput");
    let message1 = document.getElementById("result");
    
     button1.addEventListener("click",function(){
         let newmessage = document.createElement("tr");
         let messagetwo = document.createElement("button");
         newmessage.style = "font-size:25px;"   
         newmessage.innerHTML = textbox.value;
         message1.appendChild(newmessage);
         messagetwo.innerHTML = "remove";
         messagetwo.style = "color:black;background-color:whitesmoke; cursor:pointer; border-radius:3px;";
         message1.appendChild(messagetwo);
       
            messagetwo.addEventListener("click",function(){
            this.remove();
            newmessage.remove();

         });
     });
