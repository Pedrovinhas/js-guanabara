function Contar() {
  var inicio = document.getElementById("inicio").value;
  var passo = document.getElementById("passo").value;
  var fim = document.getElementById("fim").value;
  var res = document.getElementById("res");

  if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
    res.innerHTML = "Opa, você esqueceu de digitar um valor. Tente novamente.";
  } else if (passo <= 0) {
    res.innerHTML =
      "Opa... o passo não pode ser igual ou menor a 0. Tente novamente.";
  } else {
    var i = Number(inicio);
    var p = Number(passo);
    var f = Number(fim);

    if (i < f) {
      for (i; i <= f; i += p) {
        res.innerHTML += `${i}\u{1F499}`;
      }
    } else {
      for (i; i >= f; i -= p) {
        res.innerHTML += ` ${i} \u{1F449} `;
      }
    }

    res.innerHTML += "\u{1F3C1}";
  }
}
