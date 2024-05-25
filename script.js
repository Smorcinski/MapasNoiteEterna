document.addEventListener('DOMContentLoaded', function () {
    var pois = document.querySelectorAll('.poi');
        var cards = document.querySelectorAll('.card');

        pois.forEach(function(poi) {
            poi.addEventListener('click', function(event) {
                event.stopPropagation();
                var target = this.dataset.target;
                cards.forEach(function(card) {
                    if (card.id === target) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        document.addEventListener('click', function(event) {
            cards.forEach(function(card) {
                card.style.display = 'none';
            });
        });
});