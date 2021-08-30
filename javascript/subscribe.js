function subscribeVisitor() {
    var email = document.getElementById("tbox").value;
    if (email.indexOf("@") == -1) {
        alert("Unesite ispravnu e-mail adresu");
        return false;
      }
      var subscribeToCreate = { 
        email: document.getElementById("tbox").value
      };

 
   subscribeArray.push(subscribeToCreate);
   // Tako dobijeni JS niz objekata se konvertuje u JSON format spreman za upis nazad u fajl... 
   var subscribeArrayJSON = JSON.stringify(subscribeArray);
   HttpPost(subscribeArrayJSON,"/api/subscribe")
   return true;
  }