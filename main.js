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
    const response = await fetch('https://api.capy.lol/v1/capybaras?json=true');
    const content = await response.json();
    
    const container = document.getElementById('carousel');
    
    // Loop through the api and create a div for each item
    content.data.forEach(item => {
        console.log(item);
        const div = document.createElement('div');
        const img = document.createElement('img');

        div.className = 'glide__slide';

        img.className = 'project-image';
        img.src = item.url;
        img.alt = item.alt;
        div.appendChild(img);
        container.appendChild(div);
    });

    // Initialize the carousel when the api is fetched
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 2,
        focusAt: 'center',
        keyboard: false,
        autoplay: 5000,
        animationDuration: 500,
        animationTimingFunc: 'ease-in-out',
        peek: {
            before: 0,
            after: 0
        },
        gap: -200,
    }).mount();
    return;
}

// Get the api on page load
fetchApi();