import { LightningElement } from 'lwc';

export default class Datatable extends LightningElement {
    coluna = [ 
        { label: 'Id', fieldName: 'Id' }, 
        { label: 'Nome', fieldName: 'nome' }, 
        { label: 'Número de telefone', fieldName: 'telefone', type: 'phone' }, 
        { label: 'Endereço de e-mail', fieldName: 'email', type: 'email' } 
    ]; 

    dados = [ 
        { 
            Id: '1', 
            nome: 'Maria', 
            telefone: '(21) 93849-2794', 
            email: 'maria@piedpiper.com' 
        },
        { 
            Id: '2', 
            nome: 'João', 
            telefone: '(11) 93895-2794', 
            email: 'joao@piedpiper.com' 
        },
        { 
            Id: '3', 
            nome: 'Antonio', 
            telefone: '(12) 94389-2794', 
            email: 'antonio@piedpiper.com' 
        },
        { 
            Id: '4', 
            nome: 'Cleber', 
            telefone: '(33) 93489-2794', 
            email: 'cleber@piedpiper.com' 
        }
    ]

    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;

        for (let i = 0; i < selectedRows.length; i++) {
            console.log('Você selecionou: ' + selectedRows[i].nome);
        }
    }
}