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
		this.cartUrl = options.container.getConfig("footermodule").footermodule.accountLinks[2].url
		this.myAccount = options.container.getConfig("footermodule").footermodule.accountLinks[3].url
		this.AboutUsUrl = options.container.getConfig("footermodule").footermodule.socialLinks[0].url
		this.ContactUsUrl = options.container.getConfig("footermodule").footermodule.socialLinks[1].url
		this.FAQsUrl = options.container.getConfig("footermodule").footermodule.socialLinks[2].url
		this.TermsUrl = options.container.getConfig("footermodule").footermodule.socialLinks[3].url
		this.facebook = options.container.getConfig("footermodule").footermodule.informationLinks[0].url
		this.twitter = options.container.getConfig("footermodule").footermodule.informationLinks[1].url
		this.instagram = options.container.getConfig("footermodule").footermodule.informationLinks[2].url
		this.youtube = options.container.getConfig("footermodule").footermodule.informationLinks[3].url
		this.logo = options.container.getConfig("footermodule").footermodule.companyLogo
		this.copyright = options.container.getConfig("footermodule").footermodule.copyRight

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
				signinurl:this.signInUrl,
				carturl:this.cartUrl,
				myaccounturl:this.myAccount,
				aboutus:this.AboutUsUrl,
				contactus:this.ContactUsUrl,
				faq:this.FAQsUrl,
				terms:this.TermsUrl,
				Facebook:this.facebook,
				Twitter:this.twitter,
				Instagram:this.instagram,
				Youtube:this.youtube,
				logo:this.logo,
				copyright:this.copyright
			};
		}
	});
});
