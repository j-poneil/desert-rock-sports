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
            `,
            // This adds a transparent black background, looks OK
            backgroundColor: `rgba(0,0,0,0.5)`,
            padding: '2px',
            // radius only seems to effect the beginning and end of the full portion of wrapped text when not display: 'inline-block'
            // so benefit to using it, even if I don't mess with restricting width
            borderRadius: '5px',
            // restrict the width?
            // span is an inline element by default, thus no width or height
            // unless you set it to display differently
            display: 'inline-block',
            // maxWidth: '75%',
            // width: '50%'
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
