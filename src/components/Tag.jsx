import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        HTML: { backgroundColor: "rgb(31, 255, 139)" },
        CSS: { backgroundColor: "rgb(238, 181, 66)" },
        JavaScript: { backgroundColor: "rgb(147, 80, 80)" },
        React: { backgroundColor: "rgb(255, 6, 6)" },
        default: { backgroundColor: "rgb(122, 211, 246)" },
    };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
