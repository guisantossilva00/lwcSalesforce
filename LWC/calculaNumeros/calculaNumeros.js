import { LightningElement,track } from 'lwc';

export default class CalculaNumeros extends LightningElement {

    // ! adiciona a decorator track
// ! track -> 'acompanhar', ele acompanha a alteração de valor em um campo

    @track number1 = 0;
    @track number2 = 0;
    @track result = 0;

    /*
    number1,number2 e resultsão propriedades do componente. Elas são decoradas com @track, o que significa que o LWC acompanhará automaticamente todas as alterações nesses valores e atualizar.
    */ 


    //Alterações nos Números de Entrada
    handleNumber1Change(event) {
        this.number1 = parseFloat(event.target.value); 
        //atualiza o valor de number1 com o valor do campo de entrada que acionou o evento. 
    }

    handleNumber2Change(event) {
        this.number2 = parseFloat(event.target.value); 
    }

    calculateSum() {
        this.result = this.number1 + this.number2;
    }
}