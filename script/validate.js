function validarDados() {
  window.event.preventDefault();
  let usuario = document.form.email.value.substring(
    0,
    document.form.email.value.indexOf("@")
  );
  let dominio = document.form.email.value.substring(
    document.form.email.value.indexOf("@") + 1,
    document.form.email.value.length
  );

  let reMaiusculas = /[A-Z]/g;
  let reMinusculas = /[a-z]/g;
  let reNumerais = /[0-9]/g;

  if (
    usuario.length >= 1 &&
    usuario.length <= 32 &&
    usuario.search(reMaiusculas) !== -1 &&
    usuario.search(reMinusculas) !== -1 &&
    usuario.search(reNumerais) !== -1 &&
    usuario.includes(".") &&
    usuario.indexOf("@") === -1 &&
    dominio.length >= 1 &&
    dominio.length <= 16 &&
    dominio.search(reMaiusculas) <= 0 &&
    dominio.search(reMinusculas) !== -1 &&
    dominio.search(reNumerais) !== -1 &&
    dominio.includes(".") &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    if (document.form.mensagem.value.trim() === "") {
      alert("Erro no envio: Insira uma mensagem");
      document.form.mensagem.focus();
    } else {
      alert("Obrigado pelo contato, " + usuario);
    }
  } else {
    alert("Erro no envio: Endereço de mail inválido");
    document.form.email.focus();
  }
}

document.querySelector("form").addEventListener("submit", validarDados);
