trigger AxyValidatorPizzaHutCustomersTrigger on Pizza_Hut_Customers__c (before insert, before update){
	try{
		axyvalidator.ValidatorTriggerHandler.run(Trigger.new);
	}catch(Exception e){}
}