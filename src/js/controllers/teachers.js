angular
  .module('physicsWars')
  .controller('TeachersIndexCtrl', TeachersIndexCtrl)
  .controller('TeachersShowCtrl', TeachersShowCtrl)
  .controller('TeachersEditCtrl', TeachersEditCtrl);

TeachersIndexCtrl.$inject = ['Teacher'];
function TeachersIndexCtrl(Teacher) {
  const vm = this;

  vm.all = Teacher.query();
}


TeachersShowCtrl.$inject = ['Teacher', 'Topic', 'Solution', 'Student', '$stateParams', '$state', '$auth'];
function TeachersShowCtrl(Teacher, Topic, Solution, Student, $stateParams, $state, $auth) {
  const vm = this;

  vm.showingUnmarked = true;

  function toggleQuestions() {
    vm.showingUnmarked = !vm.showingUnmarked;
  }

  function showSolution(solution) {
    return (vm.showingUnmarked && solution.correct === null) || (!vm.showingUnmarked && solution.correct !== null);
  }

  vm.showSolution = showSolution;
  vm.toggleQuestions = toggleQuestions;

  vm.all = Teacher.query();
  vm.teacher = Teacher.get($stateParams);
  vm.solution = {
    teacher_id: $state.params.id
  };
  vm.currentSolution = Solution.query();

function correctMarking(solution) {
  solution.correct = true;
  Solution
  .update({ id: solution.id }, solution)
  .$promise
  .then((solution) => {
  });
}

function incorrectMarking(solution) {
  solution.correct = false;
  Solution
  .update({ id: solution.id }, solution)
  .$promise
  .then((solution) => {
  });
}

function addComment(solution) {
  console.log('commenting', solution);
  // console.log(solution.id);
  // console.log(solution.student_comment);

    Solution
      .update({ id: solution.id }, solution)
      .$promise
      .then((solution) => {
        console.log(solution.teacher_comment);
      });
      console.log('teacher commented');
      console.log(solution.teacher_comment);
  }




vm.correctMarking = correctMarking;
vm.incorrectMarking = incorrectMarking;
vm.addComment = addComment;



  if ($auth.getPayload()) vm.currentTeacher = Teacher.get({ id: $auth.getPayload().id });

  function solutionCreate() {
    Solution
      .save(vm.solution)
      .$promise
      .then(() => $state.go('home'));
  }

vm.solutionCreated = solutionCreate;



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
