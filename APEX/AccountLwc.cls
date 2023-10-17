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
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
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