import React from "react";

// This controls the text styling on the Modal 'Title' text / sub-title / description text for each photo
// in the standard style gallery (guiding gallery, gear gallery)
function styleModalTitle(text){
    return (
        <span
        style={{
            fontSize: '23px',
            color: 'white',
            textShadow: `
                -1px -1px 0 #000,  
                1px -1px 0 #000,
                -1px 1px 0 #000,
                1px 1px 0 #000
            `
        }}
    >
        { text }
    </span>
    );
}

// This is the exported function I ultimately use in guidingGalleryPhotos.js and gearGalleryPhotos.js
// to accomplish the wrapping
export function styleModalTitles(arrOfObjects){
    const photos = arrOfObjects.map(element => {
        let titleText = element['title'];
        let wrappedTitleText = styleModalTitle(titleText);
        element['title'] = wrappedTitleText;
        return element;
    })
    return photos;
}

// =============================================================================================================
