import { ChevronDown } from 'components/Icons/ChevronDown';
import { Cross } from 'components/Icons/Cross';
import ShowFilters from 'components/pages/search/components/FilterBar/ShowFilters';
import React from 'react';
import styled from 'styled-components';
import { colorPalette, sizes } from 'stylesheet';
import { groupBy } from 'lodash';
import { FilterState, Option } from '../../../../../modules/filters/interface';
import { countFiltersSelected } from '../../../../../modules/filters/utils';

interface Props {
  name: React.ReactElement;
  filters?: string[];
  subFilters?: string[];
  filtersState: FilterState[];
  expanded: boolean;
  onClick: () => void;
  setFilterSelectedOptions: (filterId: string, options: Option[]) => void;
}

const BACKGROUND_EXPANDED = '#fefefe';

const FilterField: React.FC<Props> = ({
  name,
  expanded,
  onClick,
  filters,
  subFilters,
  filtersState,
  setFilterSelectedOptions,
}) => {
  const subFiltersToDisplay = groupBy(
    filtersState.filter(({ id }) => subFilters?.some(subFilter => new RegExp(subFilter).test(id))),
    'category',
  );
  const filtersToDisplay = filtersState.filter(({ id }) => filters?.includes(id));

  const numberSelected = countFiltersSelected(filtersState, filters, subFilters);

  return (
    <div>
      <Container
        className={`inline-flex items-center pl-2 pr-2 ${expanded ? 'shadow-inner' : ''}`}
        style={{ background: expanded ? BACKGROUND_EXPANDED : 'white' }}
        onClick={onClick}
      >
        {numberSelected > 0 && (
          <div className="bg-primary1 text-white rounded-full h-6 w-6 flex items-center justify-center font-bold">
            {numberSelected}
          </div>
        )}
        <div className="ml-4 mr-4">{name}</div>
        <ChevronDown
          className={`transform ${expanded ? '' : '-rotate-90'} text-primary1`}
          size={30}
        />
      </Container>
      <BackgroundFields style={{ display: expanded ? 'block' : 'none' }} onClick={onClick} />
      <ContainerFields
        className="shadow-inner"
        style={{ display: expanded ? 'block' : 'none', background: BACKGROUND_EXPANDED }}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="font-bold text-4xl">{name}</div>
          <div className="cursor-pointer" onClick={onClick}>
            <Cross size={30} />
          </div>
        </div>
        <div className="mb-4">
          {filtersToDisplay.map(filterState => (
            <ShowFilters
              key={filterState.id}
              item={filterState}
              setFilterSelectedOptions={setFilterSelectedOptions}
              hideLabel
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(subFiltersToDisplay).map(key => {
            return (
              <div className={'m-1'} key={key}>
                {key !== 'undefined' && <div className={'font-bold mb-2'}>{key}</div>}
                {subFiltersToDisplay[key].map(filterState => (
                  <div className={'my-1'} key={filterState.id}>
                    <ShowFilters
                      item={filterState}
                      setFilterSelectedOptions={setFilterSelectedOptions}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </ContainerFields>
    </div>
  );
};

const ContainerFields = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  background: ${colorPalette.white};
  width: 100%;
  z-index: 10;
  padding: 32px;
`;

const BackgroundFields = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: ${sizes.headerAndFilterbar}px;
  background-color: ${colorPalette.greyDarkColored};
  opacity: 0.4;
  z-index: 9;
`;

const Container = styled.div`
  height: 55px;
  border-left: 1px solid ${colorPalette.greySoft.DEFAULT};
  cursor: pointer;
`;

export default FilterField;
