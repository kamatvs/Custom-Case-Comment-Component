({
    getData : function(cmp) {
        var caseId = cmp.get("v.recordId");
		console.log('entered casecomments getData, caseId - '+ caseId); 
		       
        var action = cmp.get('c.getCaseComments');
        action.setParams({
            "caseId": caseId
        });
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var commentslist = response.getReturnValue();

                var element;
                for (var i = 0; i < commentslist.length; i++) {
                    element = commentslist[i];
                    element.createByName = element.CreatedBy.Name;
					console.log('commentslist CreatedBy- '+ element.CreatedBy.Name);
				}                
               	
                cmp.set("v.commentsdata", commentslist);

            } else if (state === "ERROR") {
                console.log('state - '+ state);
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    }
})