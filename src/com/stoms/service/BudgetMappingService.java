package com.stoms.service;

import java.util.List;

import com.stoms.dao.BudgetMappingDAO;
import com.stoms.model.BudgetMapping;
import com.stoms.utils.JSONTranslation;

public class BudgetMappingService {
	private BudgetMappingDAO budgetMappingDAO;
	
	public BudgetMappingService() {
		
	}
	public String acquireMapping(String projectId) {
		List list = budgetMappingDAO.findByProjectId(projectId);
		/*
		 * the current project doesn't have a mapping, then use the default mapping 
		 */
		if(list.size() == 0) {
			String defaultProjectId = "000000";
			list = budgetMappingDAO.findByProjectId(defaultProjectId);
		}
		String[] excludes = {};
		
		return JSONTranslation.arrayToJson(list, excludes);
	}
	
	public void saveMapping(String projectId, String manager, String research, String srbusiness,
			String test, String energy, String meetings, String publishments, String otherSrbusiness,
			String experimentMaterial, String rawMaterial, String otherMaterial,String equipment, 
			String equipmentPurchase, String equipmentProduce, String labReconstruction,
			String collaboration, String internationalCommunication, String exportCommunication,
			String importCommunication, String labour, String management) {
		List list = budgetMappingDAO.findByProjectId(projectId);
		if(list.size() == 0) {
			BudgetMapping budgetMapping = new BudgetMapping(projectId, manager, research, srbusiness, test, 
					energy, meetings, publishments, otherSrbusiness, experimentMaterial, rawMaterial, otherMaterial, 
					equipment, equipmentPurchase, equipmentProduce, labReconstruction, collaboration, 
					internationalCommunication, exportCommunication, importCommunication, labour, management);
			budgetMappingDAO.save(budgetMapping);
		}
		else {
			BudgetMapping budgetMapping = (BudgetMapping) list.get(0);
			budgetMapping.setResearch(research);
			budgetMapping.setSrbusiness(srbusiness);
			budgetMapping.setTest(test);
			budgetMapping.setEnergy(energy);
			budgetMapping.setMeetings(meetings);
			budgetMapping.setPublishments(publishments);
			budgetMapping.setOtherSrbusiness(otherSrbusiness);
			budgetMapping.setExperimentMaterial(experimentMaterial);
			budgetMapping.setRawMaterial(rawMaterial);
			budgetMapping.setOtherMaterial(otherMaterial);
			budgetMapping.setEquipment(equipment);
			budgetMapping.setEquipmentPurchase(equipmentPurchase);
			budgetMapping.setEquipmentProduce(equipmentProduce);
			budgetMapping.setLabReconstruction(labReconstruction);
			budgetMapping.setCollaboration(collaboration);
			budgetMapping.setInternationalCommunication(internationalCommunication);
			budgetMapping.setExportCommunication(exportCommunication);
			budgetMapping.setImportCommunication(importCommunication);
			budgetMapping.setLabour(labour);
			budgetMapping.setManagement(management);
			
			budgetMappingDAO.attachDirty(budgetMapping);
		}
	}
	
	public BudgetMappingDAO getBudgetMappingDAO() {
		return budgetMappingDAO;
	}

	public void setBudgetMappingDAO(BudgetMappingDAO budgetMappingDAO) {
		this.budgetMappingDAO = budgetMappingDAO;
	}
}
