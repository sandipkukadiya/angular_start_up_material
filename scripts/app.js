

var app = angular.module('sbAdminApp', ['sidebar','mainModule','login','register', 'ui.router','ngMaterial']);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/dashboard');

	$stateProvider
		.state('app', {
			url: '/',
			views: {
				'main@': {
					templateUrl: 'view/dashboard/full.html',
					controller:'mainController'
				},
				'sidebar@app': {
					templateUrl: 'view/dashboard/sidebar-material.html',
					controller:'sidebarController'
				},
				'header@app': {
					templateUrl: 'view/dashboard/header.html'
				},
				'footer@app': {
					templateUrl: 'view/dashboard/footer.html'
				}
			}
		})
		.state('app.dashboard', {
			url: 'dashboard',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/main.html'
				}
			}
		})
		.state('app.charts', {
			url: 'charts',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/charts.html'
				}
			}
		})
		.state('app.table', {
			url: 'table',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/table.html'
				}
			}
		})
		.state('app.components',{
			abstract: true, 
			url:'components'
		})
		.state('app.components.navbar', {
			url: '/navbar',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/navbar.html'
				}
			}
		})
		.state('app.components.cards', {
			url: '/cards',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/cards.html'
				}
			}
		})
		.state('login', {
			url: '/login',
			views: {
				'main@': {
					templateUrl: 'view/dashboard/login.html',
					controller:'loginController'
				}
			}
		})
		.state('register', {
			url: '/register',
			views: {
				'main@': {
					templateUrl: 'view/dashboard/register.html',
					controller:'registerController'
				}
			}
		})
		.state('forgotpassword', {
			url: '/forgotpassword',
			views: {
				'main@': {
					templateUrl: 'view/dashboard/forgotpassword.html'
				}
			}
		})

		.state('app.blank', {
			url: 'blank',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/blank.html'
				}
			}
		})
		.state('app.menulevelsecond', {
			url: 'menulevelsecond'
		})
		.state('app.menulevelsecond.one', {
			url: '/one',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/menulevelsecond_one.html'
				}
			}
		})
		.state('app.menulevelsecond.two', {
			url: '/two',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/menulevelsecond_two.html'
				}
			}
		})
		.state('app.menulevelsecond.three', {
			url: '/three',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/menulevelsecond_three.html'
				}
			}
		})
		.state('app.menulevelsecond.menulevelthird', {
			url: '/menulevelthird'
		})
		.state('app.menulevelsecond.menulevelthird.one', {
			url: '/one',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/menulevelthird_one.html'
				}
			}
		})
		.state('app.menulevelsecond.menulevelthird.two', {
			url: '/two',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/menulevelthird_two.html'
				}
			}
		})
		.state('app.menulevelsecond.menulevelthird.three', {
			url: '/three',
			views: {
				'content@app': {
					templateUrl: 'view/dashboard/menulevelthird_three.html'
				}
			}
		})


}]);

app.run(['$rootScope', '$state', '$stateParams',
	function ($rootScope, $state, $stateParams) {
		$rootScope.$on('$stateChangeSuccess', function () {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		});
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}])