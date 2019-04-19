// Function jquery obs Click = ação e hide = esconder 
/*
$(function(){
    $('button').click(function(){
        $('h1').hide();
    });
    
});
*/

// Function jquery para alterar o CSS
/*
$(function(){
    $('#botao1').click(function(){
        $('h1').css("color", "red");
    });
    
});
*/

// alterando css parte 2
/*$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
    });

    $('#vermelho').click(function(){
        $('p').css("background-color","red");

    });

});
*/

//Efeito Fade out obs: fade in: reaparece o conteudo (pode-se usar parametros "slow", "fast" e numericos)
/*$(function(){
    $('#azul').click(function(){
        $('p').css("background-color","blue");
        $('p').fadeOut();
        $('p').delay(3000);
        $('p').fadeIn('slow')
    });

});
*/

// Gravar mensagem usando java Script utlizando o .text (obs pode-se customizar essa mensagem com css)
// Pode-se controlar o tempo da messagem usando .fadeOut.
// Obs técnica de encadamaento.
// Declaração multiplica de CSS utilizando chaves {}.
$(function(){
    $('#azul').click(function(){
        $('p').css("background-color","blue")
        $('#msg1')
            //Encadeamento em bloco
            .text("Cor alterada com sucesso!!")
            .css("color","red").css("border","1px solid red")
            .fadeOut(3000)
            //Declaração multipla usando chaves.
            .css({margin: "50px", marginTop: "80px;", backgroundColor: "blue" });
    });

});

// Slide show usando Jquery.

$(function(){
    $('#l2').click(function(){
        $('#i2').show();

    });
 
});
