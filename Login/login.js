// ---------- CONFIGURAÇÃO DE USUÁRIOS (VOCÊ VAI EDITAR DEPOIS) ----------
// Aqui você coloca seu primeiro nome e matrícula.
// Se for dupla, coloque os dois usuários.

const usuariosValidos = [
  {
    nome: "pedro",     // exemplo — você vai editar depois
    matricula: "1291392522025" // exemplo — você vai editar depois
  },
  {
    nome: "leticia",      // exemplo dupla
    matricula: "1291392522016"
  }
];

// ----------------------------------------------------------------------

const form = document.getElementById("login-form");
const nomeInput = document.getElementById("nome");
const senhaInput = document.getElementById("senha");
const msg = document.getElementById("login-msg");

function validarLogin(nome, senha) {
  const nomeDigitado = nome.toLowerCase().trim();

  // verifica se existe algum usuário válido
  return usuariosValidos.some(user =>
    user.nome === nomeDigitado && user.matricula === senha
  );
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = nomeInput.value.trim();
  const senha = senhaInput.value.trim();

  // -------- VALIDA CAMPOS VAZIOS --------
  if (nome === "" || senha === "") {
    msg.style.color = "red";
    msg.textContent = "Preencha todos os campos!";
    return;
  }

  // -------- VALIDA LOGIN --------
  if (validarLogin(nome, senha)) {
    msg.style.color = "green";
    msg.textContent = "Login bem-sucedido! Redirecionando...";

    setTimeout(() => {
      window.location.href = "../pedido/pedido.html";
    }, 1000);
  } else {
    msg.style.color = "red";
    msg.textContent = "Nome ou RA incorretos.";
  }
});