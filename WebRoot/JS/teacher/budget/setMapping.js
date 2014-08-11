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
		generalAjaxCallToLoadData("saveMapping.action",submitData,showSaveMappingResult);
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

function generateArray() {
	var array = new Array();
	array["0522020101"]="0522020101办公用品";
	array["0522020102"]="0522020102书报杂志";
	array["0522020103"]="0522020103教材、资料费";
	array["0522020199"]="0522020199其他";
	array["0522020201"]="0522020201实验材料";
	array["0522020204"]="0522020204低值仪器";
	array["0522020299"]="0522020299其他";
	array["05220203"]="05220203印刷费";
	array["0522020403"]="0522020403临时聘用人员费用";
	array["05220205"]="05220205电费";
	array["0522020601"]="0522020601邮费";
	array["0522020602"]="0522020602办公电话通讯费";
	array["0522020603"]="0522020603住宅电话通讯费";
	array["0522021101"]="0522021101出差交通住宿费";
	array["0522021102"]="0522021102出差补贴";
	array["0522021201"]="0522021201仪器设备维修费";
	array["05220215"]="05220215培训费";
	array["0522021602"]="0522021602外事费";
	array["0522022101"]="0522022101出差交通住宿费";
	array["0522022101"]="0522022101出差补贴";
	array["0522029901"]="0522029901科研管理费";
	array["0522029902"]="0522029902国内专家来访费";
	array["0522029999"]="0522029999其他";
	array["0522032528"]="0522032528硕士生助教助研酬金";
	array["0522032538"]="0522032538博士生助教助研酬金";
	array["0522040202"]="0522040202家具设备购置费";
	array["05220403"]="05220403专用设备购置费";
	
	return array;
}

/******************************select item0******************************/
//创建用于显示隐藏的tableDiv  
var div0;  
function showDiv0() {  
	div0.style.display = "block";  
}  
function hideDiv0() {  
	div0.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue0() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox0.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox0[i].checked) {  
			var v = form.checkbox0[i].value;   
			value = value + v + ";";  
		}  
	}  
	form.research.value = value;  
}  
function setSelectBox0(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div0 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div0 = document.createElement("div0");  
		div0.onmouseover = showDiv0;  
		div0.onmouseout = hideDiv0;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox0" value="' + key + '" onchange="updateValue0()">' + myArray[key] + '</td></tr>';  
		}	  
		trs += '</table></div>';  
		div0.innerHTML = trs;    
		textItem.parentNode.appendChild(div0);  
	} 	 
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv0();  
	}  
}  

function selectItem0(textItem) { 
	var myArray = generateArray();
	setSelectBox0(textItem, myArray); 
}

/******************************select item1******************************/
//创建用于显示隐藏的tableDiv  
var div1;  
function showDiv1() {  
	div1.style.display = "block";  
}  
function hideDiv1() {  
	div1.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue1() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox1.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox1[i].checked) {  
			var v = form.checkbox1[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.srbusiness.value = value;  
}  
function setSelectBox1(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div1 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div1 = document.createElement("div1");  
		div1.onmouseover = showDiv1;  
		div1.onmouseout = hideDiv1;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox1" value="' + key + '" onchange="updateValue1()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div1.innerHTML = trs;    
		textItem.parentNode.appendChild(div1);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv1();  
	}  
}  

function selectItem1(textItem) { 
	var myArray = generateArray(); 
	setSelectBox1(textItem, myArray); 
}

/******************************select item2******************************/
//创建用于显示隐藏的tableDiv  
var div2;  
function showDiv2() {  
	div2.style.display = "block";  
}  
function hideDiv2() {  
	div2.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue2() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox2.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox2[i].checked) {  
			var v = form.checkbox2[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.test.value = value;  
}  
function setSelectBox2(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div2 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div2 = document.createElement("div2");  
		div2.onmouseover = showDiv2;  
		div2.onmouseout = hideDiv2;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox2" value="' + key + '" onchange="updateValue2()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div2.innerHTML = trs;    
		textItem.parentNode.appendChild(div2);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv2();  
	}  
}  

function selectItem2(textItem) { 
	var myArray = generateArray(); 
	setSelectBox2(textItem, myArray); 
}

/******************************select item3******************************/
//创建用于显示隐藏的tableDiv  
var div3;  
function showDiv3() {  
	div3.style.display = "block";  
}  
function hideDiv3() {  
	div3.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue3() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox3.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox3[i].checked) {  
			var v = form.checkbox3[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.energy.value = value;  
}  
function setSelectBox3(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div3 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div3 = document.createElement("div3");  
		div3.onmouseover = showDiv3;  
		div3.onmouseout = hideDiv3;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox3" value="' + key + '" onchange="updateValue3()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div3.innerHTML = trs;    
		textItem.parentNode.appendChild(div3);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv3();  
	}  
}  

