import React, { Component } from 'react';

const SelectedContext = React.createContext()

class SelectedProvider extends Component {
  state = {
    ids: new Set()
  };

  deselectAll = () => {
    this.setState({ ids: new Set() });
  };

  toggleSelected = (id) => {
    const set = this.state.ids;

    if (set.has(id)) {
      set.delete(id);
    } else {
      set.add(id);
    }

    this.setState({ ids: set });
  };

  selectAll = (ids) => {
    this.setState({ ids });
  };

  render() {
    const { ids } = this.state;
    const { deselectAll, selectAll, toggleSelected } = this;

    return (
      <SelectedContext.Provider value={{ ids, deselectAll, selectAll, toggleSelected }}>
        {this.props.children}
      </SelectedContext.Provider>
    )
  }
}

export default SelectedContext;
export { SelectedProvider };