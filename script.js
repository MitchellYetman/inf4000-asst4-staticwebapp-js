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
        ConcertId: parseInt(concertId),
        Email: email,
        Name: name,
        Phone: phone,
        Quantity: parseInt(quantity),
        CreditCard: creditCard,
        Expiration: expiration,
        SecurityCode: securityCode,
        Address: address,
        City: city,
        Province: province,
        PostalCode: postalCode,
        Country: country
    };

    console.log(formData)

    // Send the POST request
    fetch("https://nscc0498497-inft4000-api-avbsbxgjetcca4ca.canadacentral-01.azurewebsites.net/api/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // or response.text() if expecting text
        })
        .then(data => {
            console.log("Success:", data);
            alert("Customer submitted successfully!");
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was a problem submitting the form.");
        });
});
