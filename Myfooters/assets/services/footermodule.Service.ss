
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.Myfooters.footermodule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.Myfooters.footermodule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}