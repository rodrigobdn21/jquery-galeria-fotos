$(document).ready(function() {
    $('header button').click(function() { /*Quando o botão (''header button') for clicado */
        $('form').slideDown(); /*O formulario vai abrir para baixo */
    })

    $('#botao-cancelar').click(function() { /*#id do Botao - evento de click - calbeck*/ 
        $('form').slideUp(); /*formulario - fecha formulario par cima */
    })

    $('form').on('submit', function(e) {
        e.preventDefault(); /*Prevenir o comportamento padrao do formulario atualizar a pagina quando e SUBMETIDO */
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('')
    })
})