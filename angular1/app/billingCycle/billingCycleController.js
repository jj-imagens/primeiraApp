(function () {
  angular.module('primeiraApp').controller('BillingCycleCtrl', [
    '$http',
    BillingCycleController
  ])

  function BillingCycleController($http) {
    const vm = this

    vm.cicloPagamento = {
      nome: "paulo",
      mes: 1,
      ano: 2017
    }

    vm.create = function() {
      const url = 'http://localhost:3003/api/billingCycles'
      $http.post(url, vm.billingCycles).then(function(response) {
        vm.billingCycles = {}
        console.log('Sucesso!')
      })
    }
  }
}) ()
