// Budget Controller
var budgetController = (function() {


})();

// UI Controller
var UIController = (function() {
  return {
    getInput: function() {

    }
  };
})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {

    console.log("it works");
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);


  document.addEventListener('keypress', function(e) {
    if(e.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    } else {

    }
  });

})(budgetController, UIController);
