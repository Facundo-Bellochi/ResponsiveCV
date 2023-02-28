var emailAddress = document.getElementById("emailAddress");

emailAddress.addEventListener("click", function() {

  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = this.textContent;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  alert("El correo electrónico se ha copiado en el portapapeles.");

});


var colorBtn = document.getElementById("boton");
var isColorOriginal = true;
colorBtn.addEventListener("click", function() {

  if (isColorOriginal) {
    document.body.style.background = "lightblue";
  } else {
    document.body.style.background = "pink";
  }
  isColorOriginal = !isColorOriginal;

});