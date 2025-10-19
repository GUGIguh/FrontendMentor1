let curTheme = 'light'

function themeInit() {
    const savedTheme = localStorage.getItem('theme');
    const systemPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    curTheme = savedTheme || (systemPreferDark ? 'dark' : 'light');
    setTheme(curTheme);
}

function setTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    curTheme = theme;
}

function toggleTheme(){
    const newTheme = curTheme === 'light' ? 'dark': 'light';
    setTheme(newTheme);
}

document.addEventListener('DOMContentLoaded' , themeInit);