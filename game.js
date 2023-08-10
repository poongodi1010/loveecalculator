
var started = false;
    document.getElementById("youcheck").style.display = "none";
    document.getElementById("partnercheck").style.display = "none";

document.getElementById("btn-submit").addEventListener('click', function(event) {
  event.preventDefault();


  var nameValue = document.getElementById("name").value;
  var partnerValue = document.getElementById("mail").value;
    var letters = /^[A-Za-z]+$/;

  if ((nameValue.length === 0) && (partnerValue.length === 0) ){
    document.getElementById("youcheck").style.display = "block";
    document.getElementById("partnercheck").style.display = "block";
    started = false;
  }
  else
   if ((nameValue.length !== 0) && (partnerValue.length === 0) ) {
    document.getElementById("youcheck").style.display = "none";
    document.getElementById("partnercheck").style.display = "block";
    started = false;
  }
else
  if ((nameValue.length === 0) && (partnerValue.length !== 0) ) {
    document.getElementById("youcheck").style.display = "block";
    document.getElementById("partnercheck").style.display = "none";
    started = false;

  }
  else if ((!nameValue.match(letters)) && (!partnerValue.match(letters))) {
      document.getElementById("youcheck").innerHTML = "Enter Alphabet characters only..!!!";
      document.getElementById("partnercheck").innerHTML = "Enter Alphabet characters only..!!!";
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
      loveMsg.innerHTML = `💕Your love percentage is ${loveNum}%  🤗
      You both are like Tom and Jerry even though you fight many times you wont be apart😍
      Cheers..!!!❤❤❤`;

    } else if (loveNum <= 50) {
      document.getElementById("forum").innerHTML = `❣Your love percentage is ${loveNum}% 🤗 
      You both are like bread and Jam and you both are inseparable🥰
      Cheers..!!!❤❤❤`;
    }
  }
}
