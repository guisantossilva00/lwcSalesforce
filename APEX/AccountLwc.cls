public with sharing class AccountLwc {
    
    
    @AuraEnabled
    public static String  criarConta(String nomeConta, String industry) {
        
        Account novaConta = new Account();
        
        novaConta.Name = nomeConta;
        novaConta.Industry = industry;

        insert novaConta;
        return novaConta.Id;
    }

    @AuraEnabled
    public static string updateConta(String recordId, String telefone){

        try {
            Account updateConta = new Account();
        
            updateConta.Id = recordId;
            updateConta.Phone = telefone;

            update updateConta;

            return 'true';
        } catch (Exception e) { // Captura exceções  caso ocorram e guardando na variável 'e'.
        
        //return 'Error: ' + e.getMessage();//retorna o erro somente no back end e não é enviado para o lwc
           throw new AuraHandledException('Campo Id não encontrado para atualizar o registro' + e.getMessage());
            //throw new AuraHandledException(e.getMessage()) é usado para lançar uma exceção personalizada que informa ao componente LWC no  que ocorreu um erro durante a execução do método updateConta, e essa exceção carrega a mensagem de erro e.getMessage() para  exibir ao usuário. Permite que o código do componente do Lightning trate o erro e apresente uma mensagem de erro ao usuário.
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getListAccount(){
        return [
            SELECT Id, Name
            FROM Account
        ];
    }
}