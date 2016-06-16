'use strict';

angular.module('todos')
    .component('newTodoPanel', {
        templateUrl: 'scripts/todos/new-todo-panel/newTodoPanel.html',
        bindings: {
            onCreate: '&'
        },
        controller: function (Store, ActionType) {
            var vm = this;

            this.$onInit = function () {
                vm.createTodo = function () {
                    Store.dispatch({
                        type: ActionType.CREATE_TODO,
                        todoText: vm.text
                    });

                    vm.text = '';
                };
            };
        }
    });