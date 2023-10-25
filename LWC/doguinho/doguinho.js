import { LightningElement, wire } from 'lwc';
import buscaDados from '@salesforce/apex/ConnectApiGog.buscaDados';

export default class Doguinho extends LightningElement {
    da;
    @wire(buscaDados)
    das({data, error}){
        if(data){
            this.da = data;
            console.log(data);
        }else if(error){
            console.log(error);
        }
    }
   
    
    dados;

    dogFun(){
        buscaDados().then(v=>{
            this.dados = v;
        }).catch(e =>{
            console.log('Erro' + e);
        })
    }
}