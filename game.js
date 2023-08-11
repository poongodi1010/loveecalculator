var started = false;
document.getElementById("youcheck").style.display = "none";
document.getElementById("partnercheck").style.display = "none";

var alpha = false;

function nospace() {
  if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || event.keyCode === 32 || event.keyCode === 8) {
    alpha = true;
    return true;

  } else {
    alert("Please enter only alphabets");
    alpha = false;
    return false;
    started = false;
  }
}


document.getElementById("btn-submit").addEventListener('click', function(event) {
  event.preventDefault();


  var nameValue = document.getElementById("name").value;
  var partnerValue = document.getElementById("mail").value;

  var nameValueTrimmed = nameValue.trim();
  var partnerValueTrimmed = partnerValue.trim();

  if ((nameValueTrimmed === '') && (partnerValueTrimmed === '')) {
    console.log("inside 1");
    document.getElementById("youcheck").style.display = "block";
    document.getElementById("partnercheck").style.display = "block";
    started = false;
  } else
  if ((nameValueTrimmed !== '') && (partnerValueTrimmed === '')) {
    document.getElementById("youcheck").style.display = "none";
    document.getElementById("partnercheck").style.display = "block";
    started = false;
  } else
  if ((nameValueTrimmed === '') && (partnerValueTrimmed !== '')) {
    console.log("inside 3");
    document.getElementById("youcheck").style.display = "block";
    document.getElementById("partnercheck").style.display = "none";
    started = false;

  } else if (alpha === true) {
    started = true;
    percent();
  } else {
    alert("Please enter characters only...!");
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
