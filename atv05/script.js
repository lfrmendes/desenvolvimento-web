const valorConta = 100;
const percentualGorjeta = 15;

const somarGorjeta = () => {
  return (valorConta * percentualGorjeta) / 100;
};

const somarValorTotal = () => {
  const gorjeta = somarGorjeta();
  const valorTotal = valorConta + gorjeta;

  console.log("Valor da conta:", valorConta);
  console.log("Gorjeta:", gorjeta);
  console.log("Total a pagar:", valorTotal);
};

somarValorTotal();
