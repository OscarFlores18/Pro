$(document).ready(function(){

    $("#buscar").on("keyup", function(){

        let valor = $(this).val().toLowerCase();

        $(".usuario-card").each(function(){

            let texto = $(this).text().toLowerCase();

            if(texto.indexOf(valor) > -1){

                $(this).parent().show();

            }else{

                $(this).parent().hide();

            }

        });

    });

});