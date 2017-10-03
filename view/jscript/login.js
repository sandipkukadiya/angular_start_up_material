var app = angular.module('login', []);
app.controller('loginController', function ($scope, $mdDialog) {
    var vm = this;
    vm.user = {
        email: 'admin@gmail.com',
        password: 'password'
    }
    vm.dataSubmit = dataSubmit;
    function dataSubmit() {
        if(vm.user.email=='admin@infizer.com' && vm.user.password=='password'){
            console.log('ok');
        }else{
            console.log('error');
        }
    }
});