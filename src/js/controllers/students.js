angular
  .module('physicsWars')
  .controller('ChallengesIndexCtrl', ChallengesIndexCtrl)
  .controller('ChallengesNewCtrl', ChallengesNewCtrl)
  .controller('ChallengesShowCtrl', ChallengesShowCtrl)
  .controller('ChallengesEditCtrl', ChallengesEditCtrl);

ChallengesIndexCtrl.$inject = ['Challenge'];
function ChallengesIndexCtrl(Challenge) {
  const vm = this;

  vm.all = Challenge.query();
}

ChallengesNewCtrl.$inject = ['Challenge', 'Student', '$state'];
function ChallengesNewCtrl(Challenge, Student, $state) {
  const vm = this;
  vm.challenge = {};
  vm.users = Student.query();

  function challengesCreate() {
    Challenge
      .save(vm.challenge)
      .$promise
      .then(() => $state.go('challengesIndex'));
  }

  vm.create = challengesCreate;
}

ChallengesShowCtrl.$inject = ['Challenge', 'Student', '$stateParams', '$state', '$auth'];
function ChallengesShowCtrl(Challenge, Student,  $stateParams, $state, $auth) {
  const vm = this;
  if ($auth.getPayload()) vm.currentStudent = Student.get({ id: $auth.getPayload().id });

  vm.challenge = Challenge.get($stateParams);


  function challengesDelete() {
    vm.challenge
      .$remove()
      .then(() => $state.go('challengesIndex'));
  }

  vm.delete = challengesDelete;

  function challengesUpdate() {
    Challenge
      .update({ id: vm.challenge.id }, vm.challenge);
  }
}


ChallengesEditCtrl.$inject = ['Challenge', 'Student', '$stateParams', '$state'];
function ChallengesEditCtrl(Challenge, Student, $stateParams, $state) {
  const vm = this;

  Challenge.get($stateParams).$promise.then((challenge) => {
    vm.challenge = challenge;
    vm.challenge.date = new Date(challenge.date);
  });

  vm.users = Student.query();

  function challengesUpdate() {
    Challenge
      .update({ id: vm.challenge.id }, vm.challenge)
      .$promise
      .then(() => $state.go('challengesShow', { id: vm.challenge.id }));
  }

  vm.update = challengesUpdate;
}
