sap.ui.controller("content.PropertyCrimeDetails", {
// controller logic goes here
onInit: function() {
// this function is called when the view is instantiated.
// Used to modify the view before displaying
// first, we have to define the odata model
var dataModel = new sap.ui.model.odata.ODataModel(
"models/property.xsodata"
);
// now we can bind the odata model to the SalesOrders
// view, so controls within the view can use it
this.getView().setModel(dataModel);

/*var oItemTemplate = new sap.ui.core.ListItem();

var oComboBox = new sap.ui.commons.ComboBox("comboBox",{
    items:{
        template:oItemTemplate
    }
});
oComboBox.setModel(dataModel);
/*oItemTemplate.bindProperty("text", "device");
oItemTemplate.bindProperty("enabled", "enabled");*/
/*oComboBox.bindValue("{STATE_ABBR}");
oComboBox.placeAt("__xmlview1--comboBox");*/
},
onExit: function() {
// this function is called when the view is destroyed.
// Used for clean-up activities
},
onAfterRendering: function() {
// this function is called when the view has been rendered.
// Used for post-rendering manipulation of the HTML code
// in order to fire a change, we need to get the daterangeslider
},
onBeforeRendering: function() {
// this function is called before the view is re-rendered // (not before first rendering)
}
});