document.addEventListener('DOMContentLoaded', function () {
    var pois = document.querySelectorAll('.poi');
	var cards = document.querySelectorAll('.card');

	pois.forEach(function(poi) {
		poi.addEventListener('click', function(event) {
			event.stopPropagation();
			var target = this.dataset.target;
			var mouseX = event.clientX;
			var mouseY = event.clientY + window.scrollY; // Adiciona o deslocamento vertical da página
			cards.forEach(function(card) {
				if (card.id === target) {
					card.style.display = 'block';
					card.style.top = mouseY + 'px'; // Define a posição vertical do card
					card.style.left = mouseX + 'px'; // Define a posição horizontal do card

					// Adiciona um evento de clique ao botão dentro do card
					var cardName = target.replace(/\s+/g, '_'); // Substitui espaços por underscores
					var linkButton = card.querySelector('.link-button');
					if (linkButton) {
						linkButton.addEventListener('click', function() {
							window.location.href = 'https://noiteterna-rpg.fandom.com/pt-br/wiki/' + cardName; // Substitua 'pagina.html' pelo URL real da página desejada
						});
					}
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