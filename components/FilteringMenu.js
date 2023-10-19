import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBorderAll, faSortNumericDown, faSortNumericUp} from '@fortawesome/free-solid-svg-icons';


const LIST_VIEW_ICONS = [faList, faBorderAll];
const DATE_FILTERING_ICONS = [faSortNumericDown, faSortNumericUp];

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div className="filtering-menu mb-2">
      <FontAwesomeIcon
        className="clickable hoverable mr-3"
        size="2x"
        icon={LIST_VIEW_ICONS[filter.view.list]}
        onClick={() =>
          onChange('view', { list: +!filter.view.list })
        }
      />
      <FontAwesomeIcon
        className="clickable hoverable"
        size="2x"
        icon={DATE_FILTERING_ICONS[filter.date.asc]}
        onClick={() =>
          onChange('date', { asc: +!filter.date.asc })
        }
      />
    </div>
  );
}

export default FilteringMenu;
