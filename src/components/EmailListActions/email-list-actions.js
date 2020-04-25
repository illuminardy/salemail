import React, { Fragment, useContext } from 'react';
import { getMessageIdsByTag, removeEmails } from '../../utils/email-manager';
import SelectedContext from '../../SelectedContext';
import Icon from '../Icon';

const iconNames = ["archive", "report", "markunread", "watch_later", "label"];

const EmailListActions = (props) => {
  const selected = useContext(SelectedContext);

  function handleSelectAll() {
    selected.selectAll(getMessageIdsByTag());
  };

  function handleDeselectAll() {
    selected.deselectAll();
  };

  function handleDelete() {
    removeEmails(selected.ids);
  };

  const selectedEmailIcons = iconNames.map((name, idx) => {
    return <Icon key={idx} name={name} />
  });

  return (
      <Fragment>
        {selected.ids.size ? (
          <Fragment>
            <Icon enabled key={"deselect"} name={"indeterminate_check_box"} clickHandler={handleDeselectAll} />
            <Icon enabled key={"delete"} name={"delete"} clickHandler={handleDelete}/>
            {selectedEmailIcons}
          </Fragment>
          ) : (
            <Fragment>
              <Icon enabled key={"select"} name={"check_box_outline_blank"} clickHandler={handleSelectAll} />
              <Icon key={"refresh"} name={"refresh"} />
              <Icon key={"more_vert"} name={"more_vert"} />
            </Fragment>
          )
        }
    </Fragment> 
  )
};

export default EmailListActions;