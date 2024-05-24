document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('tooltip');
    const pois = document.querySelectorAll('.poi');

    pois.forEach(poi => {
        poi.addEventListener('mouseenter', function () {
            const info = this.getAttribute('data-info');
            tooltip.innerHTML = info;
            tooltip.style.display = 'block';
        });

        poi.addEventListener('mousemove', function (e) {
            tooltip.style.top = e.clientY + 10 + 'px';
            tooltip.style.left = e.clientX + 10 + 'px';
        });

        poi.addEventListener('mouseleave', function () {
            tooltip.style.display = 'none';
        });
    });
});
