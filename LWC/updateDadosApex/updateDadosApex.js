import { LightningElement, api } from 'lwc';
import updateConta from '@salesforce/apex/AccountLwc.updateConta';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { RefreshEvent } from "lightning/refresh";

export default class UpdateDadosApex extends LightningElement {
    @api recordId;

    salvarTelefone() {
        const inputText = this.template.querySelector('input[name="telefone"]');
        
        let valorZero = 0;
        let valorUndefined = undefined;
        let valorNull= null;
        let valorFalse = false;
        let valorNaN = NaN;
        let valorVazio = '';

        console.log(valorZero == true);
        console.log(valorUndefined == true);
        console.log(valorNull == true);
        console.log(valorFalse == true);
        console.log(valorNaN == true);
        console.log(valorVazio == true);

        if(inputText.value) {
            updateConta({recordId:  this.recordId, telefone: inputText.value}).then((result) => {
                this.showToastSucesso();
                this.dispatchEvent(new RefreshEvent());
            }).catch((err) => {
                this.showToastErro(err.body.message);
            });
        }
    }

    showToastSucesso(){
        this.dispatchEvent(
            new ShowToastEvent({
                title:'SUCESSO',
                message: 'Campo atualizado com sucesso',
                variant: 'Success'
        }));
    }

    showToastErro(mensagem){
        this.dispatchEvent(
            new ShowToastEvent({
                title:'ERRO',
                message: `Erro ao Atualizar o campo: ${mensagem}`,
                variant: 'Error'
        }));
    }
}