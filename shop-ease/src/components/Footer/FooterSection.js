import React from 'react';

function FooterSection({ title, content }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

export default FooterSection;