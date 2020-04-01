trigger HelloWorldRecord on Account (before insert) {

  
    for(Account a : Trigger.New) {
        a.Description = 'New description';
        a.Type = 'Prospect';
        a.Industry = 'Food & Beverage';
    }   

    
}