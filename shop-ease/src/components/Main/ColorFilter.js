// function ColorFilter({ colors, selectedColor, onColorChange }) {
//     return (
//         <div className='products__color-filter'>
//             <h3>Color:</h3>
//             {colors.map((color) => (
//                 <label key={color}>
//                     <input
//                         type='radio'
//                         name='color'
//                         value={color}
//                         checked={selectedColor === color}
//                         onChange={() => onColorChange(color)}
//                     />
//                     {color}
//                 </label>
//             ))}
//         </div>
//     );
// }

// export default ColorFilter;

import React from 'react';

function ColorFilter({ colors, selectedColor, onColorChange }) {
  return (
    <div className='color-filter'>
      <h3>Color:</h3>
      {colors.map((color) => (
        <label key={color}>
          <input
            type='radio'
            name='color'
            value={color}
            checked={selectedColor === color}
            onChange={() => onColorChange(color)} // Call the handler function with the selected color
          />
          {color}
        </label>
      ))}
    </div>
  );
}

export default ColorFilter;
