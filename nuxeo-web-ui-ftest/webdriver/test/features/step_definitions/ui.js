'use strict';

import UI from '../../pages/ui';

module.exports = function () {

  this.When('I go to the UI', () => {
    this.ui = UI.get();
  });

  this.When('I click the "$button" button', (button) => this.ui.goTo(button));

  this.When('I select "$docType"', (docType) => this.ui.selectDocType(docType));

  this.When('I click the "$button" search button', (button) => this.ui.goToSearch(button));

  this.When('I select "$option" from the View menu', (option) => this.ui.view(option));
};
