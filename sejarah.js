function showContent(id) {
    document.querySelectorAll('.content').forEach(content => content.classList.remove('show'));
    setTimeout(() => document.getElementById('content' + id).classList.add('show'), 300);
}
function backToMenu() {
    document.querySelectorAll('.content').forEach(content => content.classList.remove('show'));
}