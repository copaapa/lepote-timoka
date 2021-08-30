function validateForm() {

    var name = document.getElementById("inputName").value;
    var surname = document.getElementById("inputSurname").value;
    var email = document.getElementById("inputEmail").value;
    var terms = document.getElementById("gridCheck");
    var message = document.getElementById("inputMessage").value;
  
    if (name.length == 0) {
      alert("Unesite ime");
      return false;
    }
    if (surname.length == 0) {
      alert("Unesite prezime");
      return false;
    }
    if (email.indexOf("@") == -1) {
      alert("Unesite ispravnu e-mail adresu");
      return false;
    }
    if (message.length >= 500) {
      alert("Dozvoljeno je uneti maksimalno 500 karaktera");
      return false;
    }
    if (message.length == 0) {
      alert("Unesite poruku");
      return false;
    }
    if (terms.checked == false) {
      alert("Morate se složiti sa uslovima korišćenja");
      return false;
    }
    var contactToCreate = { 
      name: document.getElementById("inputName").value,
      surname: document.getElementById("inputSurname").value,
      email: document.getElementById("inputEmail").value,
      message: document.getElementById("inputMessage").value
    };

    //Deklarisanje varijable u koju cemo smestiti konvertovani JSON niz u JS niz objekata 
    //Dodavanje objekta u NIZ iz JSON fajla contact.json (koji smo pretvorili u JS niz objekata) (Funkcija i varijabla niza u f2.js!)
    contactArray.push(contactToCreate);
    // Tako dobijeni JS niz objekata se konvertuje u JSON format spreman za upis nazad u fajl... 
    var contactArrayJSON = JSON.stringify(contactArray);
    //Provera konverzije u JSON
    HttpPost(contactArrayJSON,"/api/contact");
  }