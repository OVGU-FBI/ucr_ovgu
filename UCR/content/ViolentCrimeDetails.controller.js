sap.ui.controller("content.ViolentCrimeDetails", {

    onInit: function() {

			var oModel_sb = new sap.ui.model.odata.ODataModel(
			"models/violent.xsodata"
		);
		this.getView().setModel(oModel_sb);
      
		//--------bubble chart vizframe---------
	/*	var oVizFrame3 = this.getView().byId("idoVizFrame3");

		/*var oVizFrame3Model = new sap.ui.model.json.JSONModel({
			'businessData': [{
				"Sales_Month": "April",
				"Marital Status": "Married",
				"Customer Gender": "Female",
				"Sales_Quarter": "Q1",
				"Cost": 190,
				"Unit Price": 128.3,
				"Gross Profit": 321,
				"Sales Revenue": 120
		  }, {
				"Sales_Month": "May",
				"Marital Status": "Married",
				"Customer Gender": "Female",
				"Sales_Quarter": "Q2",
				"Cost": 189.9,
				"Unit Price": 151.17,
				"Gross Profit": 181.59,
				"Sales Revenue": 471.49
		  }, {
				"Sales_Month": "June",
				"Marital Status": "Married",
				"Customer Gender": "Female",
				"Sales_Quarter": "Q3",
				"Cost": 135,
				"Unit Price": 321,
				"Gross Profit": 124,
				"Sales Revenue": 349
		  }, {
				"Sales_Month": "July",
				"Marital Status": "Married",
				"Customer Gender": "Female",
				"Sales_Quarter": "Q4",
				"Cost": 169.4,
				"Unit Price": 185.2,
				"Gross Profit": 153.8,
				"Sales Revenue": 145.9
		  }, {
				"Sales_Month": "Augst",
				"Marital Status": "Married",
				"Customer Gender": "Male",
				"Sales_Quarter": "Q1",
				"Cost": 270.2,
				"Unit Price": 175,
				"Gross Profit": 154.3,
				"Sales Revenue": 164.9
		  }]
		});

		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				name: 'Year',
				value: "{YEAR}"
		    }, {
				name: 'Population',
				value: "{POPULATION}"
		    },
		    {
				name: 'State',
				value: "{State_ABBR}"
		    }],

			measures: [{
				name: 'Violent Crime Total',
				value: '{VIOLENT_CRM_TTL}'
		    }, {
				name: 'Murder',
				value: '{MURDR_N0NNEGLT_MANSLTR}'
		    }, {
				name: 'Rape',
				value: '{LEG_RAPE}'
		    }],

			data: {
				path: "/ViolentCrimeMaster"
			}
		});
		oVizFrame3.setDataset(oDataset);
		oVizFrame3.setModel(oModel_sb);
        
		//set feeds
		var feedPrimaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "primaryValues",
				"type": "Measure",
				"values": ["State"]
			}),
			feedSecondaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "secondaryValues",
				"type": "Measure",
				"values": ["Year"]
			}),
			feedBubbleWidth = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "bubbleWidth",
				"type": "Measure",
				"values": ["Violent Crime Total"]
			}),
			feedBubbleHeight = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "bubbleHeight",
				"type": "Measure",
				"values": ["Violent Crime Total"]
			}),
			feedRegionColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "regionColor",
				"type": "Dimension",
				"values": ["State"]
			}),
			feedRegionShape = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "regionShape",
				"type": "Dimension",
				"values": ["Year"]
			});

		oVizFrame3.addFeed(feedPrimaryValues);
		oVizFrame3.addFeed(feedSecondaryValues);
		oVizFrame3.addFeed(feedBubbleWidth);
		oVizFrame3.addFeed(feedBubbleHeight);
		oVizFrame3.addFeed(feedRegionColor);
		oVizFrame3.addFeed(feedRegionShape);
		oVizFrame3.setVizType('bubble');
*/
		//--------stacked bar chart vizframe---------
		var oVizFrame5 = this.getView().byId("idoVizFrame5");
	oVizFrame5.setVizProperties({
            title:{
                    text: "Stacked Bar chart"
        }
        });
		var oDataset_sb = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				name: 'State',
				value: "{STATE_ABBR}"
		                    	  		 	}],
			measures: [
				{
					name: 'Violent Crime',
					value: '{VIOLENT_CRM_TTL}'
		                    	  		 		},
				{
					name: 'Population',
					value: '{POPULATION}'
		                    	  		 		}
		                    	  		 	],
			data: {
				path: "/ViolentCrimeMaster"
			}
		});

		var feedPrimaryValues_sb = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "primaryValues",
				'type': "Measure",
				'values': ["Violent Crime"]
			}),
			feedAxisLabels_sb = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "axisLabels",
				'type': "Dimension",
				'values': ["State"]
			}),
			feedTargetValues_sb = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "targetValues",
				'type': "Measure",
				'values': ["Violent Crime"]
			});
