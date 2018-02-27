sap.ui.getCore().loadLibrary("openui5.googlemaps", "openui5/googlemaps/");

sap.ui.controller("content.Overview", {
  
  onInit : function () 
  {
    var oModel = new sap.ui.model.json.JSONModel("us.geojson");
      this.getView().setModel(oModel);
   },

  onRegionClick: function (e)
  {
    sap.m.MessageToast.show( "onRegionClick " + e.getParameter( "code" ) );
  },

  onRegionContextMenu: function ( e )
  {
    sap.m.MessageToast.show( "onRegionContextMenu " + e.getParameter( "code" ) );
  },
  
  onClickItem: function (evt)  {
    alert("onClick");
  },

  onContextMenuItem: function ( evt )  {
    alert("onContextMenu");
  },
  
  onClickCircle: function (evt)  {
    alert("Circle onClick");
  },

  onContextMenuCircle: function ( evt )  {
    alert("Circle onContextMenu");
  },
  
  onZoomIn : function() {
    this.byId("vbi").zoomToRegions(["NA"]);
  }
});