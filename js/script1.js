// Email script 
function sendMail() {
	let params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
        subject : document.getElementById("subject").value,
		phone: document.getElementById("phone").value,
		text: document.getElementById("text").value,
	}

	emailjs.send("service_o2cybmf", "template_rkx6aio",params).then(alert("Email sent successfully ! Yay !"))
}