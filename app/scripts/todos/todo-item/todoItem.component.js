'use strict';

angular.module('todos')
    .component('todoItem', {
        templateUrl: 'scripts/todos/todo-item/todoItem.html',
        bindings: {
            todo: '<'
        }
    });