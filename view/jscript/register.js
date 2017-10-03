var app = angular.module('register', ['ngStorage']);
app.controller('registerController', function ($scope, $localStorage,$mdDialog,$window) {
        vm = this;
        vm.user = {
               firstname:'' ,
               lastname:'',
               email:'',
               password:'',
               confirmedPassword:''
        }
        vm.dataSubmit = dataSubmit;
        vm.storage = $localStorage;
        vm.sessionStorage = sessionStorage;
        function dataSubmit(){
            // local storage && session storage
            vm.sessionStorage.setItem("user", JSON.stringify(vm.user));
            vm.storage.$default(vm.user);
            $window.location.href = '/#!/login';
        }


});