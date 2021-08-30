


//Funkcija za citanje JSON fajla

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
  }

  var contactArray;

  //Poziv funkcije za citanje JSON fajla - sa navedenim fajlom i konvertovanjem sadrzaja u JS niz objekata    
  readTextFile("/json/contact.json", function(text){
      contactArray = JSON.parse(text);
      });
      
      var subscribeArray;
      readTextFile("/json/subscribe.json", function(text){
        subscribeArray = JSON.parse(text);
        });


// OVA JE FUNKCIJA KOJA OMOGUCAVA DOWNLOAD GOTOVOG JSON FAJLA - u ovom slucaju nije primenjiva ali je korisna
//    function downloadTextFile(text, name) {
//     const a = document.createElement('a');
//     const type = name.split(".").pop();
//     a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
//     a.download = name;
//     a.click();
//   }
  
// //   downloadTextFile(JSON.stringify(myObj), 'myObj.json');

//U NASEM SLUCAJU A U DRUGOM fajlu na kraju forma.js poziv bi bio:
// //   downloadTextFile(JSON.stringify(contactArrayJSON), 'contact.json');
