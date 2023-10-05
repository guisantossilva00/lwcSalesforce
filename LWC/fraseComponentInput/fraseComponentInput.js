import { LightningElement,track } from 'lwc';

export default class FraseComponentInput extends LightningElement {
    @track componentFrase ="Frase component input";

    changeHandler(event){
        this.componentFrase =event.target.value
    }
}