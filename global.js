window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("navBar").style.backgroundColor = "#0a0a11";
    document.getElementById("navBar").style.boxShadow = "0 0 30px #000000";
  } else {
    document.getElementById("navBar").style.backgroundColor = "#0a0a1100";
    document.getElementById("navBar").style.boxShadow = "0 0 30px #00000000";
  }
}

console.log("💗 I'm not sure what you're doing in the console but I hope you're having a nice day! ^_^")