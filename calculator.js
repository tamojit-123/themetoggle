{
    //theme changer
    const checkbox = document.getElementById("checkbox");

    checkbox.addEventListener('change', () => {
        // Change the theme of the website
        document.body.classList.toggle('dark');
    })
}