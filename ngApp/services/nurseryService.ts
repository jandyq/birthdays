namespace birthdays.Services {

  export class NurseryService {
    private NURSERY_RESOURCE = this.$resource('/home');

    constructor (private $resource) {}

    public getAll() {
      return this.NURSERY_RESOURCE.query();
    }

  }
}

  angular.module('birthdays').service('nurseryService', NurseryService);
}

//is this going to look like the ageGroupService?
