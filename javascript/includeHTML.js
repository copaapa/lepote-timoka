

//Ubacivanje sadrzaja HTML fajlova u drugi HTML fajl

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

includeHTML();


// Prikaz datuma sa formatiranim tekstom
const dateNow = new Date();

const months = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];
const days = ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"];

document.getElementById("date").innerHTML = `${days[dateNow.getDay()]}, ${dateNow.getDate()} ${months[dateNow.getMonth()]}  ${dateNow.getFullYear()} </div>
<br> 
<div id="time"></div>`;






//Prikaz trenutnog vremena u 24h formatu 
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

startTime();






//Prikaz Vesti

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

var newsArray;
//usage:
readTextFile("/json/news.json", function (text) {
  newsArray = JSON.parse(text);

});





var dataElementsNews = document.getElementById("vesti");


var news = 0;

function newsLoop() {
  setTimeout(function () {
    dataElementsNews.innerHTML =
      `<h5 class="p-2 text-left bg-black">${newsArray[news].date} - ${newsArray[news].place}</h5>
          <p class="text-center p-2">${newsArray[news].news}<p>`;
    news++;
    if (news < newsArray.length) {
      newsLoop();
    } else {
      news = 0;
      newsLoop();
    }
  }, 3000)
}

newsLoop();





//Prikaz komentara posetilaca
var commentsArray;
//usage:
readTextFile("/json/comments.json", function (text) {
  commentsArray = JSON.parse(text);

});

var dataElementsComments = document.getElementById("komentari");

var comments = 0;

function commentsLoop() {
  setTimeout(function () {
    dataElementsComments.innerHTML =
      `<img src="${commentsArray[comments].personImg}">
          <blockquote class="p-3">
          <q class="p-2 text-left bg-black">${commentsArray[comments].comment}
          </q>
          <cite class="text-right font-weight-bold"> &mdash; ${commentsArray[comments].namePlace}</cite>
          </blockquote>`;
    comments++;
    if (comments < commentsArray.length) {
      commentsLoop();
    } else {
      comments = 0;
      commentsLoop();
    }
  }, 5000)
}

commentsLoop();



//Modal za prikaz slika iz galerije

function showImage(imgId) {
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(imgId);
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

}





//Menjanje jezika na stranici

function setHref() {
  var str = window.location.pathname;

  if(str[str.length - 6] !== "2") {
      const insertAt = (str, sub, pos) => `${str.slice(0, pos)}${sub}${str.slice(pos)}`;
      var strIn = insertAt(str, '2', -5);
      var a = document.getElementById('lang');
      a.href = strIn;

  } else if (str[str.length - 6] === "2") {
      const insertAt = (str, sub, pos) => `${str.slice(0, pos - 1)}${sub}${str.slice(pos)}`;
      var strIn = insertAt(str, '', -5);
      var a = document.getElementById('lang');
      a.href = strIn;
  }


}


//Funkcija za responsive meni
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
