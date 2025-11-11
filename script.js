document.getElementById('button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const urlElement = document.getElementById('url');
    urlElement.textContent = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${year}`;
});