'use strict';

angular.module('todos')
    .component('todosScreen', {
        templateUrl: 'scripts/todos/screen/todosScreen.html',
        controller: function ($scope, Store) {
            var vm = this;

            this.$onInit = function () {
                vm.todos = [];

                Store.subscribe(function (state) {
                    // $scope.$applyAsync(function () {
                    vm.todos = angular.copy(state.todos);
                    // });
                });

            };
        }
    });