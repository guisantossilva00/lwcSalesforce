public with sharing class ConnectApiGog {

    @AuraEnabled(cacheable=true)
    public static Object buscaDados(){
        string endPoit = 'https://dog.ceo/api/breeds/image/random';
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endPoit);
        req.setMethod('GET');

        Http http = new Http();
        HttpResponse res = http.send(req);
        Map<String, Object> mapS = (Map<String, Object>)JSON.deserializeUntyped(res.getBody());
        

        return mapS;



    } 
    
}