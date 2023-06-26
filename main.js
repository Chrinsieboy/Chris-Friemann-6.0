function scrollToTop() {
    // Scroll to top logic
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToProjects() {
    // Scroll to the projects section with a 100px offset
    window.scrollTo({
        top: document.getElementById("projects").offsetTop - 100,
        behavior: "smooth"
    });
}

function scrollToAboutMe() {
    // Scroll to the about me section with a 100px offset
    window.scrollTo({
        top: document.getElementById("about-me").offsetTop - 150,
        behavior: "smooth"
    });
}

function scrollToCoffee() {
    // Scroll to the contact section with a 100px offset
    window.scrollTo({
        top: document.getElementById("coffee").offsetTop - 150,
        behavior: "smooth"
    });
}

async function fetchApi() {
    const response = await fetch('https://api.capy.lol/v1/capybara?json=true');
    const data = await response.json();
    console.log(data);
    return data;
}

// Get the api on page load
fetchApi();