document.addEventListener('DOMContentLoaded', function () {
    var pois = document.querySelectorAll('.poi');
    var cards = document.querySelectorAll('.card');
    var overlays = document.querySelectorAll('.hidden-map-overlay');

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

    // Adiciona funcionalidade de hover para as imagens de overlay
    overlays.forEach(function(overlay) {
        overlay.addEventListener('mouseenter', function(event) {
            var rect = overlay.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var img = new Image();
            img.src = overlay.src;
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                var pixelData = ctx.getImageData(x, y, 1, 1).data;
                if (pixelData[3] > 0) { // Verifica a opacidade do pixel
                    overlay.style.opacity = '1';
                    overlay.style.pointerEvents = 'auto';
                }
            };
        });

        overlay.addEventListener('mouseleave', function() {
            this.style.opacity = '0';
            this.style.pointerEvents = 'none';
        });
    });
});
