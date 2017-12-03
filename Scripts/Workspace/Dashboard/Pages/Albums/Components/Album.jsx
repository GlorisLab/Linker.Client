import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FormUtils from 'Utils/FormUtils';

import EditForm from '../Containers/EditForm';

const DashboardPagesAlbum = ({
  isEditing,
  description,
  title,
  id,
  onAlbumOpen,
  onAlbumEditFormOpen,
  onAlbumDelete
}) => (
  <div className="wrap-album">
    <ReactCSSTransitionGroup
      transitionName="album"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {isEditing && <EditForm />}
      {!isEditing &&
      <div className="album" onClick={onAlbumOpen(id, title)}>
        <div className="header">{title}</div>
        <div className="description">{description}</div>
        <div className="controls" onClick={FormUtils.stopPropagation}>
          <i className="material-icons" title="Delete album" onClick={onAlbumDelete(id)}>delete</i>
          <i className="material-icons" title="Edit album" onClick={onAlbumEditFormOpen({ id, title, description })}>mode_edit</i>
          <i className="material-icons" title="Go to the links page" onClick={onAlbumOpen(id, title)}>forward</i>
        </div>
      </div>
      }
    </ReactCSSTransitionGroup>
  </div>
);

DashboardPagesAlbum.propTypes = {
  isEditing: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onAlbumOpen: PropTypes.func,
  onAlbumEditFormOpen: PropTypes.func,
  onAlbumDelete: PropTypes.func
};

export default DashboardPagesAlbum;
