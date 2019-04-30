import Component from '@ember/component';

export default Component.extend({
    selected: false,
    actions: {
        toggleImageHover() {
            this.toggleProperty('selected');
        }
    }
});
