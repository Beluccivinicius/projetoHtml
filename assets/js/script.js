let nome = document.getElementById("input-nome");
let email = document.getElementById("input-email");
let assunto = document.getElementById("input-assunto");

let assuntoOk = false;
let emailOk = false;
let nomeOk = true;

let button = document.getElementById("button-send-forms");
let mapa = document.getElementById("mapa");

nome.style.border = "1px solid #A06739";
email.style.border = "1px solid #A06739";
assunto.style.border = "1px solid #A06739";
assunto.style.height = "50px";

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (assuntoOk && emailOk && nomeOk) {
    alert("messagem enviado, muito obrigado");
    // Location.reload();
  } else {
    alert("arrume o formulario por favor");
  }
});

const validaNome = () => {
  let messageText = document.getElementById("textNome");
  messageText.style.marginTop = "20px";
  messageText.style.textTransform = "upperCase";

  if (nome.value.length < 2) {
    nome.style.border = "3px solid #CA3232";
    nome.style.color = "#CA3232";
    messageText.style.color = "#CA3232";
    messageText.innerHTML = "nome inválido";
  } else {
    nome.style.border = "3px solid green";
    nome.style.color = "green";
    messageText.innerHTML = "nome valido";
    messageText.style.color = "green";
    nomeOk = true;
  }
};

const validaEmail = () => {
  let messageText = document.getElementById("textEmail");
  messageText.style.marginTop = "20px";
  messageText.style.textTransform = "upperCase";

  let emailRegex = /\S+@\S+\.\S+/;

  if (emailRegex.test(email.value)) {
    email.style.border = "3px solid green";
    email.style.color = "green";
    messageText.innerHTML = "email valido";
    messageText.style.color = "green";
    emailOk = true;
    return;
  }

  email.style.border = "3px solid red";
  email.style.color = "#CA3232";
  messageText.style.color = "#CA3232";
  messageText.innerHTML = "email inválido";
};

const validaAssunto = () => {
  let messageText = document.getElementById("textAssunto");
  messageText.style.textTransform = "upperCase";

  if (assunto.value.length > 100) {
    assunto.style.border = "3px solid #CA3232";
    assunto.style.color = "#CA3232";
    messageText.style.color = "#CA3232";
    messageText.innerHTML = "Assunto muito grande";
    assuntoOk = false;
  } else {
    assunto.style.border = "3px solid green";
    assunto.style.color = "green";
    messageText.style.color = "green";
    messageText.innerHTML = "assunto valido";
  }
};

let aumentarMapa = () => {
  mapa.style.height = "650px";
};

let diminuirMapa = () => {
  mapa.style.height = "450px";
};
