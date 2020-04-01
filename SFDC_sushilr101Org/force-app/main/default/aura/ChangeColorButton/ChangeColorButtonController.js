({
    getInput : function(cmp, evt) {
        var myName = cmp.find("name").get("v.value");
        var myText = cmp.find("outName");
        var greet = "Hi, " + myName;
        myText.set("v.value", greet);
        console.log("button = " + greet);
    },
    
     doAction : function(component, event, helper){
console.log("PLAIN TEXT = " );
 var button = component.find("myButton");
         console.log("button = " +button);
 $A.util.addClass(button.getElement(), 'invisible');
   


 },
    
    
    applyCSS: function(cmp, event) {
        var cmpTarget = cmp.find('changeIt');
        $A.util.addClass(cmpTarget, 'changeMe');
    },
    
    removeCSS: function(cmp, event) {
        var cmpTarget = cmp.find('changeIt');
        $A.util.removeClass(cmpTarget, 'changeMe');
    }

})