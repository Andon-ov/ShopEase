import './ColorFilter.css'
import React from 'react';

function ColorFilter({colors, selectedColor, onColorChange}) {
    return (<div className='color__filter'>
            <h3>Color:</h3>
            {colors.map((color) => (<label className="color__label" key={color} htmlFor={`color__${color}`}>
                    <input
                        className="color__input"
                        type='radio'
                        id={`color-${color}`}
                        name='color'
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => onColorChange(color)}
                        aria-label={`Select ${color} color`}
                    />
                    {color}
                </label>))}
        </div>);
}

export default ColorFilter;
