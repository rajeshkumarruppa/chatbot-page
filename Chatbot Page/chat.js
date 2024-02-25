chatbotMsgList = ["Hi","sagar", "Hey","Iam Rajesh Kumar","I like your typing", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainerEl=document.getElementById("chatContainer");
let userInputEl=document.getElementById("userInput");


function sendingTochatbot(){
    let userMsg=userInputEl.value;
    let msgContainerEl=document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);
    
    let userMsgEl=document.createElement("span");
    userMsgEl.textContent=userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);
    userInputEl.value="";
    getReplayFromChatbot();
    
    
}
function getReplayFromChatbot(){
    let noOfChatbotMsgs=chatbotMsgList.length;
    let RandomNo=(Math.ceil(Math.random()*noOfChatbotMsgs)-1);//generates random number only Math.random()*9 method gives float values randomly up to 9 thats why we need to add Math.ceil to this method
    let chatbotMsg=chatbotMsgList[RandomNo];
    //console.log(RandomNo); to check the random num
    let msgContainerEl=document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);
    
    let chatbotMsgEl=document.createElement("span");
    chatbotMsgEl.textContent=chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);
    
}