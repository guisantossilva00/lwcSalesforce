import { LightningElement, track } from 'lwc';
import criarConta from '@salesforce/apex/AccountLwc.criarConta'; //importanto a classe e o método apex para usar no código
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class InsertDadosApex extends LightningElement {

    @track isModalOpen = false; //modal iniciando como false
    @track nomeConta = ''; //track para acompanhar alterções na variável do campo nomeConta
    @track industry = ''; //track para acompanhar alterções na variável do campo industry
    
        
    industryOptions = [
            { label: 'Agriculture', value: 'Agriculture' },
            { label: 'Apparel', value: 'Apparel' },
            
        ];// array com as opções do campo no salesforce
    

        //método para abrir o modal
        openModal() {
        this.isModalOpen = true;
    }

        // método para fechar o modal
        closeModal() {
        this.isModalOpen = false;
    }

    // método para lidar com mudanças no campo "nomeConta"
        lidarComMudancaNomeConta(event) {
        this.nomeConta = event.target.value;
    }

    // método para lidar com mudanças no campo "industry"
        lidarComMudancaIndustria(event) {
        this.industry = event.target.value;
    }
        
    // método para salvar a conta que irá chamar o método apex 'criarConta'
    salvarConta() {
        
            // Chamando o método Apex "criarConta" para criar a conta (variávelApex: this.variávelLwc) a variável criada no parâmetro do método no apex irá receber os dados da variável criada no lwc
            criarConta({ nomeConta: this.nomeConta, industry: this.industry })
            
            //.then é usado caso ocorra sucesso da chamada Apex (método).
            .then(result => {
                // Conta criada com sucesso, exibi o toast sucesso
                const toastEvent = new ShowToastEvent({
                    title: 'Sucesso',
                    message: 'Conta criada com sucesso. ' + result,
                    variant: 'success',
                });
                this.dispatchEvent(toastEvent);

                // Fechar o modal quando a conta for criada
                this.closeModal();
            })

            //.catch é usado caso ocorra erros na chamada Apex (método).
            .catch(error => {
                // Erro para criar conta, exibir o toast de erro
                const toastEvent = new ShowToastEvent({
                    
                    title: 'Erro',
                    message: 'Erro ao criar a conta: Verifique os campos obrigatórios ' ,
                    variant: 'error',
                });
                this.dispatchEvent(toastEvent);
            });
    }
}