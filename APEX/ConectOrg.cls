public class ConectOrg {
    
    public static String username = 'julia.rodri@itlean.com.br.hml';
    public static String password =  '@a34d79fsQqqZLHa1dmOMlXCD8MyIq05x';
    public static String clientId=  '3MVG9hPGCoG2ZiCtJr7HyV38X4.IeppI9nwwOYORTSFpK5w0Bz83_n08RHgmjqneQhQXk5_.Qp69zgzlFhs4m';
    public static String clientSecret= 'A5B44C58D784808DD63E6533FF7FBCC5B5DEE5D1F5643F3AA1800FB6592AD7CE';
    public static  string andPoit = 'https://itlean--hml.sandbox.my.salesforce.com/services/oauth2/token?grant_type=password&client_id='+clientId+'&client_secret='+clientSecret+'&username='+username+'&password='+password;

    public static Object conectionOrg(){
        HttpRequest req = new HttpRequest();
        req.setEndPoint(andPoit);
        req.setMethod('POST');
        req.setHeader('Content-Type','application/json');
        
        Http http  = new Http();
        
        HttpResponse res = http.send(req);
        Map<String ,Object> mapS = (Map<String, Object>)JSON.deserializeUntyped(res.getBody());
        System.debug(mapS);
        return mapS.get('access_token');
    }
    
    
    public static void insertPost(){
        Object ob = conectionOrg();
        
        Http http  = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndPoint('https://itlean--hml.sandbox.my.salesforce.com/services/apexrest/PreOpportunity');
        req.setMethod('POST');
        req.setHeader('Content-Type','application/json');
        req.setHeader('Authorization','Bearer ' + ob);
        req.setHeader('Indicacao-Celular','11981587348');
        req.setHeader('Indicacao-WhatsNael','11981587348');
        req.setBody ('{"nomePreOportunidade":"Teste lindos","nomeCliente":"Teste","nomeContato":"Email@teste.com","contatoContato":"111111111"}');
        HttpResponse response = http.send(req);
        System.debug(response.getStatusCode());
        
       
        
    }

}