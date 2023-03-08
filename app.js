
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstNameInput = document.getElementById('firstNameInput');
    const lastNameInput = document.getElementById('lastNameInput');
    const emailInput = document.getElementById('emailFormInput');
    const phoneInput = document.getElementById('telInput');
    const textAreaInput = document.getElementById('textAreaInput');

    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        textArea: textAreaInput.value,
    }

    const errors = {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        textArea: false,
    }
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('telError');
    const textAreaError = document.getElementById('textAreaError');
    firstNameError.style.opacity = 0;
    lastNameError.style.opacity = 0;
    emailError.style.opacity = 0;
    phoneError.style.opacity = 0;
    textAreaError.style.opacity = 0;
    const nameRegex = /^[a-zA-Z ]+$/
    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
    const textAreaRegex = /^.{10,}$/

    if (!formData.firstName || !nameRegex.test(formData.firstName)) {
        errors.firstName = true;
        firstNameError.style.opacity = 1;
    }
    if (!formData.lastName || !nameRegex.test(formData.lastName)) {
        errors.lastName = true;
        lastNameError.style.opacity = 1;
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = true;
        emailError.style.opacity = 1;
    }
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
        errors.phone = true;
        phoneError.style.opacity = 1;
    }
    if (!formData.textArea || !textAreaRegex.test(formData.textArea)) {
        errors.textArea = true;
        textAreaError.style.opacity = 1;
    }
    f (!Object.values(errors).includes(true)) {
        console.log(formData)
        // alert("Request sent")
        axios.post("http://212.83.176.255:3030/contact", formData,{

        })
            .then(function (response) {
                console.log(response.data.message);
                formContact.appendChild(document.createTextNode(response.data.message));
            })
    }
})
