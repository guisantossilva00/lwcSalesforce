import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastExemple extends LightningElement {

    sucessoToast(){
        this.dispatchEvent(
            new ShowToastEvent({
                title:'SUCESSO',
                message: 'TOAST de Sucesso',
                variant: 'Success'
            }))

    }

    alertaToast(){
        this.dispatchEvent(
            new ShowToastEvent({
                title:'ALERTA ',
                message: 'TOAST de Alerta ',
                variant: 'Warning'
            }))

    }

    erroToast(){
        this.dispatchEvent(
            new ShowToastEvent({
                title:'ERRO',
                message: 'TOAST de Erro',
                variant: 'Error'
            }))

    }


}