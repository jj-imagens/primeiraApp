(function () {
  angular.module('primeiraApp').controller('BillingCycleCtrl', [
    '$http',
    BillingCycleController
  ])

  function BillingCycleController($http) {
    const vm = this

    vm.create = function() {
      const url = 'http://localhost:3003/api/billingCycles'
      $http.post(url, vm.billingCycles).then(function(response) {
        vm.billingCycles = {}
        console.log('Sucesso!')
      })
    }
  }
}) ()
