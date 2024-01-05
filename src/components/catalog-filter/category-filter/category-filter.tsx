import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEBOUNCE_TIMEOUT } from '../../../consts/app';
import { EvtChange } from '../../../types/app';
import { getObjectKeys } from '../../../utiils/types';
import queryString from 'query-string';
import { useDebouncedCallback } from 'use-debounce';
import useCheckboxFilter from '../../../hooks/use-checkbox-filter';

const PARAM_NAME = 'category';

const categoryFilter = {
  photo: {
    enName: 'photo-camera',
    ruName: 'Фотокамера',
    checked: false
  },
  video: {
    enName: 'video-camera',
    ruName: 'Видеокамера',
    checked: false
  }
};

function CategoryFilter() {
  const {filter, handleFilterChange} = useCheckboxFilter(categoryFilter, PARAM_NAME);
  // const [searchParams, setSearchParams] = useSearchParams();
  //
  // const [category, setCategory] = useState(() => {
  //   const initialState = structuredClone(categoryFilter) as Category;
  //   const categories = searchParams.getAll(PARAM_NAME);
  //   const keys = getObjectKeys(initialState);
  //
  //   keys.forEach((key) => {
  //     if (categories.includes(key)) {
  //       initialState[key].checked = true;
  //     }
  //   });
  //
  //   return initialState;
  // });
  //
  // const debounced = useDebouncedCallback(
  //   () => {
  //     setSearchParams((prev) => {
  //       const prevQuery = queryString.parse(prev.toString());
  //       const categoryQuery = getObjectKeys(category)
  //         .reduce<{ [PARAM_NAME]: CategoryKeys[] }>((obj, key) =>
  //           category[key].checked ? { [PARAM_NAME]: [...obj.category, key] } : obj, { [PARAM_NAME]: [] });
  //
  //       return { ...prevQuery, ...categoryQuery };
  //     });
  //   },
  //   DEBOUNCE_TIMEOUT
  // );
  //
  // const handleFilterChange = (evt: EvtChange, key: CategoryKeys) => {
  //   setCategory((prevState) => {
  //     const currentCategory = structuredClone(prevState) as typeof prevState;
  //
  //     currentCategory[key].checked = evt.target.checked;
  //
  //     debounced();
  //
  //     return currentCategory;
  //   });
  // };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      {getObjectKeys(filter).map((key) => (
        <div key={filter[key].ruName}
          className="custom-checkbox catalog-filter__item"
        >
          <label>
            <input
              onChange={(evt) => handleFilterChange(evt, key)}
              type="checkbox"
              name={filter[key].enName}
              checked={filter[key].checked}
            />
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">
              {filter[key].ruName}
            </span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default CategoryFilter;