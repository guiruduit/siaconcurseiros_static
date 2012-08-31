$(document).ready(function(){

    $('form[id^="qst-"]').submit(function(){
        if ( $(this).children('ul').children('li').children('input:checked').val() == null ) {
            alert("É necessário marcar uma das alternativas antes.")
        } else {
            var _id = $(this).attr('id').slice(4);
            var _gabarito = $(this).children('#gab-' + _id).val();
            var _alternativa_selecionada = $(this).children('ul').children('li').children('input:checked').val();

            $(this).children('ul').children('li').children('input').attr('disabled', true);
            $(this).children('input[type=submit]').attr('disabled', true);

            var acertou = 1;
            if (_alternativa_selecionada == _gabarito) {
                alert("Resposta Correta!");
                $("alt-" + _id + "-" + _gabarito).css("color", "green");
            } else {
                alert("A resposta correta é: " + _gabarito);
                $("alt-" + _id + "-" + _gabarito).css("color", "red");
                acertou = 0;
            }

            $.get('/responde_questao/' + {{ user.id }} + 'a' + _id + 'a' + acertou + '/', {}, 'html');
        }

        return false;
    }); // form.submit

}) // document.ready()
