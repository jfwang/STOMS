<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>"></base>
    
    <title>My JSP 'passwordChange.jsp' starting page</title>
    
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
	<script type="text/javascript" src="JS/admin/adminInfo/adminPasswordChange.js"></script>
	<script type="text/javascript" src="JqueryLib/validationEngine/jquery.sha256.min.js"></script>
		
	<style type="text/css">
	
		* {
		margin: 0px;
		padding: 0px;
		}
		
		body {
			font-family: Arial, Helvetica, sans-serif;
			font-size: 12px;
			background-color: #FFFFFF;
			text-align: center;
		}
		
		td {
			height:40px;
		}
	</style>
  </head>
  
  <body>
  <div align = "center">
    <form action="" method = "post">
    	<table width = "40%">
    		<caption><h3>密码修改</h3></caption>
    		<tr>
    			<td>当前密码</td>
    			<td><input type="password" name="currentPassord" id = "currentPassord"/></td>
    		</tr>
    		<tr>
    			<td>新密码</td>
    			<td><input type="password" name="newPassord" id = "newPassord"/></td>
    		</tr>
    		<tr>
    			<td>确认新密码</td>
    			<td><input type="password" name="confirmPassord" id="confirmPassord"/></td>
    		</tr>
    		<tr>
    			<td colspan = "2" align = "center">    
    				<button type="button" onclick = "modifyTeacherPassord()">保存</button>
    				<button type="reset">重置</button>
    			</td>
    		</tr>
    	</table>
    </form>
    </div>
  </body>
</html>
