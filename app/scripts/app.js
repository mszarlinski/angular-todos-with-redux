'use strict';

/**
 * @ngdoc overview
 * @name reduxApp
 * @description
 * # reduxApp
 *
 * Main module of the application.
 */

(function () {
    var reducerFunction = function (state, action) {
        switch (action.type) {
            case 'CREATE_TODO':
                state.todos.push({
                    id: state.idSequence++,
                    text: action.todoText,
                    completed: false
                });
                return state;
            case 'TOGGLE_TODO':
                action.todo.completed = !action.todo.completed;
                return state;
            default:
                return state;
        }
    };

    angular
        .module('reduxApp', ['todos', 'redux'])
        .config(function (StoreProvider) {
            StoreProvider.initWithReducer(reducerFunction)
        })
        .constant('ActionType', {
            CREATE_TODO: 'CREATE_TODO',
            TOGGLE_TODO: 'TOGGLE_TODO'
        });
})(angular);

