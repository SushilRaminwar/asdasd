({
	 renderState: function(component) {
        var currentStep = component.get("v.currentStep"),
            allSteps = component.get("v.steps"),
            render = [],
            state = "slds-is-complete";
        allSteps.forEach(function(step){
            if(currentStep === step) {
                state = "slds-is-current";
            } else if(state === "slds-is-current") {
                state = "slds-is-incomplete";
            }
            render.push({ label: step, selected: state === "slds-is-current", state: state });
        });
        component.set("v.renderInfo", render);
    }
})