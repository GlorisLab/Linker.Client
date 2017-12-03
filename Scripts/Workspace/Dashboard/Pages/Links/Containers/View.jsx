import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStore } from 'Decorators/ConnectDecorators';
import { ContentStatus } from 'Components/Helpers';

import ViewActions from '../Actions/ViewActions';
import CreateForm from './CreateForm';
import Link from '../Components/Link';

class DashboardPagesLinksView extends Component {
  constructor(props) {
    super();

    const { actions: { linksGet }, match } = props;
    this.componentDidMount = () => linksGet(match.params.albumId);
  }

  render() {
    const { data, status } = this.props;

    return (
      <ContentStatus status={status}>
        <div className="links">
          {data.map(({ _id, ...album }) => <Link key={_id} {...album} />)}
          <CreateForm userId={this.props.userId} />
        </div>
      </ContentStatus>
    );
  }
}

DashboardPagesLinksView.propTypes = {
  actions: PropTypes.object,
  match: PropTypes.object,
  userId: PropTypes.string,
  status: PropTypes.string,
  data: PropTypes.array
};

const mapStateToProps = ({ links, user }) => ({
  ...links,
  userId: user['_id']
});

export default connectToStore({ mapStateToProps, actions: ViewActions })(DashboardPagesLinksView);
