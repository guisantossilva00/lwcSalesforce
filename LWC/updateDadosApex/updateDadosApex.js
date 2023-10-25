import { LightningElement, api } from 'lwc';
import updateConta from '@salesforce/apex/AccountLwc.updateConta';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { RefreshEvent } from "lightning/refresh";//ação usado para autalização

export default class UpdateDadosApex extends LightningElement {
    @api recordId;
    //recordId é uma palavra reservada
    //@api deixar o id do registro como publico para poder trabalhar com os dados do registro



    //connectedCallback é um método de um componente LWC que é chamado automaticamente quando o componente é carregado
    connectedCallback() {
        // Quando o componente é carregado, você pode acessar o recordId para obter o ID do registro associado.
      console.log('ID do Registro: ' + this.recordId);
    }

    
    
    //metodo de onclick que está no botão
    salvarTelefone() {
        const inputText = this.template.querySelector('input[name="telefone"]'); 
        // Seleciona o elemento de input com o atributo "name" igual a "telefone" dentro do template do componente.
  
        
        //verifica se o valor do campo não está vazio
        if(inputText.value) {
            console.log('valor campo: ' + inputText.value )
            // Chama a função "updateConta" do Apex com os parâmetros recordId e telefone.
            updateConta({recordId:  this.recordId, telefone: inputText.value})
            .then((result) => {
                
                this.showToastSucesso();//exibindo a mensagem de sucesso
                this.dispatchEvent(new RefreshEvent());//disparando um evento para atualizar os dados

            }).catch((err) => {
                this.showToastErro(err.body.message);//exibido a mensagem de erro, a mensagem específica do erro é armazenada em err.body.message

                console.error('Erro ao atualizar a conta usando JSON.stringify:', JSON.stringify(err));//usando JSON.stringify para exibir o erro com mais detalhes 
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

    //o parâmetro mensagem é preenchido com a mensagem específica de erro que foi capturada do objeto de erro.
    showToastErro(mensagem){
        this.dispatchEvent(
            new ShowToastEvent({
                title:'ERRO',
                message: `Erro ao Atualizar o campo: ${mensagem}`,
                variant: 'Error'
        }));
    }
}