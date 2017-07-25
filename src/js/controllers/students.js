angular
  .module('physicsWars')
  .controller('StudentsShowCtrl', StudentsShowCtrl);

StudentsShowCtrl.$inject = ['Student', 'Topic', 'Solution', 'Teacher', '$stateParams', '$state', '$auth'];
function StudentsShowCtrl(Student, Topic, Solution, Teacher, $stateParams, $state, $auth) {
  const vm = this;

  vm.all = Student.query();

  //launch the correct answers after the page has loded.
  Student
  .get($stateParams)
  .$promise
  .then((student) => {
    vm.student = student;
    numberQuestionsAnswered();
  })

//calculating how many questions the student has got correct.
  vm.correctAnswers = [];
  function numberQuestionsAnswered() {
    for (i = 0; i < vm.student.solutions.length; i++) {
      if(vm.student.solutions[i].correct) {
        vm.correctAnswers.push(vm.student.solutions[i]);
      }
    }
  }


  if ($auth.getPayload()) vm.currentStudent = Student.get({ id: $auth.getPayload().id });

}
