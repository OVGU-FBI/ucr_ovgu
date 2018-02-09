sap.ui.controller("content.Overview", {
// controller logic goes here
onInit: function() {

},
onExit: function() {
// this function is called when the view is destroyed.
// Used for clean-up activities
},
onAfterRendering: function() {

},
onBeforeRendering: function() {
// this function is called before the view is re-rendered // (not before first rendering)
},

changeText : function(oEvent) {
// get the button control from the event
var myButton = oEvent.getSource();
// change the button's text
myButton.setText("Clicked!");
}
});