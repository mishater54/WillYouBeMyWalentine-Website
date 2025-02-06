function handleYesClick() {
    window.location.href = "yes_page.html";
}

document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector('.no_button');

    button.addEventListener('mouseover', function() {
        let maxX = window.innerWidth - button.clientWidth;
        let maxY = window.innerHeight - button.clientHeight;
        
        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;

        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    });
});