function selectItem3(textItem) { 
	var myArray = generateArray();
	setSelectBox3(textItem, myArray); 
}

/******************************select item4******************************/
//创建用于显示隐藏的tableDiv  
var div4;  
function showDiv4() {  
	div4.style.display = "block";  
}  
function hideDiv4() {  
	div4.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue4() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox4.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox4[i].checked) {  
			var v = form.checkbox4[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.meetings.value = value;  
}  
function setSelectBox4(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div4 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div4 = document.createElement("div4");  
		div4.onmouseover = showDiv4;  
		div4.onmouseout = hideDiv4;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox4" value="' + key + '" onchange="updateValue4()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div4.innerHTML = trs;    
		textItem.parentNode.appendChild(div4);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv4();  
	}  
}  

function selectItem4(textItem) { 
	var myArray = generateArray(); 
	setSelectBox4(textItem, myArray); 
}

/******************************select item5******************************/
//创建用于显示隐藏的tableDiv  
var div5;  
function showDiv5() {  
	div5.style.display = "block";  
}  
function hideDiv5() {  
	div5.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue5() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox5.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox5[i].checked) {  
			var v = form.checkbox5[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.publishments.value = value;  
}  
function setSelectBox5(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div5 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div5 = document.createElement("div5");  
		div5.onmouseover = showDiv5;  
		div5.onmouseout = hideDiv5;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox5" value="' + key + '" onchange="updateValue5()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div5.innerHTML = trs;    
		textItem.parentNode.appendChild(div5);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv5();  
	}  
}  

function selectItem5(textItem) { 
	var myArray = generateArray();
	setSelectBox5(textItem, myArray); 
}

/******************************select item6******************************/
//创建用于显示隐藏的tableDiv  
var div6;  
function showDiv6() {  
	div6.style.display = "block";  
}  
function hideDiv6() {  
	div6.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue6() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox6.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox6[i].checked) {  
			var v = form.checkbox6[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.other_srbusiness.value = value;  
}  
function setSelectBox6(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div6 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div6 = document.createElement("div6");  
		div6.onmouseover = showDiv6;  
		div6.onmouseout = hideDiv6;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox6" value="' + key + '" onchange="updateValue6()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div6.innerHTML = trs;    
		textItem.parentNode.appendChild(div6);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv6();  
	}  
}  

function selectItem6(textItem) { 
	var myArray = generateArray();
	setSelectBox6(textItem, myArray); 
}

/******************************select item7******************************/
//创建用于显示隐藏的tableDiv  
var div7;  
function showDiv7() {  
	div7.style.display = "block";  
}  
function hideDiv7() {  
	div7.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue7() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox7.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox7[i].checked) {  
			var v = form.checkbox7[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.experiment_material.value = value;  
}  
function setSelectBox7(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div7 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div7 = document.createElement("div7");  
		div7.onmouseover = showDiv7;  
		div7.onmouseout = hideDiv7;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox7" value="' + key + '" onchange="updateValue7()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div7.innerHTML = trs;    
		textItem.parentNode.appendChild(div7);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv7();  
	}  
}  

function selectItem7(textItem) { 
	var myArray = generateArray(); 
	setSelectBox7(textItem, myArray); 
}

/******************************select item8******************************/
//创建用于显示隐藏的tableDiv  
var div8;  
function showDiv8() {  
	div8.style.display = "block";  
}  
function hideDiv8() {  
	div8.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue8() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox8.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox8[i].checked) {  
			var v = form.checkbox8[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.raw_material.value = value;  
}  
function setSelectBox8(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div8 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div8 = document.createElement("div8");  
		div8.onmouseover = showDiv8;  
		div8.onmouseout = hideDiv8;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox8" value="' + key + '" onchange="updateValue8()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div8.innerHTML = trs;    
		textItem.parentNode.appendChild(div8);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv8();  
	}  
}  

function selectItem8(textItem) { 
	var myArray = generateArray(); 
	setSelectBox8(textItem, myArray); 
}

/******************************select item9******************************/
//创建用于显示隐藏的tableDiv  
var div9;  
function showDiv9() {  
	div9.style.display = "block";  
}  
function hideDiv9() {  
	div9.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue9() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox9.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox9[i].checked) {  
			var v = form.checkbox9[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.other_material.value = value;  
}  
function setSelectBox9(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div9 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div9 = document.createElement("div9");  
		div9.onmouseover = showDiv9;  
		div9.onmouseout = hideDiv9;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox9" value="' + key + '" onchange="updateValue9()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div9.innerHTML = trs;    
		textItem.parentNode.appendChild(div9);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv9();  
	}  
}  

function selectItem9(textItem) { 
	var myArray = generateArray();
	setSelectBox9(textItem, myArray); 
}

