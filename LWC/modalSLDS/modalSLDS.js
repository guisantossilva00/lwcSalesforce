import { LightningElement } from 'lwc';

export default class ModalSLDS extends LightningElement {

   
    showModal = false;
   

 

     abrirfechaModal(){
        
        if(this.showModal ){
            this.showModal = false;      
           }else{
               this.showModal = true;
           }

           // this.showModal = !this.showModal;
    }

}