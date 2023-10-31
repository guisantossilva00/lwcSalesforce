public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContatos(){
        return [SELECT Id, FirstName, LastName, Phone, Email
                FROM Contact];
    }
}