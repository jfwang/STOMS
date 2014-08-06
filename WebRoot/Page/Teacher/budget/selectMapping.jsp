<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'selectMapping.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" type="text/css" href="CSS/page.css">
	
	<script type="text/javascript" src="JqueryLib/development-bundle/jquery-1.6.2.js"></script>
	<script type="text/javascript" src="JS/common/util.js"></script>
	<script type="text/javascript" src="JS/teacher/budget/selectMapping.js"></script>
	
	<script type="text/javascript">
  		var projectId = "<%=request.getParameter("projectId")%>";
	</script>
  </head>
  
  <body>
    <div style = "width:95%" align = "center" id="container"> 		
  		<div class = "demo_jui">
  			<table id = "departmentTable" cellpadding="0" cellspacing="0" border="0" class="display">
  			</table>
  		</div>
  		<div>
  		<button type="button" id = "resetButton">恢复默认</button>
  		<button type="button" id = "startButton">开始统计</button>
  	</div>
  	</div >
  </body>
</html>