/******************************select item10******************************/
//创建用于显示隐藏的tableDiv  
var div10;  
function showDiv10() {  
	div10.style.display = "block";  
}  
function hideDiv10() {  
	div10.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue10() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox10.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox10[i].checked) {  
			var v = form.checkbox10[i].value;   
			value = value + v + ";";  
		}  
	}  
	form.equipment.value = value;  
}  
function setSelectBox10(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div10 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div10 = document.createElement("div10");  
		div10.onmouseover = showDiv10;  
		div10.onmouseout = hideDiv10;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox10" value="' + key + '" onchange="updateValue10()">' + myArray[key] + '</td></tr>';  
		}	  
		trs += '</table></div>';  
		div10.innerHTML = trs;    
		textItem.parentNode.appendChild(div10);  
	} 	 
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv10();  
	}  
}  

function selectItem10(textItem) { 
	var myArray = generateArray();
	setSelectBox10(textItem, myArray); 
}

/******************************select item11******************************/
//创建用于显示隐藏的tableDiv  
var div11;  
function showDiv11() {  
	div11.style.display = "block";  
}  
function hideDiv11() {  
	div11.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue11() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox11.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox11[i].checked) {  
			var v = form.checkbox11[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.equipment_purchase.value = value;  
}  
function setSelectBox11(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div11 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div11 = document.createElement("div11");  
		div11.onmouseover = showDiv11;  
		div11.onmouseout = hideDiv11;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox11" value="' + key + '" onchange="updateValue11()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div11.innerHTML = trs;    
		textItem.parentNode.appendChild(div11);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv11();  
	}  
}  

function selectItem11(textItem) { 
	var myArray = generateArray();
	setSelectBox11(textItem, myArray); 
}

/******************************select item12******************************/
//创建用于显示隐藏的tableDiv  
var div12;  
function showDiv12() {  
	div12.style.display = "block";  
}  
function hideDiv12() {  
	div12.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue12() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox12.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox12[i].checked) {  
			var v = form.checkbox12[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.equipment_produce.value = value;  
}  
function setSelectBox12(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div12 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div12 = document.createElement("div12");  
		div12.onmouseover = showDiv12;  
		div12.onmouseout = hideDiv12;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox12" value="' + key + '" onchange="updateValue12()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div12.innerHTML = trs;    
		textItem.parentNode.appendChild(div12);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv12();  
	}  
}  

function selectItem12(textItem) { 
	var myArray = generateArray(); 
	setSelectBox12(textItem, myArray); 
}

/******************************select item13******************************/
//创建用于显示隐藏的tableDiv  
var div13;  
function showDiv13() {  
	div13.style.display = "block";  
}  
function hideDiv13() {  
	div13.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue13() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox13.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox13[i].checked) {  
			var v = form.checkbox13[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.lab_reconstruction.value = value;  
}  
function setSelectBox13(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div13 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div13 = document.createElement("div13");  
		div13.onmouseover = showDiv13;  
		div13.onmouseout = hideDiv13;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox13" value="' + key + '" onchange="updateValue13()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div13.innerHTML = trs;    
		textItem.parentNode.appendChild(div13);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv13();  
	}  
}  

function selectItem13(textItem) { 
	var myArray = generateArray();
	setSelectBox13(textItem, myArray); 
}

/******************************select item14******************************/
//创建用于显示隐藏的tableDiv  
var div14;  
function showDiv14() {  
	div14.style.display = "block";  
}  
function hideDiv14() {  
	div14.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue14() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox14.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox14[i].checked) {  
			var v = form.checkbox14[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.collaboration.value = value;  
}  
function setSelectBox14(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div14 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div14 = document.createElement("div14");  
		div14.onmouseover = showDiv14;  
		div14.onmouseout = hideDiv14;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox14" value="' + key + '" onchange="updateValue14()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div14.innerHTML = trs;    
		textItem.parentNode.appendChild(div14);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv14();  
	}  
}  

function selectItem14(textItem) { 
	var myArray = generateArray();
	setSelectBox14(textItem, myArray); 
}

/******************************select item15******************************/
//创建用于显示隐藏的tableDiv  
var div15;  
function showDiv15() {  
	div15.style.display = "block";  
}  
function hideDiv15() {  
	div15.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue15() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox15.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox15[i].checked) {  
			var v = form.checkbox15[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.international_communication.value = value;  
}  
function setSelectBox15(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div15 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div15 = document.createElement("div15");  
		div15.onmouseover = showDiv15;  
		div15.onmouseout = hideDiv15;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox15" value="' + key + '" onchange="updateValue15()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div15.innerHTML = trs;    
		textItem.parentNode.appendChild(div15);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv15();  
	}  
}  

function selectItem15(textItem) { 
	var myArray = generateArray();
	setSelectBox15(textItem, myArray); 
}

