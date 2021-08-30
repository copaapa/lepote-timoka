function HttpPost(data,route) {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:5000" + route;
    xhr.open("POST", url,true);
    console.log(data);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Poruka uspesno poslata");
        }           
    };
    xhr.send(data);
    }