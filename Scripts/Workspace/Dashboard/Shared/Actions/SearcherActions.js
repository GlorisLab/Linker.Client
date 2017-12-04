import { createActions } from 'realt';

class DashboardSearcherActions {
  constructor() {
    this.generate(
      'changeValue',
      'reset'
    );
  }
}

export default createActions(DashboardSearcherActions);
