document.addEventListener('DOMContentLoaded', function () {
    var pois = document.querySelectorAll('.poi');
    var cards = document.querySelectorAll('.card');
    var areas = document.querySelectorAll('area');

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

    // Função para redimensionar as coordenadas do image-map
    function redimensionarCoordenadas() {
        // Obtendo a largura e a altura da imagem original
        var larguraOriginal = 2651;
        var alturaOriginal = 3750;

        // Obtendo a largura e a altura do contêiner
        var container = document.querySelector('.map-container');
        var larguraConteiner = container.clientWidth;
        var alturaConteiner = container.clientHeight;

        // Calculando proporções de redimensionamento
        var proporcaoLargura = larguraConteiner / larguraOriginal;
        var proporcaoAltura = alturaConteiner / alturaOriginal;

        // Atualizando as coordenadas de cada área do image-map
        var areas = document.getElementsByTagName('area');
        for (var i = 0; i < areas.length; i++) {
            var coords = areas[i].getAttribute('coords').split(',');
            for (var j = 0; j < coords.length; j++) {
                // Ajustando as coordenadas x
                if (j % 2 === 0) {
                    coords[j] = Math.round(parseInt(coords[j]) * proporcaoLargura);
                }
                // Ajustando as coordenadas y
                else {
                    coords[j] = Math.round(parseInt(coords[j]) * proporcaoAltura);
                }
            }
            areas[i].setAttribute('coords', coords.join(','));
        }
    }

    // Chamar a função quando a janela for redimensionada
    window.addEventListener('resize', redimensionarCoordenadas);

    // Chamar a função quando a página for carregada
    redimensionarCoordenadas();

    // Adicione eventos de mouseover e mouseout para exibir e ocultar informações ao passar o mouse sobre as áreas
    areas.forEach(function(area) {
        area.addEventListener("mouseover", function() {
            var targetId = this.getAttribute("data-target");
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.style.display = "block";
            }
        });
        area.addEventListener("mouseout", function() {
            var targetId = this.getAttribute("data-target");
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.style.display = "none";
            }
        });
    });
});
