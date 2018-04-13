({
   init: function (cmp, event, helper) {
        cmp.set('v.RLcolumns', [
            {label: 'Comment', fieldName: 'CommentBody', type: 'text'},
            {label: 'Created Date', fieldName: 'CreatedDate', type: 'date',
             typeAttributes: {year:'numeric', month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit'}, initialWidth:'200'},
            {label: 'Created By', fieldName: 'createByName', type: 'text', initialWidth:'200'}
        ]);
        helper.getData(cmp);
    },
    
   displayAddComment: function (cmp, event, helper) { 
       var displayPopup = cmp.find("displayPopup");
       var backGroundSectionId = displayPopup.find("backGroundSectionId"); 
       
       $A.util.addClass(displayPopup, "slds-fade-in-open");
       $A.util.removeClass(displayPopup, "slds-fade-in-hide");
       
       $A.util.addClass(backGroundSectionId, "slds-backdrop--open");
       $A.util.removeClass(backGroundSectionId, "slds-backdrop--close");
   },
    
   hidePopup: function(component,event){
       var displayPopup = component.find("displayPopup");
       var backGroundSectionId = displayPopup.find("backGroundSectionId");
       
       $A.util.removeClass(displayPopup, "slds-fade-in-open");
       $A.util.addClass(displayPopup, "slds-fade-in-hide");
       
       $A.util.removeClass(backGroundSectionId, "slds-backdrop--open");
       $A.util.addClass(backGroundSectionId, "slds-backdrop--close");       
    }    
})