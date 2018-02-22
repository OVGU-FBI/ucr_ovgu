sap.ui.controller("content.scatter", {
onInit: function() {
            var oModel = new sap.ui.model.odata.ODataModel("models/UCR.xsodata");
this.getView().byId("combobox11").setModel(oModel);

},    
  onReset: function(oEvent) {
    jQuery.sap.require("sap.m.MessageToast");
    // var params = oEvent.getParameters();
    var sMessage = "onReset trigered";
    sap.m.MessageToast.show(sMessage);
  },
/*  onSearch: function(oEvent) {
    jQuery.sap.require("sap.m.MessageToast");
    // var params = oEvent.getParameters();
    var sMessage = "onSearch trigered";
    sap.m.MessageToast.show(sMessage);
  },*/
onSearch: function(oEvent) {
    var params = oEvent.getParameters();
          var fromDate = params.selectionSet[0].getFrom();
        var toDate = params.selectionSet[0].getTo();
        var selectedState = params.selectionSet[1].getSelectedKey();

      if (!fromDate) {
fromDate  = new Date(1964,1,1);
}
// if there is no toDate set, we'll set
// it to the current date
if (!toDate) {
toDate = new Date(2014,1,1);
}
 var yearFilter = new sap.ui.model.Filter(
            "YEAR", 
            sap.ui.model.FilterOperator.BT, 
            fromDate.getFullYear(), 
            toDate.getFullYear()
        );      
var stateFilter =  new sap.ui.model.Filter(
            "STATE_ABBR",
            sap.ui.model.FilterOperator.EQ, 
            selectedState);
    
// in addition, we want to sort our data by net revenue
// the second (boolean) value defines if the data is sorted
// in descending order

var sorter = new sap.ui.model.Sorter(
            "YEAR", 
            true
        );
        
        var oVizFrame = this.getView().byId("idVizFrameScatter");
        var oPopOver = this.getView().byId("idPopOver");
        var oModel = new sap.ui.model.odata.ODataModel("models/UCR.xsodata");
        var oDataset = new sap.viz.ui5.data.FlattenedDataset({
            dimensions: [{
                name: 'Year',
                value: "{YEAR}"
            },
            {
                name: 'State',
                value: "{STATE_ABBR}"
            }],
            measures: [/*{
                name: 'Population',
                value: "{POPULATION}"
            },*/{
                name: 'Violent',
                value: '{VIOLENT_CRM_TTL}'
            }],
            data: {
                path: "/CrimeDetails"
            }
        });

        oVizFrame.setDataset(oDataset);
        this.getView().setModel(oModel);
oVizFrame.setVizProperties({
            plotArea: {
                dataLabel: {
                    visible: true,
                    formatString: "#,##0"
                },
                window: {
                    start: {
                        categoryAxis: {
                            'Year': fromDate.getFullYear()
                        }
                    },
                    end: {
                        categoryAxis: {
                            'Year': toDate.getFullYear()
                        }
                    }
                }
            },
            legend: {
                title: {
                    visible: false
                }
            },

            title: {
                visible: true,
                text: 'Profit by City and Year'
            }
  
        });

   

        var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "valueAxis",
                'type': "Measure",
                'values': ["Violent"]
            }),
            feedCategoryAxis  = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "categoryAxis",
                'type': "Dimension",
                'values': ["Year"]
            }),
            feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "color",
                'type': "Dimension",
                'values': ["State"]
            });
            
            
        oVizFrame.addFeed(feedValueAxis);
        oVizFrame.addFeed(feedCategoryAxis);
        oVizFrame.addFeed(feedColor);
        oPopOver.connect(oVizFrame.getVizUid());

oDataset.bindData(
"/CrimeDetails",
//[monthFilter,yearFilter]
null,
[sorter], 
[yearFilter, stateFilter]
);
// last, we need to update the chart
// first, we need to get it
var vizFrame = this.getView().byId("idVizFrameScatter");
// then, we update the chart, but only the data
vizFrame.vizUpdate({
'data' : oDataset
});
    }
});