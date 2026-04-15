function adicionarTarefa() {
  var input = document.getElementById("tarefa");
  var texto = input.value;

  if (texto == "") {
    alert("Digite uma tarefa");
    return;
  }

  var li = document.createElement("li");
  li.innerText = texto;

  li.onclick = function () {
    li.remove();
  };

  var lista = document.getElementById("lista");
  lista.appendChild(li);

  input.value = "";
}
