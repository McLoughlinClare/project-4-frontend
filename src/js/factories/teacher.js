angular
  .module('physicsWars')
  .factory('Teacher', Teacher);

Teacher.$inject = ['$resource', 'API_URL'];
function Teacher($resource, API_URL) {
  return new $resource(`${API_URL}/teachers/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
