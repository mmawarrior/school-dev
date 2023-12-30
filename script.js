document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.getElementById("navbarToggle");
    const navbarLinks = document.getElementById("navbarLinks");
    const pages = document.querySelectorAll(".content > div");
    const navLinks = document.querySelectorAll(".navbar-links a");

    navbarToggle.addEventListener("click", function () {
        navbarLinks.classList.toggle("show");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove 'active' class from all links
            navLinks.forEach(navLink => navLink.classList.remove("active"));

            // Add 'active' class to the clicked link
            link.classList.add("active");

            // Handle other actions if needed, such as showing the corresponding page
            const pageId = link.getAttribute("href").substring(1);
            console.log(`Clicked on ${pageId} link`);
            showPage(pageId);

            // Close the menu for smaller screens
            navbarLinks.classList.remove("show");
        });
    });

    // Function to show a specific page based on its ID
    function showPage(pageId) {
        // Hide all pages by adding the "hidden" class
        pages.forEach(page => page.classList.add("hidden"));

        // Find and show the selected page by removing the "hidden" class
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.remove("hidden");
        } else {
            console.error(`Page with ID ${pageId} not found.`);
        }
    }

    // Select all navigation links in the main navbar
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const pageId = e.target.getAttribute("href").substring(1);
            console.log(`Clicked on ${pageId} link`);
            showPage(pageId);
        });
    });
});
