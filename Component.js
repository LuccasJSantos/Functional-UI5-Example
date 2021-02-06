sap.ui.define([
	"sap/ui/core/UIComponent",
	"./model/models"
], function (UIComponent, models) {
	"use strict";

	return UIComponent.extend("example.ui5.functionalFunctional-UI5-Example.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			models.init(this)

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			this.getRouter().initialize();
		}
	});
});