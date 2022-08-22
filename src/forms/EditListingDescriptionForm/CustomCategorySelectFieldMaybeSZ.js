import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.module.css';

const CustomCategorySelectFieldMaybeSZ = props => {
  const { name, id, bikeSizes, intl } = props;
  const bikeSizeLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.description',
  });
  const bikeSizePlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.descriptionPlaceholder',
  });
  const bikeSizeRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.descriptionRequired',
    })
  );

  return bikeSizes ? (

    <FieldSelect
      className={css.bikeSize}
      name={name}
      id={id}
      label={bikeSizeLabel}
      validate={bikeSizeRequired}
   >
      <option disabled value="">
        {bikeSizePlaceholder}
      </option>
      {bikeSizes.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomCategorySelectFieldMaybeSZ;
