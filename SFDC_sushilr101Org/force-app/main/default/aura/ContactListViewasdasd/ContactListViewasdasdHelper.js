({
    getData: function(cmp) {
        var action = cmp.get("c.getAccount");
        action.setCallback(
          this,
          $A.getCallback(function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
              cmp.set("v.mydata", response.getReturnValue());
            } else if (state === "ERROR") {
              var errors = response.getError();
              console.error(errors);
            }
          })
        );
        $A.enqueueAction(action);
      },

      getFiltrerdData: function(cmp) {
        
        var city = cmp.find("asdasd").get("v.value");
        // var indus = cmp.find("qweqwe").get("v.value");
        
    var action = cmp.get("c.getFilterType");
         action.setParams({ 'cName' : String(city)});
         
    action.setCallback(
      this,
      $A.getCallback(function(response) {
        var state = response.getState();
                  if (state === "SUCCESS") {
          cmp.set("v.mydata", response.getReturnValue());
        } else if (state === "ERROR") {
          var errors = response.getError();
          console.error(errors);
        }
      })
    );
    $A.enqueueAction(action);
  },
    
  print: function(component, event, helper) {
    window.print();
  }
})