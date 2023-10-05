import { LightningElement,track } from 'lwc';
// ! adiciona a decorator track
// ! track -> 'acompanhar', ele acompanha a alteração de valor em um campo
/*
! Quando um campo é decorado com @track, o Lightning Web Components rastreia alterações nos valores internos de:
! -> Objetos simples criados com {}
! -> Matrizes/Arrays criadas com [] 
*/

export default class FraseComponentJS extends LightningElement {

    @track componentFrase ="Frase component js";
}