sap.ui.controller("content.bubble", {
  onInit: function(oEvent) {

    var oVizFrame = this.getView().byId("idVizFrameTimeBubble");
    var oPopOver = this.getView().byId("idPopOver");
   
    
    			var oModel = new sap.ui.model.odata.ODataModel(
			"models/violent.xsodata"
		);
    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
      dimensions: [{
        name: 'State',
        value: "{STATE_ABBR}"
      }],
      measures: [{
        name: 'Violent Crime Total',
        value: '{VIOLENT_CRM_TTL}'
      },
      {
        name: 'Date',
        value: "{YEAR}"
      },  {
        name: 'Murder',
        value: '{MURDR_N0NNEGLT_MANSLTR}'
      }, {
        name: "Rape",
        value: "{LEG_RAPE}"
      }, {
        name: "Robbery",
        value: "{RBRY}"
      },
       {
        name: "Population",
        value: "{POPULATION}"
      }],
      data: {
        path: "/ViolentCrimeMaster"
      }
    });

    oVizFrame.setVizProperties({
      plotArea: {
        "referenceLine": {
          "line": {
            "primaryValues": [{
              "value": "1396322755175",
              "label": {
                "text": "Last month"
              }
            }]
          }

        }
      },
      legend: {
        title: {
          visible: false
        }
      },
      sizeLegend: {
        title: {
          visible: true
        }
      },
      title: {
        visible: true,
        text: 'Time Bubble'
      }
    });

    oVizFrame.setDataset(oDataset);
    oVizFrame.setModel(oModel);

    feeding = {
      primaryValues: ['Population'],
      secondaryValues: ['Violent Crime Total'],
      bubbleWidth: ['Murder'],
      bubbleHeight: ['Rape'],
      regionColor: ['State'],
      regionShape: ['Date']
    };

    var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
        'uid': "valueAxis",
        'type': "Measure",
        'values': ["Population"]
      }),
      feedValueAxis2 = new sap.viz.ui5.controls.common.feeds.FeedItem({
        'uid': "valueAxis2",
        'type': "Measure",
        'values': ["Violent Crime Total"]
      }),
            feedValueAxis3 = new sap.viz.ui5.controls.common.feeds.FeedItem({
        'uid': "valueAxis3",
        'type': "Measure",
        'values': ["Date"]
      }),
      
      feedBubbleWidth = new sap.viz.ui5.controls.common.feeds.FeedItem({
        'uid': "bubbleWidth",
        'type': "Measure",
        'values': ["Date"]
      }),

      feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
        'uid': "color",
        'type': "Dimension",
        'values': ["State"]
      });


    oPopOver.setFormatString({
      Date: 'yyyy',
      Murder: '###.00',
      Rape: '###.00',
      Robbery: '###.00'
    });

    oVizFrame.addFeed(feedValueAxis);
    oVizFrame.addFeed(feedValueAxis2);
   oVizFrame.addFeed(feedValueAxis3);

    oVizFrame.addFeed(feedBubbleWidth);
    oVizFrame.addFeed(feedColor);
    oPopOver.connect(oVizFrame.getVizUid());
  }
});