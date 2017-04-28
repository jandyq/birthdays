namespace birthdays.Controllers {

  export class NurseryController {
    public list;
    public child;

    constructor(private nurseryService, $stateParams, private $state) {
      this.list = nurseryService.getList($stateParams.id);
    }
    public deleteChild() {
      this.nurseryService.deleteChild(this.child._id)
      .then(() => this.$state.go('nursery'))
      .catch((err) => console.error(err));
    }
    public updateNursury() {
      this.$state.go('updateNursury', {id: this.child._id});
    }
  }
}
