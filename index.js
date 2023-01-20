 function sendEmail () {
    let params = {
        name: document.getElementById("name").value, 
        email: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value,
    }
 
 const serviceID = "service_t6npmdh";
 const templateID = "template_kfqt5f6";

 email.send(serviceID, templateID, params).then ((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
    console.log(res);
    alert("Tu mensaje se ha enviado.");
 }
 )
 .catch((err) => console.log(err));
}

