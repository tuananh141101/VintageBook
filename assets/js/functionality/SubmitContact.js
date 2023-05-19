const submitContact = document.getElementById("submit_contact");

submitContact.addEventListener('click', function checkValidate() {
    const nameInput = document.getElementById("name_Input");
    const emailInput = document.getElementById("email_Input");
    const emailRegex = /\S+@\S+\.\S+/;

    if (nameInput.value.trim() === "" || !emailRegex.test(emailInput.value)) {
        alert("Please enter all required information accurately");
    } else {
        alert("Thank you");
    }

});