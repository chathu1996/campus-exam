const header = document.querySelector('.navbar-logo');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 300){
        header.style.backgroundColor = "#29323c"
        header.style.border = "1px solid black"
    } else{
        header.style.backgroundColor = "black"
    }
});

