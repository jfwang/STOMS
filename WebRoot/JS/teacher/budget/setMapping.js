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
	

	$("#resetButton").click(function(check) { 
		generalAjaxCallToLoadData("acquireMapping.action",{"projectId":"000000"},initializeMapping);
	});
	
	$("#saveButton").click(function(check) { 
		var submitData = acquireFormData();
		if(validateData(submitData) == true) {
			generalAjaxCallToLoadData("saveMapping.action",submitData,showSaveMappingResult);
		}
		else {
			confirm("提交数据格式错误！");
		}
	});
	
	$("#startButton").click(function(check) { 
		var url = "Page/Teacher/budget/expenditureStatistics.jsp?projectId=" + projectId + "&flag=0";
	    parent.pageTransition(url);
	});
	/**
	 * acquire the budget mapping by project id
	 */
	generalAjaxCallToLoadData("acquireMapping.action",{"projectId":projectId},initializeMapping);
});

function initializeMapping(data){
	if(!data.actionStatus) {
		console.log("initialize mapping failed!");
		return false;
	}
	var mapping = data.jsonResult[0];
	$("#research").val(mapping.research);
	$("#srbusiness").val(mapping.srbusiness);
	$("#test").val(mapping.test);
	$("#energy").val(mapping.energy);
	$("#meetings").val(mapping.meetings);
	$("#publishments").val(mapping.publishments);
	$("#other_srbusiness").val(mapping.other_srbusiness);
	$("#experiment_material").val(mapping.experiment_material);
	$("#raw_material").val(mapping.raw_material);
	$("#other_material").val(mapping.other_material);
	$("#equipment").val(mapping.equipment);
	$("#equipment_purchase").val(mapping.equipment_purchase);
	$("#equipment_produce").val(mapping.equipment_produce);
	$("#lab_reconstruction").val(mapping.lab_reconstruction);
	$("#collaboration").val(mapping.collaboration);
	$("#international_communication").val(mapping.international_communication);
	$("#export_communication").val(mapping.export_communication);
	$("#import_communication").val(mapping.import_communication);
	$("#labour").val(mapping.labour);
	$("#management").val(mapping.management);
	return true;
}

function showSaveMappingResult(data) {
	if(!data.actionStatus) {
		confirm("保存设置失败！");
		console.log("save mapping failed!");
		return false;
	}
	else {
		confirm("保存设置成功！");
		console.log("save mapping succeeded!");
		return true;
	}
	
}

function acquireFormData() {
	var research = $("#research").val();
	var srbusiness = $("#srbusiness").val();
	var test = $("#test").val();
	var energy = $("#energy").val();
	var meetings = $("#meetings").val();
	var publishments = $("#publishments").val();
	var otherSrbusiness = $("#other_srbusiness").val();
	var experimentMaterial = $("#experiment_material").val();
	var rawMaterial = $("#raw_material").val();
	var otherMaterial = $("#other_material").val();
	var equipment = $("#equipment").val();
	var equipmentPurchase = $("#equipment_purchase").val();
	var equipmentProduce = $("#equipment_produce").val();
	var labReconstruction = $("#lab_reconstruction").val();
	var collaboration = $("#collaboration").val();
	var internationalCommunication = $("#international_communication").val();
	var exportCommunication = $("#export_communication").val();
	var importCommunication = $("#import_communication").val();
	var labour = $("#labour").val();
	var management = $("#management").val();
	
	var formData = {};
	formData["projectId"] = projectId;
	formData["manager"] = teacherId;
	formData["research"] = research;
	formData["srbusiness"] = srbusiness;
	formData["test"] = test;
	formData["energy"] = energy;
	formData["meetings"] = meetings;
	formData["publishments"] = publishments;
	formData["otherSrbusiness"] = otherSrbusiness;
	formData["experimentMaterial"] = experimentMaterial;
	formData["rawMaterial"] = rawMaterial;
	formData["otherMaterial"] = otherMaterial;
	formData["equipment"] = equipment;
	formData["equipmentPurchase"] = equipmentPurchase;
	formData["equipmentProduce"] = equipmentProduce;
	formData["labReconstruction"] = labReconstruction;
	formData["collaboration"] = collaboration;
	formData["internationalCommunication"] = internationalCommunication;
	formData["exportCommunication"] = exportCommunication;
	formData["importCommunication"] = importCommunication;
	formData["labour"] = labour;
	formData["management"] = management;
	
	return formData;
}

function validateData() {
	return false;
}