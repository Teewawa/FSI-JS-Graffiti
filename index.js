// Select some elements...

//Align the header to the left
let header = document.querySelector("#page-header");
header.style.textAlign = "left";

//Iterate through all dogImages and set border radius to 50px
//Flip the images so they are upside down
let dogImages = document.querySelectorAll(".dog-image");
for (let i = 0; i < dogImages.length; i++) {
  dogImages[i].style.borderRadius = "50px";
  dogImages[i].style.transform = "rotate(180deg)";
}
//Align dogs' name to left
let dogNames = document.querySelectorAll(".dog-name");
for (let i = 0; i < dogNames.length; i++) {
  dogNames[i].style.textAlign = "left";
}

//Change color of footer text
let footerText = document.querySelector(".footer");
footerText.style.color = "blue";

//Note variables here are defined as a DOM Element