/******************************select item16******************************/
//创建用于显示隐藏的tableDiv  
var div16;  
function showDiv16() {  
	div16.style.display = "block";  
}  
function hideDiv16() {  
	div16.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue16() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox16.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox16[i].checked) {  
			var v = form.checkbox16[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.export_communication.value = value;  
}  
function setSelectBox16(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div16 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div16 = document.createElement("div16");  
		div16.onmouseover = showDiv16;  
		div16.onmouseout = hideDiv16;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox16" value="' + key + '" onchange="updateValue16()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div16.innerHTML = trs;    
		textItem.parentNode.appendChild(div16);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv16();  
	}  
}  

function selectItem16(textItem) { 
	var myArray = generateArray();
	setSelectBox16(textItem, myArray); 
}

/******************************select item17******************************/
//创建用于显示隐藏的tableDiv  
var div17;  
function showDiv17() {  
	div17.style.display = "block";  
}  
function hideDiv17() {  
	div17.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue17() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox17.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox17[i].checked) {  
			var v = form.checkbox17[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.import_communication.value = value;  
}  
function setSelectBox17(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div17 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div17 = document.createElement("div17");  
		div17.onmouseover = showDiv17;  
		div17.onmouseout = hideDiv17;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox17" value="' + key + '" onchange="updateValue17()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div17.innerHTML = trs;    
		textItem.parentNode.appendChild(div17);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv17();  
	}  
}  

function selectItem17(textItem) { 
	var myArray = generateArray();
	setSelectBox17(textItem, myArray); 
}

/******************************select item18******************************/
//创建用于显示隐藏的tableDiv  
var div18;  
function showDiv18() {  
	div18.style.display = "block";  
}  
function hideDiv18() {  
	div18.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue18() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox18.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox18[i].checked) {  
			var v = form.checkbox18[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.labour.value = value;  
}  
function setSelectBox18(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div18 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div18 = document.createElement("div18");  
		div18.onmouseover = showDiv18;  
		div18.onmouseout = hideDiv18;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox18" value="' + key + '" onchange="updateValue18()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div18.innerHTML = trs;    
		textItem.parentNode.appendChild(div18);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv18();  
	}  
}  

function selectItem18(textItem) { 
	var myArray = generateArray();
	setSelectBox18(textItem, myArray); 
}

/******************************select item19******************************/
//创建用于显示隐藏的tableDiv  
var div19;  
function showDiv19() {  
	div19.style.display = "block";  
}  
function hideDiv19() {  
	div19.style.display = "none";  
}  

/* 
*根据复选框中的数值，更新input表单的显示。 
*当下拉框中每个checkbox被点击后，触发刚方法。 
*/  
function updateValue19() {  
	var value = "";   
	var form = document.getElementById("mappingForm");  
	var len = form.checkbox19.length;  
	for (var i = 0; i < len; i++) {  
		if (form.checkbox19[i].checked) {  
			var v = form.checkbox19[i].value;   
			value = value + v + ";";  
		}  	
	}  
	form.management.value = value;  
}  
function setSelectBox19(textItem, myArray) {  
	//复选下拉框首次创建，并显示  
	if (div19 == undefined) {  
		var itemTop = textItem.offsetTop;    //控件的定位点top  
		var itemHeight = textItem.clientHeight;    //控件本身的height  
		var itemLeft = textItem.offsetLeft;    //控件的定位点left  

		var top = itemTop + itemHeight - 5;  

		div19 = document.createElement("div19");  
		div19.onmouseover = showDiv19;  
		div19.onmouseout = hideDiv19;  
		//下拉层的位置、下拉滚动等样式  
		var trs = '<div id="tableDiv" style="position:abosolute;text-align: center;OVERFLOW: auto; SCROLLBAR-BASE-COLOR: #cccccc; HEIGHT: 200px;SCROLLBAR-FACE-COLOR: #ffffff;top:' + top + '; left:' + itemLeft + ';WIDTH:150px;Z-INDEX: 1;SCROLLBAR-SHADOW-COLOR:#cccccc;SCROLLBAR-ARROW-COLOR: #cccccc;SCROLLBAR-3DLIGHT-COLOR: #cccccc; background-color: #ffffff; border: 1px solid grey"><table>';  
		trs += '<table>';  
		//初始化下拉的选项  
		for (var key in myArray) {  
			trs += '<tr><td><input type="checkbox" name="checkbox19" value="' + key + '" onchange="updateValue19()">' + myArray[key] + '</td></tr>';  
		}  
		trs += '</table></div>';  
		div19.innerHTML = trs;    
		textItem.parentNode.appendChild(div19);  
	}  
	else {  
		//该复选下拉的层已经创建了，那么再次点击input表单的时候，显示  
		showDiv19();  
	}  
}  

function selectItem19(textItem) { 
	var myArray = generateArray();
	setSelectBox19(textItem, myArray); 
}