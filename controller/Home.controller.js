sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("demo.controller.Home", {
		// onInit: function() {
		// 	this.attachPopoverOnMouseover(this.byId("target"), this.byId("popover"));
		// },

		// attachPopoverOnMouseover: function(targetControl, popover) {
		// 	targetControl.addEventDelegate({
		// 		onmouseover: this._showPopover.bind(this, targetControl, popover),
		// 		onmouseout: this._clearPopover.bind(this, targetControl, popover)
		// 	}, this);
		// },

		// _showPopover: function(targetControl, popover) {
		// 	this._timeId = setTimeout(() => popover.openBy(targetControl), 500);
		// },

		// _clearPopover: function(targetControl, popover) {
		// 	clearTimeout(this._timeId) || popover.close();
		// },
		
		onAfterRendering: function() {
		this.attachPopoverOnMouseover(this.byId("target"), this.byId("popover"));
		},
		
		attachPopoverOnMouseover: function(targetControl, popover) {
			jQuery.event.add($("#" + targetControl.getId())[0], "mouseenter", this._showPopover.bind(this, targetControl, popover));
			jQuery.event.add($("#" + targetControl.getId())[0], "mouseleave", this._clearPopover.bind(this, targetControl, popover));
		},

		_showPopover: function(targetControl, popover) {
			popover.openBy(targetControl);
		},

		_clearPopover: function(targetControl, popover) {
			if (popover.isOpen()) {
				popover.close();
			}
		}

	});
});