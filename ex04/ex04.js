const lista = document.getElementById("lista");
const inputNome = document.getElementById("inputNome");
const btInserir = document.getElementById("btInserir");
const btCriarLista = document.getElementById("btCriarLista");

function inserir() {
  const nome = inputNome.value.trim();
  if (nome) {
    // lista.innerHTML += `<li>${nome}</li>`;
    const nodeLi = document.createElement("li");
    const nodeText = document.createTextNode(nome);
    nodeLi.appendChild(nodeText);
    lista.appendChild(nodeLi);
    inputNome.value = "";
  }
  inputNome.focus();
}

function limpar() {
  lista.innerHTML = "";
  inputNome.value = "";
  inputNome.focus();
}

function capturarEnter(event) {
  if (event.keyCode === 13) {
    btInserir.click();
  }
}

function criarLista() {
  lista.innerHTML = "";
  for (let i = 1; i <= 10; ++i) {
    lista.innerHTML += `<li>${i}</li>`;
  }
}

function inputNomeOnFocus() {
  console.log("Entrou no input nome");
}

function inputNomeOnBlur(event) {
  console.log("Saiu do input nome");
  if (!inputNome.value) {
    alert("Precisa digitar o nome!");
  }
}

function handleListaMouseOver() {
  console.log("on mouse over");
}

function handleListaMouseEnter() {
  console.log("on mouse enter");
}

function handleInputNomeChange(event) {
  console.log(event);
  console.log("valor atual = ", event.target.value);
  console.log("onChange");
}

btInserir.onclick = inserir;
document.getElementById("btLimpar").onclick = limpar;

inputNome.onkeyup = capturarEnter;
inputNome.onfocus = inputNomeOnFocus;
inputNome.onblur = inputNomeOnBlur;
inputNome.onchange = handleInputNomeChange;

lista.onmouseover = handleListaMouseOver;
lista.onmouseenter = handleListaMouseEnter;

btCriarLista.onclick = criarLista;
