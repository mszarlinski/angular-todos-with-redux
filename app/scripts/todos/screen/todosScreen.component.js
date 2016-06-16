'use strict';

angular.module('todos')
    .component('todosScreen', {
        templateUrl: 'scripts/todos/screen/todosScreen.html',
        controller: function () {
            var vm = this;

            vm.idSequence = 0;

            vm.todos = [{
                id: vm.idSequence++,
                text: 'First todo',
                completed: false
            }];

            vm.addTodo = function (text) {
                vm.todos.push({id: vm.idSequence++, text: text, completed: false});
            };
        }
    });