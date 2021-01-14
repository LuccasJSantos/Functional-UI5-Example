sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"example/ui5/functionalFunctional-UI5-Example/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("example.ui5.functionalFunctional-UI5-Example.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});