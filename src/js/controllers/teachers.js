angular
  .module('physicsWars')
  .controller('TeachersIndexCtrl', TeachersIndexCtrl)
  .controller('TeachersNewCtrl', TeachersNewCtrl)
  .controller('TeachersShowCtrl', TeachersShowCtrl)
  .controller('TeachersEditCtrl', TeachersEditCtrl);

TeachersIndexCtrl.$inject = ['Teacher'];
function TeachersIndexCtrl(Teacher) {
  const vm = this;

  vm.all = Teacher.query();
}

TeachersNewCtrl.$inject = ['Teacher', 'Student', '$state'];
function TeachersNewCtrl(Teacher, Student, $state) {
  const vm = this;
  vm.teacher = {};
  vm.users = Student.query();

  function teachersCreate() {
    Teacher
      .save(vm.teacher)
      .$promise
      .then(() => $state.go('teachersIndex'));
  }

  vm.create = teachersCreate;
}

TeachersShowCtrl.$inject = ['Teacher', 'Topic', 'Solution', 'Student', '$stateParams', '$state', '$auth'];
function TeachersShowCtrl(Teacher, Topic, Solution, Student, $stateParams, $state, $auth) {
  const vm = this;

  vm.all = Teacher.query();
  vm.teacher = Teacher.get($stateParams);
  vm.solution = {
    teacher_id: $state.params.id
  };



  if ($auth.getPayload()) vm.currentTeacher = Teacher.get({ id: $auth.getPayload().id });

  function solutionCreate() {
    Solution
      .save(vm.solution)
      .$promise
      .then(() => $state.go('home'));
  }

vm.solutionCreated = solutionCreate;

// function toggleCorrect() {
//   const index = vm.solution.correct;
//   if(index === 'true') {
//     vm.event.attendee_ids.splice(index, 1);
//     vm.event.attendees.splice(index, 1);
//   } else {
//     vm.event.attendee_ids.push(vm.currentUser.id);
//     vm.event.attendees.push(vm.currentUser);
//   }
//   eventsUpdate();
// }
//
// vm.toggleAttending = toggleAttending;

  function teachersDelete() {
    vm.teacher
      .$remove()
      .then(() => $state.go('teachersIndex'));
  }

  vm.delete = teachersDelete;

  function teachersUpdate() {
    Teacher
      .update({ id: vm.teacher.id }, vm.teacher);
  }
}


TeachersEditCtrl.$inject = ['Teacher', 'Student', '$stateParams', '$state'];
function TeachersEditCtrl(Teacher, Student, $stateParams, $state) {
  const vm = this;

  Teacher.get($stateParams).$promise.then((teacher) => {
    vm.teacher = teacher;
    vm.teacher.date = new Date(teacher.date);
  });

  vm.users = Student.query();

  function teachersUpdate() {
    Teacher
      .update({ id: vm.teacher.id }, vm.teacher)
      .$promise
      .then(() => $state.go('teachersShow', { id: vm.teacher.id }));
  }

  vm.update = teachersUpdate;
}
