public with sharing class NationalHolidaysController {
    private static final String URL_REMOTE = 'https://brasilapi.com.br/api/feriados/v1/';

    public static List<Object> getNationalHolidays(Integer currentYear) {

        Http http = new Http();
        HttpRequest request = new HttpRequest();

        String endpoint = URL_REMOTE + currentYear;

        request.setEndpoint(endpoint);
        request.setMethod('GET');
        request.setHeader('Content-Type', 'application/json');
        request.setTimeout(12000);

        HttpResponse response = http.send(request);

        if(response.getStatusCode() == 200) {

            List<Object> retornoListNationalHolidays = (List<Object>)JSON.deserializeUntyped(response.getBody());

            return retornoListNationalHolidays;

        } else {
            if(response.getStatusCode() == 404 || response.getStatusCode() == 500) {
                User userForSendEmail = [SELECT Id , Email FROM User WHERE Email = 'guisantossilva00@gmail.com'];

                NationalHolidaysErrorJson retornoErro = (NationalHolidaysErrorJson)JSON.deserialize(response.getBody(), NationalHolidaysErrorJson.class);

                Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();

                String[] toAddresses = new String[] {userForSendEmail.Email};
                mail.setToAddresses(toAddresses);
                mail.setSubject('Error NationalHolidaysController');
                mail.setPlainTextBody('Ocorreu um erro na classe NationalHolidaysController: '  +
                                        'Nome do Erro: ' + retornoErro.name + 
                                        ' Mensagem do Erro: '+ retornoErro.message + 
                                        ' Tipo do Erro: ' + retornoErro.type);
                Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });     

                return new List<Object>();
            } else {
                return new List<Object>();
            }
        }
    }
    
    @future(Callout=true)
    public static void setNationalHolidays() {
        Integer currentYear = Date.today().year();

        List<Object> retornoListNationalHolidays = getNationalHolidays(currentYear);

        if(!retornoListNationalHolidays.isEmpty()) {

            List<NationalHoliday__c> listNationalHolidays = new List<NationalHoliday__c>();
            
            for(Object objRetorno :  retornoListNationalHolidays) {
                Map<String, Object> mapJson = (Map<String, Object>)objRetorno;
                
                NationalHoliday__c nationalHoliday = new NationalHoliday__c();
                
                nationalHoliday.Name = (String)mapJson.get('name');
                nationalHoliday.Date__c = Date.valueOf((String)mapJson.get('date'));
                nationalHoliday.Type__c = (String)mapJson.get('type');
                
                listNationalHolidays.add(nationalHoliday);
            }
            
            insert listNationalHolidays;
        }
    }

    @AuraEnabled(cacheable=true)
    public static NationalHoliday__c getCurrentOrNextHoliday() {
        Date currentDate = Date.today();

        NationalHoliday__c listNationalHoliday = [SELECT Id, Name, Date__c, Type__c FROM NationalHoliday__c WHERE Date__c >=: currentDate LIMIT 1];
        
        return listNationalHoliday;
    }

    public class NationalHolidaysErrorJson {
        public String name {get; set;}
        public String message {get; set;}
        public String type {get; set;}
    }
}