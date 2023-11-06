@RestResource(urlMapping='/ConsultarContas/*')//Anotação que permite expor uma classe do Apex como um recurso REST
//define o mapeamento da URL, que será /ConsultarContas/ Ao chamar o serviço REST,usar /services/apexrest/ConsultarContas/ na URL
// "services/apexrest" é um caminho específico usado no Salesforce para acessar serviços REST personalizados

//a classe tem que estar como global para usar o @RestResource 
global class AccountGetRestAapi {
    
    @HttpGet
    global static void contasList() {
        
        RestRequest request = RestContext.request;
        RestResponse response = RestContext.response;
        //variável response que será usada para construir e enviar a resposta da solicitação. 
        //A classe RestResponse faz parte do contexto REST e contém métodos para definir o corpo da resposta e os cabeçalhos de resposta.
        
        List<Account> acclist = [SELECT Name, Industry,  Phone,Active__c, NumberOfEmployees, Website, AccountNumber FROM Account];
        
        if (!acclist.isEmpty()) {
            
            // Header da resposta para indicar que o tipo de conteúdo da resposta é JSON.
            response.addHeader('Content-Type', 'application/json');
            
            //statuscode da resposta como 200, indicando que deu certo a solicitação get.
            response.statusCode = 200;
            
            // serializando a lista de contas acclist em formato JSON e definindo como o corpo da resposta.
            response.responseBody = Blob.valueOf(JSON.serialize(acclist));
            
            
        } else {
            
            // header da resposta para indicar que o tipo de conteúdo da resposta é texto simples.
            response.addHeader('Content-Type', 'text/plain');
            
            // código de status da resposta como 404, para mostrar que nenhum dado foi encontrado .
            response.statusCode = 404;
            
            // resposta como um texto indicando que nenhuma conta foi encontrada.
            response.responseBody = Blob.valueOf('Nenhuma conta encontrada');
        }
    }

}