sap.ui.controller("content.ViolentCrimeDetails", {
// controller logic goes here
onInit: function() {
// this function is called when the view is instantiated.
// Used to modify the view before displaying
// first, we have to define the odata model
var dataModel = new sap.ui.model.odata.ODataModel(
"models/violent.xsodata"
);

// now we can bind the odata model to the SalesOrders
// view, so controls within the view can use it
this.getView().setModel(dataModel);

},
onExit: function() {
// this function is called when the view is destroyed.
// Used for clean-up activities
},
onChange: function(oEvent){
    
                	var selectedItem = oEvent.getParameter("selectedItem").getKey();
                },
onAfterRendering: function() {
// this function is called when the view has been rendered.
// Used for post-rendering manipulation of the HTML code
// in order to fire a change, we need to get the daterangeslider
/*var drs = this.byId('drs');
// because we catch undefined values in our handleChange function,
// we do not care if anything is set in the daterangeslider
drs.fireChange();*/
},
onBeforeRendering: function() {
// this function is called before the view is re-rendered // (not before first rendering)
}
/*handleSelectionChange: function(oEvent) {

     var oItem = oEvent.mParameters.changedItem.mProperties.key;
    // The model that is bound to the item
    //the name of your model should be a parameter in getBindingContext
    // A single property from the bound model
    var customerNameInput = this.getView().byId("customerName");
// now we can set the Input to the value of a
// field of the selected row
customerNameInput.setValue(oItem) ;
}*/
});