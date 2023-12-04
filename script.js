const sendButton = document.querySelector(".chat-input span");
const textArea = document.querySelector(".chat-input textarea");
const chatbox = document.querySelector(".chatbox");
const now = new Date();
const datetime = now.toLocaleString();

let userMessage;
let messageHint;
let messageHint2;

document.getElementById("datetime").innerHTML = datetime;

const createChatli = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<div class="row"><span class="name">You</span><span class="content">${message}</span><span class="time">${datetime}</span><div>`
      : `<div class="row"><span class="name">Jamie</span><span class="content">${message}</span><span class="time">${datetime}</span><div>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const handleChat = () => {
  userMessage = textArea.value.trim();
  if (!userMessage) return;
  messageHint = userMessage.substring(userMessage.length - 2);
  messageHint2 = userMessage.substring(userMessage.length - 1);

  chatbox.appendChild(createChatli(userMessage, "outgoing"));

  if (userMessage === "Jamie" || userMessage === "jamie") {
    chatbox.appendChild(createChatli("Can I help you?", "incoming"));
  } else if (messageHint === "!?" || messageHint === "?!") {
    chatbox.appendChild(
      createChatli("Please give me some time to resolve the issue", "incoming")
    );
  } else if (messageHint2 === "!") {
    chatbox.appendChild(createChatli("Please remain calm", "incoming"));
  } else if (messageHint2 === "?") {
    chatbox.appendChild(createChatli("Yes", "incoming"));
  } else {
    chatbox.appendChild(createChatli("Sorry, I don't understand", "incoming"));
  }
  textArea.value = "";
};

sendButton.addEventListener("click", handleChat);
