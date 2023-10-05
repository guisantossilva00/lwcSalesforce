import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'

export default class InsertDadosLwc extends LightningElement {

    objectAccountName = ACCOUNT_OBJECT;
    campos= [ACCOUNT_NAME] 


}