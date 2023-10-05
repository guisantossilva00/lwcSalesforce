import { LightningElement,track  } from 'lwc';

export default class ExibeTexto extends LightningElement {

    @track exibeTexto = false;

    textoVisivel(event) {
        this.exibeTexto = event.target.checked;
    }
}