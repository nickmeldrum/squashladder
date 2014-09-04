'use strict';

squashLadder.factory("rankingsFactory", function ($http, $q) {
   return {
    getList: function() {
      return  [{"id": "1","name": "John"}, {"id": "2","name": "Fred"}];
    },
  };
});