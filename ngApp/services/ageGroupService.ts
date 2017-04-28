namespace birthdays.Services {

  class AgeGroupService {
    private AGEGROUP_RESOURSE = this.$resource('/home');

    constructor(public $resource) {}

    public getAll() {
      return this.AGEGROUP_RESOURSE.query();
    }

    public save(ageGroup) {
      return this.AGEGROUP_RESOURSE.save(ageGroup).$promise;
    }
  }

  angular.module('birthdays').service('ageGroupService', AgeGroupService);

}
