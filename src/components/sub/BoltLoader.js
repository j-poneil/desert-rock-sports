import React from "react";
import { BoltLoader } from "react-awesome-loaders";
// https://awesome-loaders.netlify.app/docs/loaders/boltloader/

//! Will deal with centering, etc in the component it is used in:
//! Wx.js

/*
Option              Desc                                Type        Default
==============================================================================
className           class attribute for loader          String	    boltloader
background          Background color of the loader	    String	    transparent
boltColor           Color of the lightning svg path	    String	    #f2de10
backgroundBlurColor Color of the lightning shadow	    String	    #fff9bc
size                Size of the logo                    String	    64px
desktopSize         Size of the logo on desktop         String	    (empty)
mobileSize          Size of the logo on mobile          String	    (empty)

backgroundBlurColor attribute in this loader is blurrified inside the NPM package. So, even if you define very dark color, it will modify it to blurred shade of that color.

size, desktopSize and mobileSize attributes are defined relative to 64px for all loaders and it doesn't mean the actual size would be 64px. It means all the sizes defined will be w.r.t 64px. If you pass 128px then the size doubles. Also, note that if one of the desktopSize and mobileSize is not defined, then it will use the size attribute. Value defined in size attribute is assigned for mobile devices and loader automatically doubles the size on desktop device.
*/

export const BoltLoaderComponent = () => {
  return (
    <>
      <BoltLoader
        className={"loaderbolt"}
        boltColor={"#6366F1"}
        backgroundBlurColor={"#E0E7FF"}
      />
    </>
  );
};