const yin = () => {
    document.getElementById('yin-mode').style.display = 'none';
    document.getElementById('yang-mode').style.display = 'inline';
    document.getElementById('lite-md').href = 'assets/css/light.css'
}

const yang = () => {
    document.getElementById('yang-mode').style.display = 'none';
    document.getElementById('yin-mode').style.display = 'inline';
    document.getElementById('lite-md').href = 'assets/css/dark.css'
}