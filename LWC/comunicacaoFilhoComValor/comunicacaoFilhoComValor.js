import { LightningElement, api } from 'lwc';

export default class ComunicacaoFilhoComValor extends LightningElement {
    @api valorVindoDoPai;

    eventoApagandoInputPai() {
        const event = new CustomEvent('limpainput');

        this.dispatchEvent(event);
    }
}