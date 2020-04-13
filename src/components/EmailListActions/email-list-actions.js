import React, { Fragment, useContext } from 'react';
import { getMessageIdsByTag } from '../../utils/email-manager';
import SelectedContext from '../../SelectedContext';
import EmailContext from '../../context/EmailContext';
import Icon from '../Icon';

const iconNames = ["archive", "report", "delete", "markunread", "watch_later", "label"];

const EmailListActions = () => {
  const email = useContext(EmailContext);
  const selected = useContext(SelectedContext);

  function handleSelectAll() {
    selected.selectAll(getMessageIdsByTag(email.messages));
  };

  function handleDeselectAll() {
    selected.deselectAll();
  };

  const selectedEmailIcons = iconNames.map((name, idx) => {
    return <Icon key={idx} name={name} />
  });

  return (
      <Fragment>
        {selected.ids.size ? (
          <Fragment>
            <Icon enabled key={"deselect"} name={"indeterminate_check_box"} clickHandler={handleDeselectAll} />
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