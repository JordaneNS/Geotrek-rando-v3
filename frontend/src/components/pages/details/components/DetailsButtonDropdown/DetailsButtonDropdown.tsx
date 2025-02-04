import Dropdown, { Option } from 'react-dropdown';

interface DetailsButtonDropdownProps {
  options: Array<OptionExtended>;
  children: JSX.Element;
}

interface OptionExtended extends Option {
  onClick?: () => void;
}

const onChange = (v: OptionExtended) => {
  const link = document.createElement('a');
  link.setAttribute('href', v.value);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const DetailsButtonDropdown: React.FC<DetailsButtonDropdownProps> = ({
  options,
  children,
}) => {
  return (
    <Dropdown
      className="h-12 w-12 rounded-full shadow-lg bg-white"
      options={options.filter(o => o.value !== undefined).map(getOptionStyled)}
      controlClassName="w-full h-full cursor-pointer grid place-items-center "
      menuClassName="bg-white text-greyDarkColored rounded-lg shadow-sm text-P2 overflow-hidden absolute py-2 -ml-8 menu-download"
      placeholderClassName="hidden"
      arrowOpen={children}
      arrowClosed={children}
      onChange={onChange}
    />
  );
};

const getOptionStyled = (option: Option): Option => {
  return {
    ...option,
    className: 'hover:bg-greySoft-light focus:bg-greySoft cursor-pointer px-5 py-2 leading-3',
  };
};
