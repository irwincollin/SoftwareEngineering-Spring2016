/* register the modules the application depends upon here*/
angular.module('listings', []);
/* register the application and inject all the necessary dependencies */
var myApp = angular.module('directoryApp', ['listings', 'ngMap']);
