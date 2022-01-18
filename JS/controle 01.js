console.log("Testando JS...");
console.log(document.getElementsByClassName("pg1"));
//Associar ao elemento paragráfo <p class="pg1">
var pg1,msg01,flag;
let estoqueMinimo;
flag=true;//Boolean
estoqueMinimo=150;//Number
const empresa="Impacta";//String
pg1=document.getElementsByClassName("pg1")[0];//Object
msg01="Jogo dos Dados. (Esse texto não está no código do HTML)";
pg1.innerHTML=msg01;

console.log(typeof(estoqueMinimo));
console.log(typeof(empresa));
console.log(typeof(estoqueMinimo));
console.log(typeof(flag));
// document.getElementsByClassName("pg1")[0].innerHTML=
//var pg1=2;//Permite criar novas declarações 
// com o mesmo nome de variável
//let estoqueMinimo=100;//Erro (Só pode ser declarado uma vez)
//empresa="Apple";//Erro (Valor constante)
$().ready(function(){
    console.log("Parágrafo HTML - " + $(".pg1").html());
    var btEnviar=document.querySelector("#form-login button");
    var inputEmail=document.querySelector("#user-email");
    var inputSenha=document.querySelector("#user-senha");
    var email="salatieldossantos@outlook.com";
    var senha="123";
    //FUNÇÃO MENSAGEM////
    function mensagem(txt){
        $("#msgForm").modal("show");
        $("#msgForm .modal-body p").html(txt);
    }
    btEnviar.onclick=function(){
    if (inputEmail.value == "") {
        mensagem("O campo e-mail é obrigatório!");
    }
    else if(inputSenha.value == ""){
        mensagem("O campo senha é obrigatório!");
     }
    else{
        if(inputEmail.value == email && inputSenha.value == senha){
            $("#form-login").submit();
        }else{
         mensagem("O E-mail ou a Senha Não Conferem");
        }
     }
  };
  //JOGO DOS DADOS
  //VARIÁVEIS E AS ASSOCIAÇÕES////
  var d1,d2,sorteio1,sorteio2,btJogar,
  soma,total,txtParImpar,contador,cronometro,
  ativo,inicio,txtJogo,pontos,txtPontos,msg1;
  msg1="";
  pontos=0;
  ativo=true;
  inicio=true;
  contador=0;
  txtPontos=document.querySelector(".pontos div");
  txtJogo=document.querySelector(".txtjogo div");
  cronometro=document.querySelector(".cronometro div");
  txtParImpar=document.querySelector(".parimpar div");
  total=document.querySelector(".total div");
  btJogar=document.querySelector(".btjogar img");
  d1=document.querySelector(".d1 div");
  d2=document.querySelector(".d2 div");
//FUNÇÃO PARIMPAR
function parimpar(n){
    //(%) retorna o restante da divisão pelo fator
    n%2 == 0 ? msg="PAR" : msg="ÍMPAR";
    return msg;
}
//FUNÇÃO CONTAGEM//
function contagem(obj){
    var tempo=setTimeout(
        function(){
            contador --;
        if (contador >-1){ 
            contagem(cronometro);
            contador <10 ? contador="0"+contador : null;
            obj.innerHTML="00:"+contador;
            }else{
               retornoJogo("Salatiel");
            }
        },1000//milisegundos
    );
}
//FUNÇÃO RETORNO JOGO
function retornoJogo(nome){
    localStorage.nomeJogador=nome;
    //verifica se já tem pontuação anterior
    if(localStorage.pontuacaoAnterior){
        localStorage.pontuacaoAnterior=localStorage.pontuacao;
    }else{
        localStorage.pontuacaoAnterior=0;
    }
        localStorage.pontuacao=txtPontos.innerHTML;
    //Zera os pontos
    pontos=0;
    txtPontos.innerHTML=pontos;
    //configura a mensagem////////
    modalJogo.style.display="block";
    var p=document.querySelector(".alertaJogo .conteudo p");
    p.style.fontSize="200%";
    p.innerHTML=verificaJogador(contador);
    btInicio.innerHTML="BORA JOGAR DE NOVO!!!";
    //reativa o click do botão jogar
    btJogar.onclick=function(){
        if(inicio){
            contador=15;
            inicio=false;
            ativo=false;
        }
    jogar();
    };
}
//FUNÇÃO VERIFICA JOGADOR//////////
function verificaJogador(n){
    switch(n){
        case -1 :  
            msg1="Game Over";
            btJogar.onclick=null;
            break;
        case 10 :
            msg1="Uhuuuu! \\o/ Vencedor!";
            break;
        case 20 :
            txtJogo.style.fontSize="20px";
            txtJogo.style.fontWeight="700";
            msg1="UAU!! \\o/ \\o/ Você é Demais!!!!";
            break;
    }
    return msg1;
}

//FUNÇÃO JOGAR////
  function jogar(){
  if(ativo == false) contagem(cronometro); ativo = true;
  //Math.random exibe um numero aleatório iniciando em zero
  sorteio1=parseInt(Math.random()*6)+1;//5
  sorteio2=parseInt(Math.random()*6)+1;//2
  soma=sorteio1+sorteio2;//soma dos dados
  total.innerHTML=soma;//total recebe soma
  txtParImpar.innerHTML=parimpar(soma);//retorna PAR ou IMPAR
  parimpar(soma) == "PAR" ? pontos ++ : null;
  txtPontos.innerHTML=pontos;
  txtJogo.innerHTML=verificaJogador(pontos);
  d1.style.backgroundImage="url(imagens/jogo-dos-dados/d"+sorteio1+".png)";
  d2.style.backgroundImage="url(imagens/jogo-dos-dados/d"+sorteio2+".png)";
  }
  jogar();//Chamada da função ao carregar a página
//   Chamada da função no clique do btJogar
  btJogar.onclick=function(){
    if(inicio){
            contador=15;
            inicio=false;
            ativo=false;
        }
    jogar();
  };

  //Janela de Mensagem
  var alertaJogo,fechar,btInicio,modalJogo;
  modalJogo=document.querySelector(".modalJogo");
  btInicio=document.querySelector(".alertaJogo button");
  alertaJogo=document.querySelector(".alertaJogo");
  fechar=document.querySelector(".fechar img");
  fechar.onclick=function(){
      modalJogo.style.display="none";
  };
  btInicio.onclick=function(){
     inicio=true;
     ativo=true;
     modalJogo.style.display="none";
     window.location.href="#jd";
  };
//Grava o Nome do Jogador
    $(".infoJogo button").click(function(){
        localStorage.nomeJogador=$(".infoJogo input").val();
        $(".infoJogo div").hide();
        var txt="Olá " + localStorage.nomeJogador + ", Sua Pontuação Anterior foi:" +
        localStorage.pontuacaoAnterior; 
        $(".infoJogo span").html(txt);
    });

});//end Jquery Ready