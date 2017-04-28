namespace birthdays.Controllers {

  export class AgeGroupController {
    public ageGroups;

    // static $inject = ['ageGroupService', '$stateParams','$state'];

    constructor(ageGroupService) {
      this.ageGroups = ageGroupService.getAll();
    }
  }
}
