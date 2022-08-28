import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

// Import css from existing CSS Modules file:
import css from './ListingPage.module.css';

// Create new React component
const SectionBikeSizeMaybe = props => {
  // Component's props should include all the possible options (from config)
  // and listing's publicData
  const { options, publicData } = props;
  const selectedOption =
    publicData && publicData.bikeSize ? publicData.bikeSize : null;

  // Don't return anything if public data doesn't contain bikeSize field
  // That's why we named this component as SectionBikeSizeMaybe
  if (!publicData || !selectedOption) {
    return null;
  }

  // Find selected options label
  const optionConfig = options.find(o => o.key === selectedOption);
  const optionLabel = optionConfig ? optionConfig.label : null;
  return (
    <div className={css.sectionFeatures}>
      <h2>
        <FormattedMessage
          id="ListingPage.bikeSizeType"
          values={{ bikeSize: optionLabel.toLowerCase() }}
        />
      </h2>
    </div>
  );
};

export default SectionBikeSizeMaybe;
