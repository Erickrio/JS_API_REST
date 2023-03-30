function consultarRestaurantes() {
  $.ajax({
    //url: "http://api.algafood.local:8080/restaurantes",
    url:"//viacep.com.br/ws/01001000/json",
    type: "get",

    success: function(response) {
      $("#conteudo").text(response);
    }
  });
}

$("#botao").click(consultarRestaurantes);