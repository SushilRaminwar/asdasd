({
	 click: function(component, event, helper) {
        var index = parseInt(event.target.closest("[data-index]").dataset.index), 
            value, onselect, steps = component.get("v.steps");
        if(index !== undefined) {
            event.preventDefault();
            value = steps[index];
            component.set("v.currentStep", value);
            onselect = component.getEvent("onselect");
            onselect.setParams({ value: value });
            onselect.fire();
            helper.renderState(component);
        }
    },
    update: function(component, event, helper) {
        helper.renderState(component);
    }
})