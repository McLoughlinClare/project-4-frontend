angular
  .module('physicsWars')
  .factory('Student', Student);

Student.$inject = ['$resource', 'API_URL'];
function Student($resource, API_URL) {
  return new $resource(`${API_URL}/students/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
