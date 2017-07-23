angular
  .module('physicsWars')
  .factory('Challenge', Challenge);

Challenge.$inject = ['$resource', 'API_URL'];
function Challenge($resource, API_URL) {
  return new $resource(`${API_URL}/challenges/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
