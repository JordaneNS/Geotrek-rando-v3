import { Calendar } from 'components/Icons/Calendar';
import React, { ChangeEvent, FunctionComponent, KeyboardEvent } from 'react';
import { useIntl } from 'react-intl';
import { colorPalette } from 'stylesheet';
import CustomizedInputDate from './CustomizedInputDate.style';

interface InputDateWithMagnifierProps {
  value: string | null;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputDateWithMagnifier: FunctionComponent<InputDateWithMagnifierProps> = ({
  onChange,
  value,
  placeholder
}) => {
  const intl = useIntl();

  const onInputEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    // if (event.key === 'Enter') {
    //   onButtonClick();
    // }
  };

  return (
    <div className="flex flex-row w-full desktop:w-auto">

      <CustomizedInputDate
        onChange={onChange}
        value={value !== null ? value : ''}
        type="text"
        onKeyPress={onInputEnterPress}
        onFocus={(e) => {e.target.type = "date"; e.target.showPicker()}}
        onBlur={(e) => {e.target.type = "text"}}
        placeholder={placeholder}
      />
      <div
        className="w-10 h-10 desktop:h-12 desktop:w-12 bg-primary1 rounded-r-md
        flex justify-center items-center
        active:bg-primary1-light
        "
      >
        <div>
          <Calendar size={24} color={colorPalette.primary2} />
        </div>
      </div>
    </div>
  );
};

export default InputDateWithMagnifier;