var oVizPopover = this.byId('vizPopover');
// after that, connecting is easy
oVizPopover.connect(oVizFrame5.getVizUid());
		oVizFrame5.setDataset(oDataset_sb);
		oVizFrame5.setModel(oModel_sb);
		oVizFrame5.addFeed(feedPrimaryValues_sb);
		oVizFrame5.addFeed(feedAxisLabels_sb);
		oVizFrame5.addFeed(feedTargetValues_sb);
		oVizFrame5.setVizType('stacked_bar');

		//-------column chart vizframe-------
		var oVizFrame4 = this.getView().byId("idoVizFrame4");
		var oDataset4 = new sap.viz.ui5.data.FlattenedDataset({
			'dimensions': [{
				'name': 'Country',
				'value': "{Country}"
		                    				}],

			'measures': [{
				'name': 'Profit',
				'value': '{profit}'
		                    				}],
			'data': {
				'path': "/businessData"
			}
		});
		var amModel4 = new sap.ui.model.json.JSONModel({
			'businessData': [
				{
					'Country': "Canada",
					'revenue': 410.87,
					'profit': 141.25
				},
				{
					'Country': "China",
					'revenue': 338.29,
					'profit': 133.82
				},
				{
					'Country': "France",
					'revenue': 487.66,
					'profit': 348.76
				},
				{
					'Country': "Germany",
					'revenue': 470.23,
					'profit': 217.29
				},
				{
					'Country': "India",
					'revenue': 170.93,
					'profit': 117.00
				},
				{
					'Country': "United States",
					'revenue': 905.08,
					'profit': 609.16
				},
				{
					'Country': "Italy",
					'revenue': 410.87,
					'profit': 141.25
				},
				{
					'Country': "Spain",
					'revenue': 338.29,
					'profit': 133.82
				},
				{
					'Country': "Portugal",
					'revenue': 487.66,
					'profit': 348.76
				},
				{
					'Country': "Ireland",
					'revenue': 470.23,
					'profit': 217.29
				},
				{
					'Country': "Scotland",
					'revenue': 170.93,
					'profit': 117.00
				},
				{
					'Country': "Wales",
					'revenue': 905.08,
					'profit': 609.16
				},
				{
					'Country': "England",
					'revenue': 410.87,
					'profit': 141.25
				},
				{
					'Country': "Belgium",
					'revenue': 338.29,
					'profit': 133.82
				},
				{
					'Country': "Andorra",
					'revenue': 487.66,
					'profit': 348.76
				},
				{
					'Country': "Netherlands",
					'revenue': 470.23,
					'profit': 217.29
				},
				{
					'Country': "Poland",
					'revenue': 170.93,
					'profit': 117.00
				},
				{
					'Country': "Danemark",
					'revenue': 905.08,
					'profit': 609.16
				},
				{
					'Country': "Sweden",
					'revenue': 410.87,
					'profit': 141.25
				},
				{
					'Country': "Norway",
					'revenue': 338.29,
					'profit': 133.82
				},
				{
					'Country': "Finland",
					'revenue': 487.66,
					'profit': 348.76
				},
				{
					'Country': "Russia",
					'revenue': 470.23,
					'profit': 217.29
				},
				{
					'Country': "Bularia",
					'revenue': 170.93,
					'profit': 117.00
				},
				{
					'Country': "Romania",
					'revenue': 905.08,
					'profit': 609.16
				},
				{
					'Country': "Alabania",
					'revenue': 410.87,
					'profit': 141.25
				},
				{
					'Country': "Greece",
					'revenue': 338.29,
					'profit': 133.82
				},
				{
					'Country': "Turkey",
					'revenue': 487.66,
					'profit': 348.76
				},
				{
					'Country': "South Africa",
					'revenue': 470.23,
					'profit': 217.29
				},
				{
					'Country': "Australia",
					'revenue': 170.93,
					'profit': 117.00
				},
				{
					'Country': "New Zeland",
					'revenue': 905.08,
					'profit': 609.16
				},
				{
					'Country': "Japan",
					'revenue': 410.87,
					'profit': 141.25
				},
				{
					'Country': "Indonesia",
					'revenue': 338.29,
					'profit': 133.82
				},
				{
					'Country': "Argentina",
					'revenue': 487.66,
					'profit': 348.76
				},
				{
					'Country': "Mexico",
					'revenue': 470.23,
					'profit': 217.29
				},
				{
					'Country': "Brazil",
					'revenue': 170.93,
					'profit': 117.00
				},
				{
					'Country': "Chile",
					'revenue': 905.08,
					'profit': 609.16
				},
				{
					'Country': "Peru",
					'revenue': 410.87,
					'profit': 141.25
				},
				{
					'Country': "Colombia",
					'revenue': 338.29,
					'profit': 133.82
				},
				{
					'Country': "Venezuela",
					'revenue': 487.66,
					'profit': 348.76
				},
				{
					'Country': "Uruguay",
					'revenue': 470.23,
					'profit': 217.29
				},
				{
					'Country': "Honduras",
					'revenue': 170.93,
					'profit': 117.00
				},
				{
					'Country': "Ghana",
					'revenue': 905.08,
					'profit': 609.16
				},
				{
					'Country': "Israel",
					'revenue': 410.87,
					'profit': 141.25
				},
				{
					'Country': "Lybia",
					'revenue': 338.29,
					'profit': 133.82
				},
				{
					'Country': "Algeria",
					'revenue': 487.66,
					'profit': 348.76
				},
				{
					'Country': "Marroco",
					'revenue': 470.23,
					'profit': 217.29
				},
				{
					'Country': "Guinea",
					'revenue': 170.93,
					'profit': 117.00
				},
				{
					'Country': "Iran",
					'revenue': 905.08,
					'profit': 609.16
				},
				{
					'Country': "Irak",
					'revenue': 410.87,
					'profit': 141.25
				},
				{
					'Country': "Egypt",
					'revenue': 338.29,
					'profit': 133.82
				},
				{
					'Country': "Kenya",
					'revenue': 487.66,
					'profit': 348.76
				},
				{
					'Country': "Island",
					'revenue': 470.23,
					'profit': 217.29
				},
				{
					'Country': "Cuba",
					'revenue': 170.93,
					'profit': 117.00
				},
				{
					'Country': "Pakistan",
					'revenue': 905.08,
					'profit': 609.16
				}
		                    	  			 ]
		});
		var feedPrimaryValues4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "primaryValues",
				'type': "Measure",
				'values': ["Profit"]
			}),
			feedAxisLabels4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "axisLabels",
				'type': "Dimension",
				'values': [new sap.viz.ui5.controls.common.feeds.AnalysisObject({
					'uid': "Country",
					'type': "Dimension",
					'name': "Country"
				})]
			});
		oVizFrame4.setDataset(oDataset4);
		oVizFrame4.setModel(amModel4);
		oVizFrame4.addFeed(feedPrimaryValues4);
		oVizFrame4.addFeed(feedAxisLabels4);
		oVizFrame4.setVizType('column');

		//-----------table example -------------------
		var oTable = this.getView().byId("idoTable");
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "YEAR"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Population"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Violent Crime Total"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Murder and nonnegligent Manslaughter"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Legacy rape /1"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Revised rape /2"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Violent Crime Rate"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "State"
			})
		}));

		var oTableTemplate = new sap.m.ColumnListItem({
			type: sap.m.ListType.Active,
			cells: [
		                    						new sap.m.Label({
					text: "{YEAR}"
				}),
		                    						new sap.m.Label({
					text: "{POPULATION}"
				}),
		                    						new sap.m.Label({
					text: "{VIOLENT_CRM_TTL}"
				}),
		                    						new sap.m.Label({
					text: "{MURDR_N0NNEGLT_MANSLTR}"
				}),
		                    						new sap.m.Label({
					text: "{LEG_RAPE}"
				}),
		                    						new sap.m.Label({
					text: "{RVSD_RAPE}"
				}),
		                    						new sap.m.Label({
					text: "{VIOLENT_CRM_TTL_RATE    }"
				}),
		                    						new sap.m.Label({
					text: "{STATE_ABBR}"
				})
		                    				     ]
		});

		oTable.bindItems("/ViolentCrimeMaster", oTableTemplate, null, null);
		oTable.setModel(oModel_sb);

	},

	onChanges: function(oEvent) {

		var itemId = oEvent.getParameter("selectedItem").getKey();
		var sorter = new sap.ui.model.Sorter(
			"YEAR",
			true
		);
		var yearFilter = new sap.ui.model.Filter(
			"STATE_ABBR",
			sap.ui.model.FilterOperator.EQ,
			itemId
		);
	/*	var fd = this.getView().byId("idoVizFrame5");
fd.bindData(
"/ViolentCrimeMaster",
null,
[sorter], 
[yearFilter]
);
var vizFrame = this.getView().byId("idChartContainer");

vizFrame.vizUpdate({
'data' : fd
});*/
	

this.byId("idoTable").getBinding("items").filter(yearFilter).sort(sorter);
	}
});