
var started = false;
    document.getElementById("youcheck").style.display = "none";
    document.getElementById("partnercheck").style.display = "none";

document.getElementById("btn-submit").addEventListener('click', function(event) {
  event.preventDefault();


  var nameValue = document.getElementById("name").value;
  var emailValue = document.getElementById("mail").value;

  if ((nameValue.length === 0) && (emailValue.length === 0) ){
    document.getElementById("youcheck").style.display = "block";
    document.getElementById("partnercheck").style.display = "block";
    started = false;
  }
  else
   if ((nameValue.length !== 0) && (emailValue.length === 0) ) {
    document.getElementById("youcheck").style.display = "none";
    document.getElementById("partnercheck").style.display = "block";
    started = false;
  }
else
  if ((nameValue.length === 0) && (emailValue.length !== 0) ) {
    document.getElementById("youcheck").style.display = "block";
    document.getElementById("partnercheck").style.display = "none";
    started = false;

  }
  else {
    started = true;
      percent();
  }
});

function percent() {

  var loveNum = Math.floor(Math.random() * 100) + 1;
  console.log(loveNum);
  if (started === true) {
    var formValue = document.getElementById("forum");
    formValue.classList.add("boxx");


    if (loveNum >= 50) {
      var loveMsg = document.getElementById("forum");
      loveMsg.innerHTML = "💕Your love percentage is " + loveNum + "%" + " 🤗" + "<br/>" + "\nYou both are like \n Tom and Jerry even though you fight many times you wont be apart😍" + "<br>" + "Cheers..!!!❤❤❤";

    } else if (loveNum <= 50) {
      document.getElementById("forum").innerHTML = "❣Your love percentage is " + loveNum + "%" + " 🤗" + "<br/>" + "\nYou both are like \n bread and Jam and you both are inseparable🥰" + "<br>" + "Cheers..!!!❤❤❤";
    }
  }
}
