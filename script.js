document.getElementById("submitButton").addEventListener("click", function () {
    // Get form values
    const concertId = document.getElementById("concertId").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const quantity = document.getElementById("quantity").value;
    const creditCard = document.getElementById("creditCard").value;
    const expiration = document.getElementById("expiration").value;
    const securityCode = document.getElementById("securityCode").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const postalCode = document.getElementById("postalCode").value;
    const country = document.getElementById("country").value;

    // Create the JSON object
    const formData = {
        ConcertId: concertId,
        Email: email,
        Name: name,
        Phone: phone,
        Quantity: quantity,
        CreditCard: creditCard,
        Expiration: expiration,
        SecurityCode: securityCode,
        Address: address,
        City: city,
        Province: province,
        PostalCode: postalCode,
        Country: country
    };

    // Log the JSON object (you can send this to a server or process further)
    console.log(formData);
});
