
define(
	'JJ.Myfooters.footermodule'
,   [
		'JJ.Myfooters.footermodule.View'
	]
,   function (
		footermoduleView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var config = container.getConfig('footermodule');
			
			if(layout)
			{
				layout.addChildView('Footer', function() { 
					return new footermoduleView({ container: container });
				});
			}

		}
	};
});
