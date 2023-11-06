@RestResource(urlMapping='/testePostAcc')
global class testePostAccount {
    
    @HttpPost
    global static void insertAcc(String nomeAcc){
        RestRequest request = RestContext.request;
        RestResponse response = RestContext.response;
        
        Account acc = new Account();
        
        acc.Name = nomeAcc;
        insert acc;
        
        response.addHeader('Content-Type', 'text/plain');
        response.statusCode = 201;
        response.responseBody = Blob.valueOf(JSON.serialize(response.statusCode));
        
    }

}