sap.ui.controller("content.ViolentCrimeDetails", {

	onInit: function() {

	
			var oModel_sb = new sap.ui.model.odata.ODataModel(
			"models/violent.xsodata"
		);
		this.getView().byId("ComboBox1").setModel(oModel_sb);
		this.getView().byId("ComboBox2").setModel(oModel_sb);
		//--------bubble chart vizframe---------
		var oVizFrame3 = this.getView().byId("idoVizFrame3");

		var oVizFrame3Model = new sap.ui.model.json.JSONModel({
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
				name: 'Sales_Quarter',
				value: "{Sales_Quarter}"
		    }, {
				name: 'Customer Gender',
				value: "{Customer Gender}"
		    }, {
				name: 'Sales_Month',
				value: "{Sales_Month}"
		    }, {
				name: 'Marital Status',
				value: "{Marital Status}"
		    }],

			measures: [{
				name: 'Cost',
				value: '{Cost}'
		    }, {
				name: 'Unit Price',
				value: '{Unit Price}'
		    }, {
				name: 'Gross Profit',
				value: '{Gross Profit}'
		    }, {
				name: 'Sales Revenue',
				value: '{Sales Revenue}'
		    }],

			data: {
				path: "/businessData"
			}
		});
		oVizFrame3.setDataset(oDataset);
		oVizFrame3.setModel(oVizFrame3Model);

		//set feeds
		var feedPrimaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "primaryValues",
				"type": "Measure",
				"values": ["Cost"]
			}),
			feedSecondaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "secondaryValues",
				"type": "Measure",
				"values": ["Unit Price"]
			}),
			feedBubbleWidth = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "bubbleWidth",
				"type": "Measure",
				"values": ["Gross Profit"]
			}),
			feedBubbleHeight = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "bubbleHeight",
				"type": "Measure",
				"values": ["Sales Revenue"]
			}),
			feedRegionColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "regionColor",
				"type": "Dimension",
				"values": ["Sales_Month", "Sales_Quarter", "Customer Gender"]
			}),
			feedRegionShape = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "regionShape",
				"type": "Dimension",
				"values": ["Marital Status"]
			});

		oVizFrame3.addFeed(feedPrimaryValues);
		oVizFrame3.addFeed(feedSecondaryValues);
		oVizFrame3.addFeed(feedBubbleWidth);
		oVizFrame3.addFeed(feedBubbleHeight);
		oVizFrame3.addFeed(feedRegionColor);
		oVizFrame3.addFeed(feedRegionShape);
		oVizFrame3.setVizType('bubble');

		//--------stacked bar chart vizframe---------
		var oVizFrame5 = this.getView().byId("idoVizFrame5");
	    var oPopOverBar = this.getView().byId("idPopOverBar");

		var oDataset_sb = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				name: 'STATE_NAME',
				value: "{STATE_NAME}"
		                    	  		 	},
		                    	  		 	{
				name: 'YEAR',
				value: "{YEAR}"
		                    	  		 	}],
			measures: [
				{
					name: 'Aggravated assault',
					value: '{AGRVTD_ASLT}'
		                    	  		 		},
				{
					name: 'Legacy rape /1',
					value: '{LEG_RAPE}'
		                    	  		 		},
		                    	  		 		{
					name: 'Robbery',
					value: '{RBRY}'
		                    	  		 		},
		                    	  		 		{
					name: 'Murder and nonnegligent Manslaughter',
					value: '{MURDR_N0NNEGLT_MANSLTR}'
		                    	  		 		}
		                    	  		 	],
			data: {
				path: "/ViolentCrimeDetails"
			}
		});

		var feedPrimaryValues_sb = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "primaryValues",
				'type': "Measure",
				'values': ["Aggravated assault","Legacy rape /1","Robbery","Murder and nonnegligent Manslaughter"]
			}
			),
			feedAxisLabels_sb = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "color",
				'type': "Dimension",
				'values': ["STATE_NAME"]
			}),
			feedCategoryAxis_stacked_bar  = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "categoryAxis",
				'type': "Dimension",
				'values': ["YEAR"]
			});

		oVizFrame5.setDataset(oDataset_sb);
		oVizFrame5.setModel(oModel_sb);
		oVizFrame5.addFeed(feedPrimaryValues_sb);
		oVizFrame5.addFeed(feedAxisLabels_sb);
		oVizFrame5.addFeed(feedCategoryAxis_stacked_bar );
        oPopOverBar.connect(oVizFrame5.getVizUid());
		oVizFrame5.setVizType('stacked_bar');
	
		//-------line chart vizframe-------
		var oVizFrameLine = this.getView().byId("idVizFrameLine");
        var idPopOverLine = this.getView().byId("idPopOverColumn");
        var oDataset_line = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				name: 'STATE_NAME',
				value: "{STATE_NAME}"
		                    	  		 	},
		                    	  		 	{
				name: 'YEAR',
				value: "{YEAR}"
		                    	  		 	}],
			measures: [
				{
					name: 'Aggravated assault',
					value: '{AGRVTD_ASLT}'
		                    	  		 		},
				{
					name: 'Legacy rape /1',
					value: '{LEG_RAPE}'
		                    	  		 		},
		                    	  		 		{
					name: 'Robbery',
					value: '{RBRY}'
		                    	  		 		},
		                    	  		 		{
					name: 'Murder and nonnegligent Manslaughter',
					value: '{MURDR_N0NNEGLT_MANSLTR}'
		                    	  		 		}
		                    	  		 	],
			data: {
				path: "/ViolentCrimeDetails"
			}
		});


    var feedValueAxisLine = new sap.viz.ui5.controls.common.feeds.FeedItem({
        'uid': "valueAxis",
        'type': "Measure",
       'values': ["Aggravated assault","Legacy rape /1","Robbery","Murder and nonnegligent Manslaughter"]
      }),
      feedCategoryAxisLine = new sap.viz.ui5.controls.common.feeds.FeedItem({
        'uid': "categoryAxis",
        'type': "Dimension",
                'values': ["YEAR"]
      }),
      feedColorLine = new sap.viz.ui5.controls.common.feeds.FeedItem({
        'uid': "color",
        'type': "Dimension",
                'values': ["STATE_NAME"]
      });
    oVizFrameLine.setDataset(oDataset_line);
    oVizFrameLine.setModel(oModel_sb);
    oVizFrameLine.addFeed(feedValueAxisLine);
    oVizFrameLine.addFeed(feedCategoryAxisLine);
    oVizFrameLine.addFeed(feedColorLine);
    idPopOverLine.connect(oVizFrameLine.getVizUid());
    		oVizFrameLine.setVizType('stacked_combination');

		//-------column chart vizframe-------
		
		var oVizFrame4 = this.getView().byId("idoVizFrame4");
        var oPopOverColumn = this.getView().byId("idPopOverColumn");

	var oDataset_sb1 = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
				name: 'STATE_NAME',
				value: "{STATE_NAME}"
		                    	  		 	},
		                    	  		 	{
				name: 'YEAR',
				value: "{YEAR}"
		                    	  		 	}],
			measures: [
				{
					name: 'Aggravated assault',
					value: '{AGRVTD_ASLT}'
		                    	  		 		},
				{
					name: 'Legacy rape /1',
					value: '{LEG_RAPE}'
		                    	  		 		},
		                    	  		 		{
					name: 'Robbery',
					value: '{RBRY}'
		                    	  		 		},
		                    	  		 		{
					name: 'Murder and nonnegligent Manslaughter',
					value: '{MURDR_N0NNEGLT_MANSLTR}'
		                    	  		 		}
		                    	  		 	],
			data: {
				path: "/ViolentCrimeDetails"
			}
		});

		 var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "valueAxis",
                'type': "Measure",
                'values': ["Aggravated assault","Legacy rape /1","Robbery","Murder and nonnegligent Manslaughter"]
            }),
            feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "categoryAxis",
                'type': "Dimension",
                'values': ["YEAR"]
            }),
            feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "color",
                'type': "Dimension",
                'values': ["STATE_NAME"]
            });

		
		oVizFrame4.setDataset(oDataset_sb1);
		oVizFrame4.setModel(oModel_sb);
		oVizFrame4.addFeed(feedValueAxis);
		oVizFrame4.addFeed(feedCategoryAxis);
		oVizFrame4.addFeed(feedColor);
        oPopOverColumn.connect(oVizFrame4.getVizUid());

		oVizFrame4.setVizType('column');

		//-----------table example -------------------
		var oTable = this.getView().byId("idoTable");
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Year"
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
				text: "Aggravated assault"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Legacy Rape"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Robbery"
			})
		}));
				oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Murder and nonnegligent Manslaughter"
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
					text: "{AGRVTD_ASLT}"
				}),
		                    						new sap.m.Label({
					text: "{LEG_RAPE}"
				}),
		                    						new sap.m.Label({
					text: "{RBRY}"
				}),
		           	                                new sap.m.Label({
					text: "{MURDR_N0NNEGLT_MANSLTR}"
				}),         						new sap.m.Label({
					text: "{VIOLENT_CRM_TTL_RATE}"
				}),
		                    						new sap.m.Label({
					text: "{STATE_NAME}"
				})
		                    				     ]
		});

		oTable.bindItems("/ViolentCrimeDetails", oTableTemplate, null, null);
		oTable.setModel(oModel_sb);

	},

	onChangeState: function(oEvent) {

		var itemId =oEvent.getParameter("selectedItem").getKey();
		var sorter = new sap.ui.model.Sorter(
			"YEAR",
			true
		);
		var stateFilter = new sap.ui.model.Filter(
			"STATE_NAME",
			sap.ui.model.FilterOperator.EQ,
			itemId
		);
        var yearFilter = this.byId("idoTable").getBinding("items").aFilters[0];
			if(yearFilter){
			this.getView().byId("idoVizFrame4").getDataset().bindData(
			"/ViolentCrimeDetails",
			null,
			[sorter],
			[stateFilter, yearFilter]
		);
		this.getView().byId("idoVizFrame5").getDataset().bindData(
			"/ViolentCrimeDetails",
			null,
			[sorter],
			[stateFilter, yearFilter]
		);
			this.getView().byId("idVizFrameLine").getDataset().bindData(
			"/ViolentCrimeDetails",
			null,
			[sorter],
			[stateFilter, yearFilter]
		);
		
            this.byId("idoTable").getBinding("items").filter([stateFilter,yearFilter]).sort(sorter);	
			    
			}else{
    	this.getView().byId("idoVizFrame4").getDataset().bindData(
			"/ViolentCrimeDetails",
			null,
			[sorter],
			[stateFilter]
		);
		this.getView().byId("idoVizFrame5").getDataset().bindData(
			"/ViolentCrimeDetails",
			null,
			[sorter],
			[stateFilter]
		);
			this.getView().byId("idVizFrameLine").getDataset().bindData(
			"/ViolentCrimeDetails",
			null,
			[sorter],
			[stateFilter]
		);
		
this.byId("idoTable").getBinding("items").filter([stateFilter]).sort(sorter);	
    
    
}
	    
	},
		onChangeYear: function(oEvent) {

		var itemId =oEvent.getParameter("selectedItem").getKey();
		var sorter = new sap.ui.model.Sorter(
			"YEAR",
			true
		);
		var yearFilter = new sap.ui.model.Filter(
			"YEAR",
			sap.ui.model.FilterOperator.EQ,
			itemId
		);
				this.getView().byId("idoVizFrame4").getDataset().bindData(
			"/ViolentCrimeDetails",
			null,
			[sorter],
			[yearFilter]
		);
			this.getView().byId("idVizFrameLine").getDataset().bindData(
			"/ViolentCrimeDetails",
			null,
			[sorter],
			[yearFilter]
		);

		this.getView().byId("idoVizFrame5").getDataset().bindData(
			"/ViolentCrimeDetails",
			null,
			[sorter],
			[yearFilter]
		);

        this.byId("idoTable").getBinding("items").filter(yearFilter).sort(sorter);	
	},
	
	onPress: function() {
	    	this.getView().byId("idoVizFrame4").getDataset().bindData(
			"/ViolentCrimeDetails");
			this.getView().byId("idVizFrameLine").getDataset().bindData(
			"/ViolentCrimeDetails");

		this.getView().byId("idoVizFrame5").getDataset().bindData(
			"/ViolentCrimeDetails");

 this.byId("idoTable").getBinding("items").filter("");
 this.getView().byId("ComboBox1").setSelectedKey(null);
        this.getView().byId("ComboBox2").setSelectedKey(null);
        this.getView().byId("ComboBox1").setValue(null);
        this.getView().byId("ComboBox2").setValue(null);
	}
});