import { LightningElement, wire } from 'lwc';
import getContatos from '@salesforce/apex/ContactController.getContatos';

export default class Datatable extends LightningElement {
    colunas = [
        { label: 'Primeiro Nome do Contato', fieldName: 'FirstName'},
        { label: 'Sobrenome do Contato', fieldName: 'LastName'},
        { label: 'Telefone do Contato', fieldName: 'Phone', type: 'phone'},
        { label: 'Email do Contato', fieldName: 'Email', type: 'email'},
    ];

    dadosContato;
    erro;

    @wire(getContatos)
    wireGetContatos({error, data}) {
        if(data) {
            this.dadosContato = data;
            this.erro = undefined;
        } else if(error) {
            this.erro = error;
            this.dadosContato = undefined;
        }
    }

    getSelecionado(event) {
        const selecionados = event.detail.selectedRows;

        for(let i = 0; i < selecionados.length; i++) {
            console.log('Você selecionou: ' + selecionados[i].Id);
        }
    }
}