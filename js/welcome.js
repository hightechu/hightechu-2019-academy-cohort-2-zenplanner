
popout = document.querySelector('#popout');
popout.style.display = 'none';

function showMenu() {
    if (popout.style.display === "none") {
        popout.style.display = "";
    } else {
        popout.style.display = "none";
    }
  }