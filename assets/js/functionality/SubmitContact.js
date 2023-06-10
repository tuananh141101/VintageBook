// const submitContact = document.getElementById("submit_contact");

// submitContact.addEventListener('click', function checkValidate() {
//     const nameInput = document.getElementById("name_Input");
//     const emailInput = document.getElementById("email_Input");
//     const emailRegex = /\S+@\S+\.\S+/;

//     if (nameInput.value.trim() === "" || !emailRegex.test(emailInput.value)) {
//         alert("Please enter all required information accurately");
//     } else {
//         alert("Thank you");
//     }

// });
function sendMail() {
    let params = {
        name: document.getElementById('name_Input').value,
        email: document.getElementById('email_Input').value,
        message: document.getElementById('mes_Textarea').value,
    };
    const serviceId = "service_ue88zjb";
    const templateId = "template_2tgp5ve";
    
    emailjs
    .send(serviceId,templateId,params)
    .then((res)=> {
        document.getElementById('name_Input').value = "",
        document.getElementById('email_Input').value = "",
        document.getElementById('mes_Textarea').value = "",
        console.log(res);
        alert("Your message send successfully")
    })
    .catch((err) => console.log(err));
}
