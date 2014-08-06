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
	
	generalAjaxCallToLoadData("acquireProjectsByTeacher.action",teacherId,attachProjects);
});

function selectProject() {
	var projectId = $("#project").val();
	//projectId = "123456";
	var url = "Page/Teacher/budget/verifyBudget.jsp?projectId=" + projectId + "&flag=0";
    parent.pageTransition(url);
}

//加载项目
function attachProjects(data) {
	/*
	if(!data.actionStatus) {
		openGeneralMessageDialog("加载项目失败 请检查数据库连接");
		return false;
	}
	var jsonResult = data.jsonResult;
	
	for(var i = 0; i < jsonResult.length; i++) {
		
		var tempProject = jsonResult[i];	
		var projectId = tempProject.itemId;
		var projectName = tempProject.itemName;
		
		tempOption = "<option value='" + projectId + "'>" + projectName + "</option>";
		$("#project").append(tempOption);
	}
	*/
	tempOption1 = "<option value='" + "123456" + "'>" + "项目一" + "</option>";
	$("#project").append(tempOption1);
	
	tempOption2 = "<option value='" + "234567" + "'>" + "项目二" + "</option>";
	$("#project").append(tempOption2);
}