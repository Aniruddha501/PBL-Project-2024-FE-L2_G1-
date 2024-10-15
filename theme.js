let mode = document.getElementById("mode");

function modeChange() {
    console.log(localStorage.getItem('darkmode'));
    const wasDarkMode = localStorage.getItem('darkmode') === 'true';
    console.log(!wasDarkMode);
    localStorage.setItem('darkmode', !wasDarkMode)
    document.body.classList.toggle('light-theme',!wasDarkMode);
    if(document.body.classList.contains('light-theme')){
        mode.src = "moon.jpeg";
        mode.alt = "moon";
    } else {
        mode.src = "sun.png";
        mode.alt = "sun";
    }
}

function onload() {
    console.log(localStorage.getItem('darkmode'));
    const wasDarkMode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkMode)
    document.body.classList.toggle('light-mode', !wasDarkMode );
}