'use strict';

const logger = require('../utils/logger');
const userStore = require('../models/user-store');

const start = {
  index(request, response) {
    logger.info('start rendering');
    
      
      const getAccounts = userStore.getAllAccounts();
    let totalaccounts = 0;
    for (let i in getAccounts) {
     totalaccounts = totalaccounts + getAccounts[i].users.length;
    }
    
    const viewData = {
      title: 'Welcome to Template 2',
      totalCollections: totalaccounts
    };
    response.render('start', viewData);
  },
};

module.exports = start;
