import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { SECTION_DATA } from '../../core/data/section.data';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTION_DATA
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {
          sections.map((section) => (
            <MenuItem
              key={section.id}
              title={section.title}
              imageUrl={section.imageUrl}
              linkUrl={section.linkUrl}
              size={section.size}
            />
          ))
        }
      </div>
    );
  }
}

export default Directory;
