let flag = 0;
function control(x) {
  flag = flag + x;
  show(flag);
}

show(flag);

function show(num) {
  let slide = document.getElementsByClassName("slides");
  if (num == slide.length) {
    flag = 0;
    num = 0;
  }

  if (num < 0) {
    flag = slide.length - 1;
    num = slide.length - 1;
  }

  for (let y of slide) {
    y.style.display = "none";
  }

  slide[num].style.display = "block";
}

function but() {
  let dis = document.getElementById("sidebar");

  dis.style.display = "block";
}

function cut() {
  let dis = document.getElementById("sidebar");

  dis.style.display = "none";
}

function pop() {
  alert(
    "We use cookies to personalize your experience. By continuing to visit this website you agree to our use of cookies."
  );
  
}
setTimeout(pop, 5000);

function logout(){

  alert("You've been Logged Out!")

}
