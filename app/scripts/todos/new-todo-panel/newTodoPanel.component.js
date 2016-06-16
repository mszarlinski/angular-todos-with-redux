'use strict';

angular.module('todos')
    .component('newTodoPanel', {
        templateUrl: 'scripts/todos/new-todo-panel/newTodoPanel.html',
        bindings: {
            onCreate: '&'
        },
        controller: function () {
            var vm = this;

            vm.text = '';

            vm.createTodo = function () {
                vm.onCreate({text: vm.text});
                vm.text = '';
            };
        }
    });