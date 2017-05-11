(function() {
  'use strict';

  angular
    .module('app', ['']);
})();

(function() {
  'use strict';

  angular
    .module('app', [])
    .controller('TodoListController', TodoListController);

  TodoListController.$inject = [];

  /* @ngInject */
  function TodoListController() {
    var vm = this;
    vm.list = [];

    //the click function to enable adding the to do input items and making a list
    vm.submit = function() {
      vm.list.push({
        todo: vm.toDoObject.todoListInput,
        priority: vm.toDoObject.priorityList
      });

    //console to verify everything is pushed properly and making an array
      console.log(vm.toDoObject);
    }
  }
})();
