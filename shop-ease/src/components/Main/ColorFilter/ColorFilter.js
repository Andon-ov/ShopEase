// Import CSS styles for the component
import './ColorFilter.css';

// ColorFilter component
function ColorFilter({ colors, selectedColor, onColorChange }) {
    return (
        <div className='color__filter'>
            {/* Heading for color filter */}
            <h3>Color:</h3>
            {/* Map through colors and create radio inputs */}
            {colors.map((color) => (
                <label className="color__label" key={color} htmlFor={`color__${color}`}>
                    {/* Radio input for color selection */}
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
                    {/* Display color name */}
                    {color}
                </label>
            ))}
        </div>
    );
}

export default ColorFilter;
