function validarCadastro() {
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  // Regex: pelo menos 1 maiúscula
  const temMaiuscula = /[A-Z]/.test(senha);

  // Regex: pelo menos 1 caractere especial
  const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

  // Verificações
  if (senha.length < 8) {
    alert("A senha deve ter no mínimo 8 caracteres");
    return false;
  }

  if (!temMaiuscula) {
    alert("A senha deve ter pelo menos 1 letra maiúscula");
    return false;
  }

  if (!temEspecial) {
    alert("A senha deve ter pelo menos 1 caractere especial");
    return false;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não são iguais");
    return false;
  }

  alert("Cadastro realizado com sucesso!");
  return true;
}