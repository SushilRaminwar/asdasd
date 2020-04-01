trigger AccountAddressTrigger on Account (before insert, before update) {

    for(Account acc : trigger.new)
    {
        if(acc.Match_Billing_address__c==TRUE)
        {
         	acc.ShippingPostalCode = acc.BillingPostalCode ;
        }
    }
}