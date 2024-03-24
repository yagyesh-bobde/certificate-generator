let userNameInput = document.getElementById('userName');
let certificateImageContainer = document.getElementById('certificateImageContainer');
let certificateTemplate = document.getElementById('certificateTemplate');
let generatedCertificateDiv = document.getElementById('generatedCertificate');

let userName = '';
let mouseX = 0;
let mouseY = 0;

certificateImageContainer.addEventListener('click', function(event) {
    mouseX = event.clientX - certificateImageContainer.offsetLeft;
    mouseY = event.clientY - certificateImageContainer.offsetTop;

    if (userName !== '') {
        generateCertificate();
    }
});

let certificateForm = document.getElementById("certificateForm");

certificateForm.addEventListener("submit", function(event) {
    event.preventDefault();
    downloadCanvasImage();
});

userNameInput.addEventListener('input', function(event) {
    userName = event.target.value;
});

function generateCertificate() {
  let canvas = document.getElementById("canvas");
//   let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");


  const img = new Image()

  img.onload = () => {
      canvas.width = certificateTemplate.width;
      canvas.height = certificateTemplate.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      // Set text properties
      ctx.fillStyle = "white";
      ctx.font = "30px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      ctx.fillText(userName, mouseX, mouseY);
  }

  img.src="./1.jpg"
  //   // Position and draw the user's name onto the certificate
  
}


  // Function to download canvas image
function downloadCanvasImage() {
    let canvas = document.getElementById("canvas");
    var downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL('image/jpg');
    downloadLink.download = 'canvas_image.png';
    downloadLink.click();
  }