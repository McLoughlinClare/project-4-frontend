angular
  .module('physicsWars')
  .factory('Solution', Solution);

Solution.$inject = ['$resource', 'API_URL'];
function Solution($resource, API_URL) {
  return new $resource(`${API_URL}/solutions/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
