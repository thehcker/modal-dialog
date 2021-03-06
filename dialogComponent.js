class DialogComponent {
  alertMessage(id) {
    let modal = document.getElementById("myModal");
    // Get the button that opens the modal
    let btn = document.getElementById("button");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // Get the id for yes button
    let yesBtn = document.getElementById("yes");

    // Get the id for cancel button
    let cancelBtn = document.getElementById("cancel");

    // Get the id for message div
    let messageBtn = document.getElementById("message");

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks on Yes, close the modal
    yesBtn.onclick = function() {
      modal.style.display = "none";
      messageBtn.innerText = "You Just Clicked 'Yes'";
    };

    // When the user clicks on Yes, close the modal
    cancelBtn.onclick = function() {
      modal.style.display = "none";
      messageBtn.innerText = "You Just Clicked 'Cancel'";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
}
let msg = new DialogComponent();
msg.alertMessage("button");
