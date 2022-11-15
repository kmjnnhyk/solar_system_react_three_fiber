import React from 'react';
import { useGridHelperContext } from '../hooks/GridHelperContext';

export default function GridHelperController() {
  const LIST = ['solarSystem', 'sunMesh', 'earthOrbit', 'earthMesh', 'moonMesh'];
  const { setSelectedOptions } = useGridHelperContext();
  const handleChange = (e) => {
    setSelectedOptions((curr) =>
      curr.map((obj) => {
        if (obj.name === e.target.value) return { ...obj, isClicked: !obj.isClicked };
        return obj;
      })
    );
  };
  return (
    <div className="grid-controller__container">
      {LIST.map((el, id) => (
        <div className="grid-controller__item" key={id}>
          <input
            className="grid-controller__checkbox"
            id={`${id}`}
            type="checkbox"
            value={el}
            onChange={handleChange}
          />
          <label className="grid-controller__text" htmlFor={`#${id}`}>
            {el}
          </label>
        </div>
      ))}
    </div>
  );
}
