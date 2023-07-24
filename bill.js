

var breakfast = 30;
    var lunch = 45;
    var dinner = 40;

    var total = 0;
    var check = 1;
    var gw;
    var sfruit;
    var perkg;
    var adder = document.querySelector("#getme");
    adder.addEventListener("click", getMe);
    var by = document.querySelector("#out");
    by.addEventListener("click", checkOut);
    var cme = document.querySelector("#clr");
    cme.addEventListener("click", clearMe);

    function getMe() {
      sfruit = document.querySelector("#sf").value;
      perkg = parseFloat(document.querySelector("#entrybox").value);
      gw = document.querySelector("#writeme");
      if (Number.isNaN(perkg) === true) {
        alert("Only Numbers !!! Or The Field is Empty");
        check = 0;
      }
      else if (perkg<0) {
        alert("Negative value!! ");
        check = 0;
      }
      else{
        check = 1;
      }
      if (check == 1) {

        switch (sfruit) {
          case "Breakfast":
            var st = breakfast * perkg;
            gw.value += "Breakfast " + perkg + " coupons = " + st + " rs\r";
            total += st;
            perkg.value = "";
            break;
          case "Lunch":
            var at = lunch * perkg;
            gw.value += "Lunch " + perkg + " coupons = " + at + " rs\r";
            total += at;
            perkg.value = "";
            break;
          case "Dinner":
            var gr = dinner * perkg;
            gw.value += "Dinner " + perkg + " coupons = " + gr + " rs\r";
            total += gr;
            perkg.value = "";
            break;

        }

      }
    }

    function checkOut() {
      gw.value += "--------------------------------------------------------------\r";
      gw.value += "Your Total Bill Is = " + total + " \r";
      gw.value += "--------------------------------------------------------------\r";
      total = 0;
    }
    function clearMe () {
      gw.value = "";
    }
