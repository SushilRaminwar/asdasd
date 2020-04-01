({
    doneRendering : function(component, event, helper) {
        window.setTimeout($A.getCallback(function() {
            if(component.isValid()) {
                $A.util.addClass(component, "slds-transition-hide");
            }
        }), component.get("v.fadeTimeout"));
    }
})