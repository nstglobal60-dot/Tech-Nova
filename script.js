function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Select plan and autofill payment amount
function selectPlan(amount) {
    document.getElementById("amount").value = amount;
}

document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;
    let method = document.getElementById("paymentMethod").value;
    let amount = document.getElementById("amount").value;

    if (!method) {
        alert("Please select a payment method.");
        return;
    }

    alert(
        "Payment Successful!\n\n" +
        "Name: " + name +
        "\nEmail: " + email +
        "\nMethod: " + method +
        "\nAmount: $" + amount
    );
});

// Contact form
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent!");
});
