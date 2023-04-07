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

function automate(x){
let i=0,j=0;
let shiro = document.getElementsByClassName("slides");

shiro[x].style.display = "block";

if(x === 1){
  
  shiro[0].style.display = "none";
}

for(j=x-1;j>=0;j--){
  shiro[j].style.display = "none";
  console.log("hello");

}

for(i=x+1;i<shiro.length;i++){
  shiro[i].style.display = "none";
  console.log("hello");

}

}


let mydog = 0;
function doggy(){
  
  if(mydog === 6){
    mydog = 0;
  }
    automate(mydog);
    mydog = mydog+1;
    console.log(mydog);
   
}

setInterval(doggy, 2400);

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



