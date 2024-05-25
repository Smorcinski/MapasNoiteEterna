document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('tooltip');
    var pois = document.querySelectorAll('.poi');
	
        pois.forEach(function(poi) {
            poi.addEventListener('click', function() {
                var info = this.dataset.info;
                var tooltip = document.getElementById('tooltip');
                tooltip.textContent = info;
                tooltip.style.display = 'block';
                tooltip.style.top = (event.clientY - 200) + 'px'; // Posiciona a caixa branca verticalmente
                tooltip.style.left = (event.clientX + 20) + 'px'; // Posiciona a caixa branca horizontalmente
            });
        });

        document.addEventListener('click', function(event) {
            var tooltip = document.getElementById('tooltip');
            if (!event.target.classList.contains('poi')) {
                tooltip.style.display = 'none';
            }
        });
});
