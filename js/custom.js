/* 

1. Add your custom JavaScript code below
2. Place the this code in your template:

  

*/
function copyToClipboard() {
    const copyText = document.getElementById("address");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    // alert("Copied the text: " + copyText.value);
  }
  