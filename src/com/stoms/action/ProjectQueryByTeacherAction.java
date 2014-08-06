/**
 * @author WJF
 * 
 * acquire all projects owned by a specific teacher
 * 
 */
package com.stoms.action;

import java.util.List;

import com.stoms.dao.TeacherDAO;
import com.stoms.model.Teacher;
import com.stoms.service.ProjectQueryAdminService;

public class ProjectQueryByTeacherAction {
	// two results for all the action
	private String jsonResult;
	private boolean actionStatus;
	
	private String teacherId;

	private ProjectQueryAdminService projectQueryAdminService;
	
	private TeacherDAO teacherDAO;
	
	public String projectQuery() {
		String projectid = "";
		String contractid = "";
		String typeid = "";
		String projectname = "";
		String departmentid = "";
		String departmenttype = "";
		String teachername = "";
		String startDate = "";
		String endDate = "";
		
		//根据teacherId在teacher表中查找相应的对象
        List<?> teacherList = teacherDAO.findByTeacherId(teacherId);
        if(teacherList == null || teacherList.size() == 0) {
        	this.actionStatus = false;
			this.jsonResult = "";
			return "success";
        }
        Teacher tempTeacher = (Teacher)teacherList.get(0);
        teachername = tempTeacher.getTeacherName();
        departmentid = tempTeacher.getDepartmentId();
        
		String projectList = projectQueryAdminService.itemQuery(
				projectid,contractid,typeid,projectname,departmentid,departmenttype,teachername,startDate,endDate);
		if(projectList.equals("") ) {
			this.actionStatus = false;
			this.jsonResult = "";
		}
		else {
			this.actionStatus = true;
			this.jsonResult = projectList;
		}
		return "success";
	}

	public String getJsonResult() {
		return jsonResult;
	}

	public void setJsonResult(String jsonResult) {
		this.jsonResult = jsonResult;
	}

	public boolean isActionStatus() {
		return actionStatus;
	}

	public void setActionStatus(boolean actionStatus) {
		this.actionStatus = actionStatus;
	}

	public String getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}

	public ProjectQueryAdminService getProjectQueryAdminService() {
		return projectQueryAdminService;
	}

	public void setProjectQueryAdminService(
			ProjectQueryAdminService projectQueryAdminService) {
		this.projectQueryAdminService = projectQueryAdminService;
	}
	
	public TeacherDAO getTeacherDAO() {
		return teacherDAO;
	}

	public void setTeacherDAO(TeacherDAO teacherDAO) {
		this.teacherDAO = teacherDAO;
	}
}
