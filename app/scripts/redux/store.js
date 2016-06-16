'use strict';

angular.module('redux')
    .provider('Store', function () {

        var _reducer = angular.noop();

        this.initWithReducer = function (reducer) {
            _reducer = reducer;
        };

        this.$get = function () {
            var listeners = [];
            var state = {
                todos: [],
                idSequence: 0
            };

            return {
                dispatch: function (action) {
                    state = _reducer(state, action);
                    listeners.forEach(function (listener) {
                        listener(state);
                    })
                },
                subscribe: function (listener) {
                    listeners.push(listener);
                    return function () {
                        listeners.filter(function (l) {
                            return l !== listener;
                        });
                    }
                },

                getState: function () {
                    return state;
                }
            }
        }
    });