function soma_multiplos_3_5(number, final) {
  let soma = 0;
  let visao = [];
  for (let i = number; i < final; i += 1) {
    if (i % 3 == 0 || i % 5 == 0) {
      visao.push(i);
      soma += i;
      console.log(`${visao} = ${soma} `);
    }
  }
  return soma;
}

console.log(soma_multiplos_3_5(0, 10)); // Saída: 23
console.log(soma_multiplos_3_5(0, 11)); // Saída: 33
