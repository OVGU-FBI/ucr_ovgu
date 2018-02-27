sap.ui.controller("content.PropertyCrimeDetails", {

	onInit: function() {

	
			var oModel_sb = new sap.ui.model.odata.ODataModel(
			"models/property.xsodata"
		);
		this.getView().byId("ComboBox1").setModel(oModel_sb);
		this.getView().byId("ComboBox2").setModel(oModel_sb);
		//--------bubble chart vizframe---------
		var oVizFrame3 = this.getView().byId("idoVizFrame3");
		var oPopOverBubble = this.getView().byId("idPopOverBubble");

		var oDataset_bubble = new sap.viz.ui5.data.FlattenedDataset({
			dimensions: [{
					name: 'STATE NAME',
					value: "{STATE_NAME}"
		                    	  		 	},
				{
					name: 'YEAR',
					value: "{YEAR}"
		                    	  		 	}],
			measures: [
				{
					name: 'Burglary',
					value: '{BURG_RATE}'
		                    	  		 		},
				{
					name: 'Larceny-theft',
					value: '{LARCENY_THF_RATE}'
		                    	  		 		},
		                    	  		 		{
					name: 'Motor vehicle theft',
					value: '{MTR_VEH_THF_RATE}'
		                    	  		 		},
				{
					name: 'Population',
					value: '{POPULATION}'
		                    	  		 		},
				{
					name: 'Property Crime Count',
					value: '{PROPERTY_CRM_TTL_RATE}'
		                    	  		 		}
		                    	  		 	],
			data: {
				path: "/PropertyCrimeDetails"
			}
		});
		oVizFrame3.setDataset(oDataset_bubble);
		oVizFrame3.setModel(oModel_sb);

		//set feeds
		var feedPrimaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "primaryValues",
				"type": "Measure",
				'values': ["Burglary"]
			}),
			feedSecondaryValues = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "secondaryValues",
				"type": "Measure",
				"values": ["Larceny-theft"]
			}),
			feedBubbleWidth = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "bubbleWidth",
				"type": "Measure",
				"values": ["Property Crime Count"]
			}),
			feedBubbleHeight = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "bubbleHeight",
				"type": "Measure",
				"values": ["Population"]
			}),
			feedRegionColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "regionColor",
				"type": "Dimension",
				'values': ["STATE NAME"]
			}),
			feedRegionShape = new sap.viz.ui5.controls.common.feeds.FeedItem({
				"uid": "regionShape",
				"type": "Dimension",
				"values": ["YEAR"]
			});

		oVizFrame3.addFeed(feedPrimaryValues);
		oVizFrame3.addFeed(feedSecondaryValues);
		oVizFrame3.addFeed(feedBubbleWidth);
		oVizFrame3.addFeed(feedBubbleHeight);
		oVizFrame3.addFeed(feedRegionColor);
		oVizFrame3.addFeed(feedRegionShape);
		oPopOverBubble.connect(oVizFrame3.getVizUid());

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
					name: 'Burglary',
					value: '{BURG_RATE}'
		                    	  		 		},
				{
					name: 'Larceny-theft',
					value: '{LARCENY_THF_RATE}'
		                    	  		 		},
		                    	  		 		{
					name: 'Motor vehicle theft',
					value: '{MTR_VEH_THF_RATE}'
		                    	  		 		}
		                    	  		 	],
			data: {
				path: "/PropertyCrimeDetails"
			}
		});

		var feedPrimaryValues_sb = new sap.viz.ui5.controls.common.feeds.FeedItem({
				'uid': "primaryValues",
				'type': "Measure",
 'values': ["Burglary","Larceny-theft","Motor vehicle theft"]			}
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
					name: 'Burglary',
					value: '{BURG_RATE}'
		                    	  		 		},
				{
					name: 'Larceny-theft',
					value: '{LARCENY_THF_RATE}'
		                    	  		 		},
		                    	  		 		{
					name: 'Motor vehicle theft',
					value: '{MTR_VEH_THF_RATE}'
		                    	  		 		}
		                    	  		 	],
			data: {
				path: "/PropertyCrimeDetails"
			}
		});


    var feedValueAxisLine = new sap.viz.ui5.controls.common.feeds.FeedItem({
        'uid': "valueAxis",
        'type': "Measure",
 'values': ["Burglary","Larceny-theft","Motor vehicle theft"]
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
					name: 'Burglary',
					value: '{BURG_RATE}'
		                    	  		 		},
				{
					name: 'Larceny-theft',
					value: '{LARCENY_THF_RATE}'
		                    	  		 		},
		                    	  		 		{
					name: 'Motor vehicle theft',
					value: '{MTR_VEH_THF_RATE}'
		                    	  		 		}
		                    	  		 	],
			data: {
				path: "/PropertyCrimeDetails"
			}
		});

		 var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
                'uid': "valueAxis",
                'type': "Measure",
                'values': ["Burglary","Larceny-theft","Motor vehicle theft"]
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
				text: "Property crime total"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Burglary"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Larceny-theft"
			})
		}));
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Motor vehicle theft"
			})
		}));
				
		oTable.addColumn(new sap.m.Column({
			header: new sap.m.Label({
				text: "Property crime Rate"
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
					text: "{PROPERTY_CRM_TTL}"
				}),
		                    						new sap.m.Label({
					text: "{BURG_RATE}"
				}),
		                    						new sap.m.Label({
					text: "{LARCENY_THF_RATE}"
				}),
		                    						new sap.m.Label({
					text: "{MTR_VEH_THF_RATE}"
				}),
		                    						new sap.m.Label({
					text: "{STATE_NAME}"
				}),
		                    						new sap.m.Label({
					text: "{PROPERTY_CRM_TTL_RATE}"
				})
		                    				     ]
		});

		oTable.bindItems("/PropertyCrimeDetails", oTableTemplate, null, null);
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
			"/PropertyCrimeDetails",
			null,
			[sorter],
			[stateFilter, yearFilter]
		);
		this.getView().byId("idoVizFrame5").getDataset().bindData(
			"/PropertyCrimeDetails",
			null,
			[sorter],
			[stateFilter, yearFilter]
		);
		this.getView().byId("idoVizFrame3").getDataset().bindData(
			"/PropertyCrimeDetails",
			null,
			[sorter],
			[stateFilter, yearFilter]
		);
			this.getView().byId("idVizFrameLine").getDataset().bindData(
			"/PropertyCrimeDetails",
			null,
			[sorter],
			[stateFilter, yearFilter]
		);
		
            this.byId("idoTable").getBinding("items").filter([stateFilter,yearFilter]).sort(sorter);	
			    
			}else{
    	this.getView().byId("idoVizFrame4").getDataset().bindData(
			"/PropertyCrimeDetails",
			null,
			[sorter],
			[stateFilter]
		);
		this.getView().byId("idoVizFrame3").getDataset().bindData(
			"/PropertyCrimeDetails",
			null,
			[sorter],
			[stateFilter]
		);
		this.getView().byId("idoVizFrame5").getDataset().bindData(
			"/PropertyCrimeDetails",
			null,
			[sorter],
			[stateFilter]
		);
			this.getView().byId("idVizFrameLine").getDataset().bindData(
			"/PropertyCrimeDetails",
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
			"/PropertyCrimeDetails",
			null,
			[sorter],
			[yearFilter]
		);
			this.getView().byId("idVizFrameLine").getDataset().bindData(
			"/PropertyCrimeDetails",
			null,
			[sorter],
			[yearFilter]
		);
			this.getView().byId("idoVizFrame3").getDataset().bindData(
			"/PropertyCrimeDetails",
			null,
			[sorter],
			[yearFilter]
		);

		this.getView().byId("idoVizFrame5").getDataset().bindData(
			"/PropertyCrimeDetails",
			null,
			[sorter],
			[yearFilter]
		);

        this.byId("idoTable").getBinding("items").filter(yearFilter).sort(sorter);	
	},
	
	onPress: function() {
	    	this.getView().byId("idoVizFrame4").getDataset().bindData(
			"/PropertyCrimeDetails");
			this.getView().byId("idVizFrameLine").getDataset().bindData(
			"/PropertyCrimeDetails");

		this.getView().byId("idoVizFrame5").getDataset().bindData(
			"/PropertyCrimeDetails");

 this.byId("idoTable").getBinding("items").filter("");
 this.getView().byId("ComboBox1").setSelectedKey(null);
        this.getView().byId("ComboBox2").setSelectedKey(null);
        this.getView().byId("ComboBox1").setValue(null);
        this.getView().byId("ComboBox2").setValue(null);
	}
});