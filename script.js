function Converter() {
  var valor = document.getElementById("valor").value;
  var fromCoin = document.getElementById("from-coin").value;
  var toCoin = document.getElementById("to-coin").value;
  var resultado = 0;

  // console.log(valor);
  // console.log(fromCoin);
  // console.log(toCoin);
  // 12 == "12" -> true

  if (fromCoin === toCoin) {
    resultado = valor;
  }

  // from real
  if (fromCoin === "real" && toCoin === "bitcoin")
    resultado = valor * 0.0000051;

  if (fromCoin === "real" && toCoin === "dolar") resultado = valor / 5;

  if (fromCoin === "real" && toCoin === "euro") resultado = valor * 0.18;

  // from dolar
  if (fromCoin === "dolar" && toCoin === "real") resultado = valor * 5;

  if (fromCoin === "dolar" && toCoin === "euro") resultado = valor * 0.91;

  if (fromCoin === "dolar" && toCoin === "bitcoin")
    resultado = valor * 0.000025;

  // from euro
  if (fromCoin === "euro" && toCoin === "real") resultado = valor * 5.51;

  if (fromCoin === "euro" && toCoin === "dolar") resultado = valor * 1.1;

  var BITCOIN = "bitcoin";

  if (fromCoin === "euro" && toCoin === BITCOIN) resultado = valor * 0.000028;

  // from bitcoin
  if (fromCoin === BITCOIN && toCoin === "real") resultado = valor * 192440.0;

  if (fromCoin === BITCOIN && toCoin === "dolar") resultado = valor * 39.224;

  if (fromCoin === BITCOIN && toCoin === "euro") resultado = valor * 35.691;

  resultado = parseFloat(resultado).toFixed(2);

  if (toCoin === "real") resultado += " R$";
  if (toCoin === "dolar") resultado += " $";
  if (toCoin === "euro") resultado += " €";
  if (toCoin === "bitcoin") resultado += " ₿";

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado é " + resultado;
  elementoValorConvertido.innerHTML = valorConvertido;
}