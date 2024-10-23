// code to show the information about team members when clicked on their photo
function showInfo(memberId) {
	var memberInfo = document.getElementsByClassName("member-info");
	for (var i = 0; i < memberInfo.length; i++) {
		memberInfo[i].style.display = "none";
	}
	var selectedMember = document.getElementById("member-" + memberId);
	selectedMember.style.display = "block";
}

// code for form validation
// Get the form element
const form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Get the form input elements
  const name = form.querySelector("input[name='name']");
  const email = form.querySelector("input[name='email']");
  const contact = form.querySelector("input[name='contact']");

  // Check if the inputs are empty
  if (name.value === "" || email.value === "" || contact.value === "") {
    alert("Please fill in all the fields.");
    return;
  }

  
  // If all the validation passed, submit the form
  form.submit();
  alert("Form validated successfully!");
});




