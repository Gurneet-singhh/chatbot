'use strict';

const toggle = `<div ><div style="
        position: fixed;
        right: 25px;
        bottom: 25px;
        cursor: pointer;
        " ><img id='chat-box-logo'
          style="width: 60px;
        height: 60px;
        border-radius: 100px;"
          src="https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/FPBAPaZFOOqqiCbV.png"
        />

    </div></div>`;

const chatBox = `<div id='chatbot-box-all' style="width: 370px;
        height: 640px;
        background-color: #eaeef3;
        color: black;
        position: fixed;
        right: 10px;
        bottom: 9px;
        border-radius: 15px;
        box-shadow: 0px 0px 8px 2px #00000063;
        display: grid;
        grid-template-rows: auto 1fr auto;">
      <div style="background-color: white;
        padding: 20px 25px;
        border-radius: 15px 15px 0 0;
        display: flex;
        align-items: center;
        gap: 45px;
        grid-row: 1;
        letter-spacing: 2px;">
        <img
          style="width: 60px;
        height: 60px;
        border-radius: 100px;"
          src="https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/FPBAPaZFOOqqiCbV.png"
        />
        <h2>ChatBot</h2>
        <span  id="close-chatbot" style='    top: 10px;
        cursor: pointer;
    right: 12px;
    position: absolute;
    font-size: 24px;'>X</span>
      </div>
      <main id='mes-main' style=" grid-row: 2;
    overflow: auto;

        padding: 30px 25px;
        letter-spacing: 1.5px;
        font-weight: 600;">
       <div >
         <div style="background-color: white;
        border-radius: 20px 20px 20px 5px;
        padding: 15px 17px;
        display: inline-block;
        margin-bottom: 25px;">Hi! I'm Mr. Chatbot 😎 and how can I help you</div>
       </div>
        
      </main>
      <footer style=" display: flex;
          padding: 0  20px ;
          background-color: white;
        border-radius: 0 0 15px 15px;">
        <input id='input-mes' style=' outline: none;
          background-color: white;
          color:black;
          flex: 1;
          padding: 14px 0;
          line-height: 20px;
          font-size: 16px;
          border: none;
          margin-bottom: 10px;'type="text" placeholder="Type your massage here"/>
        <svg id='send-meg' style=" width: 26px;
        cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><path fill="#d7d7d7" d="M22,11.7V12h-0.1c-0.1,1-17.7,9.5-18.8,9.1c-1.1-0.4,2.4-6.7,3-7.5C6.8,12.9,17.1,12,17.1,12H17c0,0,0-0.2,0-0.2c0,0,0,0,0,0c0-0.4-10.2-1-10.8-1.7c-0.6-0.7-4-7.1-3-7.5C4.3,2.1,22,10.5,22,11.7z"></path></svg>
      </footer>
    </div> `;


// itsert chatbot
document.querySelector('body').insertAdjacentHTML('afterend', toggle);

document.querySelector('body').insertAdjacentHTML('afterend', chatBox);


const chatClose = document.getElementById('close-chatbot');
const chatBoxsf = document.getElementById('chatbot-box-all');
const toggleLogo = document.getElementById('chat-box-logo');

const main = document.getElementById('mes-main');
const send = document.getElementById('send-meg');
const input = document.getElementById('input-mes');

chatBoxsf.style.display = 'none'

// add toggle event 
toggleLogo.addEventListener('click', () => {
    chatBoxsf.style.display = 'grid';
    toggleLogo.style.display = 'none'


})

// close chat
chatClose.addEventListener('click', () => {
    chatBoxsf.style.display = 'none';
    toggleLogo.style.display = 'inline'
})


// mess send
send.addEventListener('click', () => {
    if (input.value) {
        main.innerHTML += `<div >
         <div style="background-color: #0066ff;
        border-radius: 20px 20px  5px 20px;
        padding: 15px 17px;
        margin-bottom: 25px;
        float: right;
        color: white;
        ">${input.value}</div>
       </div> `;
       input.value=''
        setTimeout(() => main.innerHTML +=`<div >
         <div style="background-color: white;
        border-radius: 20px 20px 20px 5px;
        padding: 15px 17px;
        display: inline-block;
        margin-bottom: 25px;">Thank you for your message!</div>
       </div>`, 600)
    }

})
