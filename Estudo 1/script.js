document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obtém os valores dos campos
    var nome = document.getElementById('nome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var endereco = document.getElementById('endereco').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
  
    // Aqui você pode fazer o processamento ou validação dos dados antes de enviar para o servidor
  
    // Exemplo de exibição dos dados no console
    console.log('Nome: ' + nome);
    console.log('Data de Nascimento: ' + dataNascimento);
    console.log('Endereço: ' + endereco);
    console.log('Email: ' + email);
    console.log('Telefone: ' + telefone);
  
    // Limpa os campos do formulário
    document.getElementById('cadastroForm').reset();
  });