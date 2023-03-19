 
 
$(document).ready(function () {
    var tabela = $('#tabelaProdutos').DataTable();
    var id_ = 0;
    var name = document.getElementById('nome');
    var desc = document.getElementById('desc');
    var ean = document.getElementById('ean');
    var valor = document.getElementById('valor');

   
    $('#btnSalvar').on('click', function () {
        id_++;
        var nameV = name.value;
        var descV = desc.value;
        var eanV = ean.value;
        var valorV = valor.value;
        var btnEditar = '<button class="editar btn btn-success" data-toggle="modal" data-target="#modalEditar">Editar</button>'
        var btnExcluir = '<button class="excluir btn btn-danger">Excluir</button>'
        tabela.row.add([id_, nameV, descV, eanV, valorV, btnEditar, btnExcluir]).draw(false);
        nameV.value = "";
        descV.value = "";
        eanV.value = "";
        valorV.value = "";


        $(document).on('click', '.excluir', function () {
            var row = $(this).parents('tr');
        
            if (confirm("Isso excluirá o produto.")) {
                if ($(row).hasClass('child')) {
                    tabela.row($(row).prev('tr')).update().draw();
                } else {
                    tabela.row($(this).parents('tr')).remove().draw();
                }
            }
        });


        $(document).on('click', '.editar', function () {
            
            tabela
            .row($(this).parents('tr'))
            .remove()
            .draw();
            var nome1 = document.getElementById('nomeAlter');
            var desc1 = document.getElementById('descAlter');
            var ean1 = document.getElementById('eanAlter');
            var valor1 = document.getElementById('valorAlter');

                $('.btnAlterar').off().on('click', function () {
                   
                    var nomeAlter = nome1.value;
                    var descAlter = desc1.value;
                    var eanAlter = ean1.value;
                    var valorAlter = valor1.value;

                    id_++;
                    tabela.row.add([id_, nomeAlter, descAlter, eanAlter, valorAlter, btnEditar, btnExcluir]).draw(false);


                })
        });
    });
}); 