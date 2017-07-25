angular
  .module('physicsWars')
  .factory('School', School);

School.$inject = ['$resource', 'API_URL'];
function School($resource, API_URL) {
  return new $resource(`${API_URL}/schools/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
