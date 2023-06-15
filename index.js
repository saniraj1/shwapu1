var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var imagelinks = document.getElementsByClassName("image-links");
var imagecontents = document.getElementsByClassName("image-contents");
function clicktab(tabname) {
  for (imagelink of imagelinks) {
    imagelink.classList.remove("active-link1");
  }

  for (imagecontent of imagecontents) {
    imagecontent.classList.remove("active-image");
  }
  event.currentTarget.classList.add("active-link1");
  document.getElementById(tabname).classList.add("active-image");
}

// function sendemail() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "thapaujwol8@gmail.com",
//     Password: "CA8D71868A814CCF858AF05D14278EA5EF29",
//     To: "swapu977@gmail.com",
//     From: "thapaujwol8@gmail.com",
//     Subject: "This is the subject",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// }
