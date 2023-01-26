class Tarefas {
    constructor() {
        this.TarefasLista = [];
    }

    CadastrarDados() {//recebe o que usuario digitou nos inputs e insere no objeto tarefa
        let tarefa = {};
        tarefa.tarefa = document.getElementById("Nometarefa").value;
        tarefa.detalhes = document.getElementById("ObjetivoTarefa").value;
        tarefa.dataFinal = document.querySelector('input[type="date"]').value;
        tarefa.DataInicial = this.DataReceber();

        return tarefa;
    }
    inserirDados() {
        let tarefa = this.CadastrarDados();
        this.TarefasLista.push(tarefa);
        this.mostrar();

        var Inicio = document.getElementById("Nometarefa");
        var detalhe = document.getElementById("ObjetivoTarefa");
        var data = document.querySelector('input[type="date"]');
        Inicio.value = "";
        detalhe.value = "";
        data.value = "";//limpa os campos que foram preenchidos,para nao causar conflito
    }
    mostrar() {
        for (let tarefa of this.TarefasLista) {
           
        }
    }

    DataReceber() {//Data que a pessoa inseriu os dados
        var mesAtualizado;
        var data = new Date();
        var dia = data.getDate();
        console.log(dia);
        var mes = data.getMonth();
        var ano = data.getFullYear();

        if (mes == 0) {//converte para o padrao mais conhecido,pois a função getMouth retorna entre 0 e 11,ja o input date entre 1 e 12,para uma melhor leitura,a conversão
            mesAtualizado = "01";
        } else if (mes == 1) {
            mesAtualizado = "02";
        } else if (mes == 2) {
            mesAtualizado = "03";
        } else if (mes == 3) {
            mesAtualizado = "04";
        } else if (mes == 4) {
            mesAtualizado = "05";
        } else if (mes == 5) {
            mesAtualizado = "06";
        } else if (mes == 6) {
            mesAtualizado = "07";
        } else if (mes == 7) {
            mesAtualizado = "08";
        } else if (mes == 8) {
            mesAtualizado = "09";
        } else if (mes == 9) {
            mesAtualizado = "10";
        } else if (mes == 10) {
            mesAtualizado = "11";
        } else if (mes == 11) {
            mesAtualizado = "12";
        }
        var dataAtual = ano + "-" + mesAtualizado + "-" + dia;

        return dataAtual;
    }


}
var tarefas = new Tarefas();