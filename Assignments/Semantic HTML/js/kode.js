var showMeTheMoney = function (e) {
    if(document.getElementById(e).style.display=='none' || document.getElementById(e).style.display == "") {
      document.getElementById(e).style.display = 'inline'
    } else {
      document.getElementById(e).sytle.display = 'none'
    };
}
