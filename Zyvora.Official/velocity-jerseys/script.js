// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// ============================
// PRODUCT FILTER
// ============================

const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from every button

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate clicked button

        button.classList.add("active");

        const category = button.dataset.category;


        products.forEach(product => {

            const productCategory = product.dataset.category;

            if (
                category === "all" ||
                category === productCategory
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});


// ============================
// WHATSAPP ENQUIRY
// ============================

const enquiryButtons = document.querySelectorAll(".enquire");

enquiryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const productName = button.dataset.product;

        const phoneNumber = "919876543210";

        const message =
            `Hi! I am interested in the ${productName}. Please share more details.`;

        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

});