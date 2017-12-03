import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStore } from 'Decorators/ConnectDecorators';
import { ContentStatus } from 'Components/Helpers';

import ViewActions from '../Actions/ViewActions';
import CreateForm from './CreateForm';
import Album from '../Components/Album';

class DashboardPagesAlbumsView extends Component {
  constructor(props) {
    super();

    const { albumsGet, albumEditFormOpen, albumDelete } = props.actions;

    this.componentDidMount = () => albumsGet(this.props.userId, this.props.filter);

    this.onAlbumOpen = (id, name) => () => this.props.history.push(`/Dashboard.html/Links/${id}/${name}`);
    this.onAlbumDelete = id => () => albumDelete(id);
    this.onAlbumEditFormOpen = album => event => {
      event.stopPropagation();

      albumEditFormOpen(album);
    };
  }

  render() {
    const { data, status, editingAlbum } = this.props;

    return (
      <ContentStatus status={status}>
        <div className="albums">
          {data.map(({ _id, ...album }) => (
            <Album
              key={_id}
              {...album}
              isEditing={editingAlbum === _id}
              id={_id}
              onAlbumOpen={this.onAlbumOpen}
              onAlbumEditFormOpen={this.onAlbumEditFormOpen}
              onAlbumDelete={this.onAlbumDelete}
            />))
          }
          <CreateForm userId={this.props.userId} />
        </div>
      </ContentStatus>
    );
  }
}

DashboardPagesAlbumsView.propTypes = {
  actions: PropTypes.object,
  history: PropTypes.object,
  filter: PropTypes.object,
  editingAlbum: PropTypes.string,
  userId: PropTypes.string,
  status: PropTypes.string,
  data: PropTypes.array
};

const mapStateToProps = ({ albums, user }) => ({
  ...albums,
  userId: user['_id']
});

export default connectToStore({ mapStateToProps, actions: ViewActions })(DashboardPagesAlbumsView);
