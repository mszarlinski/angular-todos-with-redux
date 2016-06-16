'use strict';

angular.module('todos')
    .component('todoItem', {
        templateUrl: 'scripts/todos/todo-item/todoItem.html',
        bindings: {
            todo: '<'
        },
        controller: function (Store, ActionType) {
            this.$onInit = function () {
                this.createTodo = function () {
                    Store.dispatch({
                        type: ActionType.TOGGLE_TODO,
                        todo: this.todo
                    })
                };
            }.bind(this);
        }
    });