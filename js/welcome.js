
popout = document.querySelector('#popout');
popout.style.display = 'none';

function showMenu() {
    popout = document.querySelector('#popout');
    if (popout.style.display === "none") {
        popout.style.display = "";
    } else {
        popout.style.display = "none";
    }
  }