({
    handleSelect : function (component, event, helper) {
        var stepName = event.getParam("detail").value;
        console.log(stepName);
        console.log(component.get("v.recordId"));
        var action = component.get("c.updateStage");
       action.setParams({stageName:stepName , recordId : component.get("v.recordId")});
       //   action.setParams({stageName:'Id. Decision Makers' , recordId : '0062v00001BY1AdAAL'});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var toastEvent = $A.get("e.force:showToast");
                if (state === 'SUCCESS'){
                    toastEvent.setParams({
                        "title": "Success!",
                        "message": " Status is Update Succesfully !."
                    });
                }
                toastEvent.fire();
                $A.get('e.force:refreshView').fire();
                
            }
        });
        $A.enqueueAction(action);
    }
})