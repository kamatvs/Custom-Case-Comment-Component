({
    handleAddComment: function(component, event, helper) {
        console.log('handleAddComment  ' + component.get("v.recordId"));
        
        // Prepare the action to create new case comment
        var addCommentAction = component.get("c.addCaseComment");
        addCommentAction.setParams({
            "commentBody": component.get("v.newComment"),
            "caseId": component.get("v.recordId")
        });
        
        // Configure the response handler for the action
        addCommentAction.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                $A.get("e.force:refreshView").fire();
            }
            else if (state === "ERROR") {
                console.log('Problem saving contact, response state: ' + state);
            }
            else {
                console.log('Unknown problem, response state: ' + state);
            }
        });
        
        // Send the request to create the new comment
        $A.enqueueAction(addCommentAction);        
    }
})