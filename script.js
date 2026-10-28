$(document).ready(function () {
  // 1. SELETORES

  $("#btnId").click(function () {
    $("#selecionarId").toggleClass("realce");
    $("#saidaSeletores").text("Você selecionou usando um ID!");
  });

  $("#btnClasse").click(function () {
    $(".alvo-classe").toggleClass("realce");
    $("#saidaSeletores").text(
      "Você selecionou pela classe. Foram encontrados elementos com essa classe.",
    );
  });

  $("#btnTag").click(function () {
    $("p.alvo-tag").toggleClass("realce");
    $("#saidaSeletores").text(
      "Você selecionou um parágrafo pela tag e pela classe.",
    );
  });

  // 2. EVENTOS

  let contador = 0;

  $("#btnContador").click(function () {
    contador++;
    $("#contadorClicks").text(contador);
  });

  $("#btnZerar").click(function () {
    contador = 0;
    $("#contadorClicks").text(contador);
  });

  $("#areaMouse").on("mouseenter", function () {
    $(this).text("Mouse dentro!");
    $("#resultadoMouse").text("Evento mouseenter detectado.");
    $(this).css("background", "#164f78");
  });

  $("#areaMouse").on("mouseleave", function () {
    $(this).text("Passe o mouse aqui!");
    $("#resultadoMouse").text("Evento mouseleave detectado.");
    $(this).css("background", "");
  });

  $("#campoTecla").on("input", function () {
    let texto = $(this).val();

    if (texto === "") {
      $("#resultadoTecla").text("O texto aparecerá aqui.");
    } else {
      $("#resultadoTecla").text("Você digitou: " + texto);
    }
  });

  // 3. MANIPULAÇÃO DE CONTEÚDO

  $("#btnText").click(function () {
    let texto = $("#entradaConteudo").val();

    if (texto === "") {
      texto = "Você não digitou nada!";
    }

    $("#conteudoAlvo").text(texto);
  });

  $("#btnHtml").click(function () {
    $("#conteudoAlvo").html(
      "<strong>Olha só!</strong> Também podemos inserir <em>HTML</em>.",
    );
  });

  $("#btnVal").click(function () {
    $("#entradaConteudo").val("Texto colocado pelo jQuery!");
    $("#conteudoAlvo").text("O valor do campo foi alterado usando .val().");
  });

  // 4. CSS E CLASSES

  $("#btnCor").click(function () {
    $("#caixaEstilo").css({
      background: "#b7e5ff",
      color: "#061a2b",
      "border-color": "#b7e5ff",
    });
  });

  $("#btnClasseCSS").click(function () {
    $("#caixaEstilo").toggleClass("estilo-ativo");
  });

  $("#btnAdicionarClasse").click(function () {
    $("#caixaEstilo").addClass("realce");
  });

  $("#btnRemoverClasse").click(function () {
    $("#caixaEstilo").removeClass("realce");
  });

  $("#btnResetCSS").click(function () {
    $("#caixaEstilo").removeClass("realce estilo-ativo").css({
      background: "",
      color: "",
      "border-color": "",
    });
  });

  // 5. EFEITOS

  $("#btnOcultar").click(function () {
    $("#caixaVisibilidade").hide(300);
  });

  $("#btnMostrar").click(function () {
    $("#caixaVisibilidade").show(300);
  });

  $("#btnToggle").click(function () {
    $("#caixaVisibilidade").toggle(300);
  });

  $("#btnFade").click(function () {
    $("#caixaFade").fadeToggle(400);
  });

  $("#btnFadeIn").click(function () {
    $("#caixaFade").fadeIn(400);
  });

  $("#btnFadeOut").click(function () {
    $("#caixaFade").fadeOut(400);
  });

  $("#btnSlide").click(function () {
    $("#caixaSlide").slideToggle(400);
  });

  let animado = false;

  $("#btnAnimar").click(function () {
    if (animado === false) {
      $("#quadradoAnimado").animate(
        {
          left: "230px",
        },
        600,
      );

      animado = true;
    } else {
      $("#quadradoAnimado").animate(
        {
          left: "8px",
        },
        600,
      );

      animado = false;
    }
  });

  // 6. ADICIONAR E REMOVER ELEMENTOS

  $("#btnAdicionar").click(function () {
    let texto = $("#novoItem").val().trim();

    if (texto === "") {
      $("#resultadoLista").text("Digite alguma tarefa primeiro!");
      return;
    }

    // Cria um novo item
    let novoItem = $("<li class='item-lista'></li>");

    // Cria o texto
    let textoItem = $("<span></span>");
    textoItem.text(texto);

    // Cria o botão de remover
    let botaoRemover = $(
      "<button class='remover' type='button'>Remover</button>",
    );

    // Junta tudo
    novoItem.append(textoItem);
    novoItem.append(botaoRemover);

    // Coloca o item na lista
    $("#listaItens").append(novoItem);

    // Limpa o campo
    $("#novoItem").val("");

    $("#resultadoLista").text("Item adicionado!");
  });

  // O evento também funciona nos botões criados depois
  $("#listaItens").on("click", ".remover", function () {
    $(this).parent().remove();
    $("#resultadoLista").text("Item removido!");
  });

  // 7. NAVEGAÇÃO PELO DOM

  $("#btnPai").click(function () {
    $("#filhoDemo").parent().toggleClass("pai-selecionado");
  });

  $("#btnFilhos").click(function () {
    $("#paiDemo").children(".caixa-demo").toggleClass("realce");
  });
});
