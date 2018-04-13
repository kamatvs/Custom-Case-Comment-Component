/*
* @Author: Venkatesh Kamat (VK)
* @Description: APEX Server Side Controller: CommunityCaseDisplayController 
* Provides methods to fetch case and work with case from Community
*/
public class CommunityCaseDisplayController {	
    
    @AuraEnabled
    public static List<CaseComment> getCaseComments(String caseId) {
        List<CaseComment> caseComments = 
                [SELECT Id, ParentId, IsPublished, CommentBody, CreatedDate, CreatedBy.Name, LastModifiedDate, LastModifiedById FROM CaseComment 
                 where parentId=:caseId order by CreatedDate desc];

        return caseComments;        
    }
    
    @AuraEnabled
    public static CaseComment addCaseComment(String caseId, String commentBody) {
        CaseComment caseComment = new CaseComment(ParentId=caseId, CommentBody=commentBody);
        insert caseComment;

        return caseComment;        
    }    
}