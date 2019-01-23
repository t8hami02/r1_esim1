function showPopup() {
  console.log("painiketta painettu");
  alert("Tämä on siis popup");
}

function showName() {
  var theName=document.getElementById('myName').value;
  console.log("nimi = "+theName);
  document.getElementById('result').innerHTML += theName+"<br>";
}

function loadInfo(page) {
  console.log(page);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("info").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", page, true);
  xhttp.send();

}
