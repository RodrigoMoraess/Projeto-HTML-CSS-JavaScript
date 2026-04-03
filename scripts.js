function MensagemFeedback() {
    //Recolhendo dados
    let inputName = document.getElementById("name")
    let inputEmail = document.getElementById("email")
    let inputMessage = document.getElementById("comentario")

    // Armazenar dados em variaveis
    let nome = inputName.value
    let email = inputEmail.value
    let comentario = inputMessage.value
    
    // Mostrar dados inseridos pelo usuário pelo comando alert
    alert(`Nome: ${nome}\nEmail: ${email}\nComentário: ${comentario}\nFeedback enviado com sucesso!`)


}