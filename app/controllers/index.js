import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    storeMood(mood){
      let newMood = this.store.createRecord('mood', mood);

      newMood.save();
    }
  }
});
