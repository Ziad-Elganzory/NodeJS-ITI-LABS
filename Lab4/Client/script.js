const socket = io();

let msg_Container = document.getElementById("msg-container");
let form = document.getElementById("form");
let msg_input = document.getElementById("msg-input");

let name = prompt("What is your name?");
sendMessage("You joined...");
socket.emit("new-user", name);

socket.on("chat-message", (data) => {
  sendMessage(`${data.name}: ${data.message}`);
});

socket.on("user-connected", (name) => {
  sendMessage(`${name} connected`);
});

socket.on("user-disconnected", (name) => {
  sendMessage(`${name} disconnected`);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = msg_input.value;
  sendMessage(`You: ${message}`);
  socket.emit("send-chat-message", message);
  msg_input.value = "";
});

function sendMessage(message) {
  let msg = document.createElement("div");
  msg.id = "msg-div";
  msg.classList = "mt-3 py-2 w-50 text-white ps-4 rounded-3";
  msg.innerHTML = `<p class="m-0">${message}</p>`;
  msg_Container.append(msg);
  msg_Container.scrollTop = msg_Container.scrollHeight;
}
