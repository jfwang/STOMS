package com.stoms.model;



/**
 * SocialScienceOutlay entity. @author MyEclipse Persistence Tools
 */

public class SocialScienceOutlay  implements java.io.Serializable {


    // Fields    

     private Long socialScienceOutlayPk;
     private Long itemPk;
     private String itemId;
     private Double materialCost;
     private Double dataCost;
     private Double travelCost;
     private Double conferenceCost;
     private Double exchangeCost;
     private Double equipmentCost;
     private Double serviceCost;
     private Double consultCost;
     private Double printCost;
     private Double manageCost;
     private Double otherCost;
     private Double costSum;
     private String outlayTime;


    // Constructors

    /** default constructor */
    public SocialScienceOutlay() {
    }

	/** minimal constructor */
    public SocialScienceOutlay(Long socialScienceOutlayPk) {
        this.socialScienceOutlayPk = socialScienceOutlayPk;
    }
    
    /** full constructor */
    public SocialScienceOutlay(Long socialScienceOutlayPk, Long itemPk, String itemId, Double materialCost, Double dataCost, Double travelCost, Double conferenceCost, Double exchangeCost, Double equipmentCost, Double serviceCost, Double consultCost, Double printCost, Double manageCost, Double otherCost, Double costSum, String outlayTime) {
        this.socialScienceOutlayPk = socialScienceOutlayPk;
        this.itemPk = itemPk;
        this.itemId = itemId;
        this.materialCost = materialCost;
        this.dataCost = dataCost;
        this.travelCost = travelCost;
        this.conferenceCost = conferenceCost;
        this.exchangeCost = exchangeCost;
        this.equipmentCost = equipmentCost;
        this.serviceCost = serviceCost;
        this.consultCost = consultCost;
        this.printCost = printCost;
        this.manageCost = manageCost;
        this.otherCost = otherCost;
        this.costSum = costSum;
        this.outlayTime = outlayTime;
    }

   
    // Property accessors

    public Long getSocialScienceOutlayPk() {
        return this.socialScienceOutlayPk;
    }
    
    public void setSocialScienceOutlayPk(Long socialScienceOutlayPk) {
        this.socialScienceOutlayPk = socialScienceOutlayPk;
    }

    public Long getItemPk() {
        return this.itemPk;
    }
    
    public void setItemPk(Long itemPk) {
        this.itemPk = itemPk;
    }

    public String getItemId() {
        return this.itemId;
    }
    
    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public Double getMaterialCost() {
        return this.materialCost;
    }
    
    public void setMaterialCost(Double materialCost) {
        this.materialCost = materialCost;
    }

    public Double getDataCost() {
        return this.dataCost;
    }
    
    public void setDataCost(Double dataCost) {
        this.dataCost = dataCost;
    }

    public Double getTravelCost() {
        return this.travelCost;
    }
    
    public void setTravelCost(Double travelCost) {
        this.travelCost = travelCost;
    }

    public Double getConferenceCost() {
        return this.conferenceCost;
    }
    
    public void setConferenceCost(Double conferenceCost) {
        this.conferenceCost = conferenceCost;
    }

    public Double getExchangeCost() {
        return this.exchangeCost;
    }
    
    public void setExchangeCost(Double exchangeCost) {
        this.exchangeCost = exchangeCost;
    }

    public Double getEquipmentCost() {
        return this.equipmentCost;
    }
    
    public void setEquipmentCost(Double equipmentCost) {
        this.equipmentCost = equipmentCost;
    }

    public Double getServiceCost() {
        return this.serviceCost;
    }
    
    public void setServiceCost(Double serviceCost) {
        this.serviceCost = serviceCost;
    }

    public Double getConsultCost() {
        return this.consultCost;
    }
    
    public void setConsultCost(Double consultCost) {
        this.consultCost = consultCost;
    }

    public Double getPrintCost() {
        return this.printCost;
    }
    
    public void setPrintCost(Double printCost) {
        this.printCost = printCost;
    }

    public Double getManageCost() {
        return this.manageCost;
    }
    
    public void setManageCost(Double manageCost) {
        this.manageCost = manageCost;
    }

    public Double getOtherCost() {
        return this.otherCost;
    }
    
    public void setOtherCost(Double otherCost) {
        this.otherCost = otherCost;
    }

    public Double getCostSum() {
        return this.costSum;
    }
    
    public void setCostSum(Double costSum) {
        this.costSum = costSum;
    }

    public String getOutlayTime() {
        return this.outlayTime;
    }
    
    public void setOutlayTime(String outlayTime) {
        this.outlayTime = outlayTime;
    }
   








}