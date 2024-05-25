document.addEventListener('DOMContentLoaded', function () {
    var pois = document.querySelectorAll('.poi');
	var cards = document.querySelectorAll('.card');

	pois.forEach(function(poi) {
		poi.addEventListener('click', function(event) {
			event.stopPropagation();
			var target = this.dataset.target;
			var mouseX = event.clientX;
			var mouseY = event.clientY;
			cards.forEach(function(card) {
				if (card.id === target) {
					card.style.display = 'block';
					card.style.top = mouseY + 'px'; // Define a posição vertical do card
					card.style.left = mouseX + 'px'; // Define a posição horizontal do card
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