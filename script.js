document.getElementById('somar').addEventListener('click', function() {

    let valorx = parseFloat(document.getElementById('valor1').value);
    let valory = parseFloat(document.getElementById('valor2').value);
  

    if (!isNaN(valorx) && !isNaN(valory)) {
      console.log('valorx:', valorx);
      console.log('valory:', valory);

      document.getElementById('resultado').value = valorx + valory;
    } else {
      console.error('Por favor, insira números válidos nos campos.');
    }
  });

  document.getElementById('subtrair').addEventListener('click', function() {

    let valorx = parseFloat(document.getElementById('valor1').value);
    let valory = parseFloat(document.getElementById('valor2').value);
  

    if (!isNaN(valorx) && !isNaN(valory)) {
      console.log('valorx:', valorx);
      console.log('valory:', valory);

      document.getElementById('resultado').value = valorx - valory;
    } else {
      console.error('Por favor, insira números válidos nos campos.');
    }
  });

  document.getElementById('multiplicar').addEventListener('click', function() {

    let valorx = parseFloat(document.getElementById('valor1').value);
    let valory = parseFloat(document.getElementById('valor2').value);
  

    if (!isNaN(valorx) && !isNaN(valory)) {
      console.log('valorx:', valorx);
      console.log('valory:', valory);

      document.getElementById('resultado').value = valorx * valory;
    } else {
      console.error('Por favor, insira números válidos nos campos.');
    }
  });

  document.getElementById('dividir').addEventListener('click', function() {

    let valorx = parseFloat(document.getElementById('valor1').value);
    let valory = parseFloat(document.getElementById('valor2').value);
  

    if (!isNaN(valorx) && !isNaN(valory)) {
      console.log('valorx:', valorx);
      console.log('valory:', valory);

      document.getElementById('resultado').value = valorx / valory;
    } else {
      console.error('Por favor, insira números válidos nos campos.');
    }
  });