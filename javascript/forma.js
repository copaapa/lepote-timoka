function validateForm(){

    var name = document.getElementById("inputName").value;
    var surname = document.getElementById("inputSurname").value;
    var email = document.getElementById("inputEmail").value;
    var terms = document.getElementById("gridCheck");
    var message = document.getElementById("inputMessage").value;
    
    
    if(name.length == 0){
      alert("Unesite ime");
      return false;
    }
    if(surname.length == 0){
      alert("Unesite prezime");
      return false;
    }
    if(email.indexOf("@") == -1){
      alert("Unesite ispravnu e-mail adresu");
      return false;
    }
    if(message.length >= 500){
      alert("Dozvoljeno je uneti maksimalno 500 karaktera");
      return false;
    }
    if(message.length == 0){
      alert("Unesite poruku");
      return false;
    }
    if(terms.checked == false){
      alert("Morate se složiti sa uslovima korišćenja");
      return false;
      }

    alert("Poruka je uspešno poslata!");
    return true;
}