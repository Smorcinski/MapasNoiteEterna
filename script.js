document.addEventListener('DOMContentLoaded', function () {
    var pois = document.querySelectorAll('.poi');
        var tooltip = document.getElementById('tooltip');

        pois.forEach(function(poi) {
            poi.addEventListener('click', function(event) {
                event.stopPropagation(); // Impede a propagação do evento para evitar o fechamento imediato do tooltip
                var info = this.dataset.info;
                tooltip.textContent = info;
                tooltip.style.display = 'block';
                tooltip.style.width = '100px'; // Define a largura da caixa branca
                tooltip.style.height = '50px'; // Define a altura da caixa branca
                tooltip.style.top = (event.clientY - 60) + 'px'; // Posiciona a caixa branca verticalmente (ajuste para centralizar verticalmente)
                tooltip.style.left = (event.clientX + 20) + 'px'; // Posiciona a caixa branca horizontalmente
            });
        });

        document.addEventListener('click', function(event) {
            tooltip.style.display = 'none'; // Fecha o tooltip quando ocorre um clique fora dos POIs
        });
});