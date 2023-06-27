$(document).ready(function() {
  var started = false;
  $("#youcheck").hide();
  $("#partnercheck").hide()

  $(".btn-submit").on("click", function() {
    started = true;
    console.log("inside click");
     var userName1 = $("#name").val();
      var userName2 = $("#mail").val();
      console.log(userName1);
      console.log(userName2);
      console.log(userName1.length);
      console.log(userName2.length);

    if ( (userName1.length ==  0 ) && (userName2.length == 0) ) {
      console.log("inside first if");
      $("#youcheck").show();
      $("#partnercheck").show();
      started = false;
    }
    else if((userName1.length === 0) && (userName2.length !== 0) ) {
      console.log("inside second if");
      $("#youcheck").show();
        $("#partnercheck").hide();
      started = false;
    }
    else if ((userName2.length === 0) && (userName1.length !== 0)) {
      console.log("inside third if");
        $("#partnercheck").show();
        $("#youcheck").hide();
        started = false;
    }
    else {
      percent();
  }

  });

  function percent() {

    var loveNum = Math.floor(Math.random() * 100) + 1;
    console.log(loveNum);
    if (started === true) {
      $(".all").addClass("boxx");


      if (loveNum >= 50) {
        $(".all").html("💕Your love percentage is " + loveNum + "%" + " 🤗" + "<br/>" + "\nYou both are like \n Tom and Jerry even though you fight many times you wont be apart😍" + "<br>" + "Cheers..!!!❤❤❤")

      } else if (loveNum <= 50) {
        $(".all").html("❣Your love percentage is " + loveNum + "%" + " 🤗" + "<br/>" + "\nYou both are like \n bread and Jam and you both are inseparable🥰" + "<br>" + "Cheers..!!!❤❤❤")
      }
    }
  }

  //percent();
});
