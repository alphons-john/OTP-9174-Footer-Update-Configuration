// @module JJ.Myfooters.footermodule
define('JJ.Myfooters.footermodule.View'
,	[
	'jj_myfooters_footermodule.tpl'
	
	,	'JJ.Myfooters.footermodule.SS2Model'
	
	,	'Backbone'
    ]
, function (
	jj_myfooters_footermodule_tpl
	
	,	footermoduleSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class JJ.Myfooters.footermodule.View @extends Backbone.View
	return Backbone.View.extend({

		template: jj_myfooters_footermodule_tpl

	,	initialize: function (options) {
		this.phone = options.container.getConfig("footermodule").footermodule.phone
		this.email = options.container.getConfig("footermodule").footermodule.email
		this.addressTittle = options.container.getConfig("footermodule").footermodule.addressTitle
		this.addressLine1 = options.container.getConfig("footermodule").footermodule.addressLine1
		this.addressLine2 = options.container.getConfig("footermodule").footermodule.addressLine2
		this.logInUrl = options.container.getConfig("footermodule").footermodule.accountLinks[0].url
		this.signInUrl = options.container.getConfig("footermodule").footermodule.accountLinks[1].url
		console.log(this.signInUrl)
			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new footermoduleModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return JJ.Myfooters.footermodule.View.Context
	,	getContext: function getContext()
		{
			//@class JJ.Myfooters.footermodule.View.Context
			return {
				phone: this.phone,
				email:this.email,
				addressTittle:this.addressTittle,
				addressLine1:this.addressLine1,
				addressLine2:this.addressLine2,
				loginurl:this.logInUrl,
				signinurl:this.signInUrl
			};
		}
	});
});
