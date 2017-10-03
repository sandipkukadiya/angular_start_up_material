
var app = angular.module('sbAdminApp',['ui.router','oc.lazyLoad']);
app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
	
	$urlRouterProvider.otherwise('/dashboard');
	/* use for debug code */
	 $ocLazyLoadProvider.config({
    	debug: true
  	 });

	 $stateProvider.state('app', {
	 		abstract: true, 
		    templateUrl: 'view/dashboard/full.html'
		})
	 .state('app.main',{
	 	url: '/dashboard',
  		templateUrl: 'view/dashboard/main.html'
	 })
	 .state('app.charts',{
	 	url:'/charts',
	 	templateUrl:'view/dashboard/charts.html'
	 })
	 .state('app.table',{
	 	url:'/table',
	 	templateUrl:'view/dashboard/table.html'
	 })
	 .state('app.components',{
	 	url:'/components'
	 })
	 .state('app.components.navbar',{
	 	url:'/navbar',
	 	templateUrl:'view/dashboard/navbar.html'
	 })
	 .state('app.components.cards',{
	 	url:'/cards',
	 	templateUrl:'view/dashboard/cards.html'
	 })
	.state('app.menulevelsecond',{
	 	url:'/menulevelsecond'
	 })
	.state('app.menulevelsecond.one',{
	 	url:'/one',
	 	templateUrl:'view/dashboard/menulevelsecond_one.html'
	 })
	.state('app.menulevelsecond.two',{
	 	url:'/two',
	 	templateUrl:'view/dashboard/menulevelsecond_two.html'
	 })
	.state('app.menulevelsecond.three',{
	 	url:'/three',
	 	templateUrl:'view/dashboard/menulevelsecond_three.html'
	 })
	.state('app.menulevelsecond.menulevelthird',{
	 	url:'/menulevelthird'
	 })
	.state('app.menulevelsecond.menulevelthird.one',{
	 	url:'/one',
	 	templateUrl:'view/dashboard/menulevelthird_one.html'
	 })
	.state('app.menulevelsecond.menulevelthird.two',{
	 	url:'/two',
	 	templateUrl:'view/dashboard/menulevelthird_two.html'
	 })
	.state('app.menulevelsecond.menulevelthird.three',{
	 	url:'/three',
	 	templateUrl:'view/dashboard/menulevelthird_three.html'
	 })
 	.state('null', {
		    templateUrl: 'view/dashboard/null.html'
	})
	.state('null.login', {
		url: '/login',
	    templateUrl: 'view/dashboard/login.html'
	})
	.state('null.register', {
		url: '/register',
	    templateUrl: 'view/dashboard/register.html'
	})
	.state('null.forgotpassword', {
		url: '/forgotpassword',
	    templateUrl: 'view/dashboard/forgotpassword.html'
	})
	.state('app.blank', {
		url: '/blank',
	    templateUrl: 'view/dashboard/blank.html'
	})



	}]);


app.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
  	$rootScope.$on('$stateChangeSuccess',function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])