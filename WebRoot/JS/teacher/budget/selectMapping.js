$(document).ready(function(){
	
	consoleResponseInUnusabalEnvirenment();
	
	/******************************* 显示导航条 开始****************************************/
	var tempPagePaths = [
	                 {
	                	"name":"经费统计",
	                	"href":""
	                 },
	                 {
	                	"name":"支出统计",
		                "href":""
	                 }];
	parent.pathWayRender(tempPagePaths);
	/******************************* 显示导航条 结束****************************************/
	

	$("#addDepartmentButton").click(function(check) { 
		
    	var url = "Page/Admin/fundamentalDataMaintainance/departmentEdit.jsp?departmentPK=" + "null" + "&IsModifyPage=" + "no";
    	parent.pageTransition(url);
	});
	
	/**
	 * acquire the budget mapping by project id
	 */
	generalAjaxCallToLoadData("acquireAllDepartmentInfo.action",{},initializeDepartmentTable);
});