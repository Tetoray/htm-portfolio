

var containers = document.querySelectorAll('.project-section');

for (let i = 0; i < containers.length; i++) {
    let container = containers[i];

    // Create a function that captures the current "container" value
    function addHover() {
        container.classList.add('hovered');
    }

    function removeHover() {
        container.classList.remove('hovered');
    }

    // Add event listeners using the created functions
    container.addEventListener('mouseenter', addHover);
    container.addEventListener('mouseleave', removeHover);
}



