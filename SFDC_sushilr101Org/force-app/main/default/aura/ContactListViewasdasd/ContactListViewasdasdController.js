({
    init: function(component, event, helper) {
        // var action = component.get("c.getAccount");
     
         // action.setCallback(this, function(response) {
         // });
     
            var action1 = component.get('c.getProfiles');
        action1.setCallback(this, function(response){
            if (response.getState() === 'SUCCESS') {
                var result = response.getReturnValue();
                //alert(JSON.stringify(result))
                component.set('v.showCreate', result); 
                //alert(component.get('v.showCreate'))
            }
        });
        $A.enqueueAction(action1);
        
         component.set("v.columns", [
           { label: "NAME", fieldName: "Name", type: "text" },
            {
             label: "EMAIL",
             fieldName: "Email",
             sortable: true,
             type: "email",
             editable: "true"
           },
           {
             label: "WORK PHONE",
             fieldName: "Phone",
             sortable: true,
             type: "Phone",
             editable: "true"
           }

         ]);
     
         helper.getData(component);
       },

       getFilters : function(component, event, helper){
    
       component.set("v.columns", [
           { label: "NAME", fieldName: "Name", type: "text" },
            {
             label: "EMAIL",
             fieldName: "Email",
             sortable: true,
             type: "email",
             editable: "true"
           },
           {
             label: "WORK PHONE",
             fieldName: "Phone",
             sortable: true,
             type: "Phone",
             editable: "true"
           }
           
         ]);
       helper.getFiltrerdData(component);
     },
         print : function(component, event, helper){
         window.print();
     }
})