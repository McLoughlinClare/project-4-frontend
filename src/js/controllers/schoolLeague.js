angular
  .module('physicsWars')
  .controller('SchoolsLeagueCtrl', SchoolsLeagueCtrl);


SchoolsLeagueCtrl.$inject = ['School'];
function SchoolsLeagueCtrl(School) {
  const vm = this;

  vm.all = School.query();
}
