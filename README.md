# Sticky Headers

_Inspired by 'Sticky' by Ismael Martínez and 'Parallax' by Linton Ye_

This package lets you add headers that stick to the top of the screen when you scroll.

[View the code on Github](https://github.com/perrysmotors/sticky-headers.framerfx)

## Usage

**This version of Sticky Headers is not compatible with Framer X22. Look out for an updated version when Framer X22 is released.**

After you install this package you will see two components: `StickyScroll` and `StickyElement`.

`StickyScroll` works like a native Scroll component.
`StickyElement` should be placed inside your scroll content and connected to another canvas element. This will make the connected content appear inside the scroll content and stick when you scroll past the top of the scroll component.

You can use multiple StickyElements in your scroll content. Each StickyElement reaching the top **pushes** the StickyElement above it up and off the top of scroll component.

## Features:

- The `offset` parameter on StickyScroll makes elements stick at a set distance below the top of the scroll component.
- Can be used together with '**Parallax**' by Linton Ye
- Only supports vertical scrolling.

![Screen Recording (Framer X)](https://user-images.githubusercontent.com/12557727/54369321-a3808800-466d-11e9-8b50-4f245ac8075b.gif)

## How to use with overrides

You can do stuff based on the scroll position by adding an override to the your StickyScroll component that sets an `onMove` event handler.

```
export const isStickyScroll: Override = () => {
  return {
    onMove: event => {
	    const scrollY = - event.y;
      Console.log(scrollY);
    }
  };
};
```

## How to use with 'Parallax' by Linton Ye

If you install 'Parallax' by Linton Ye. You can combine the behaviour you get from `StickyElement` components with more complex scroll interactions applied to other elements.

```
// Import functions from the Parallax component
import {
  scrollOverrides,
  modulate,
  speedY,
  stickyY
} from "@framer/lintonye.parallax/code/Parallax";

// Define define custom scrolling behaviors
const overrides = scrollOverrides(
  [0, 88],
  [{ id: "element1", op: modulate("opacity", [0, 1]) }],
  // etc.
);

// Set an override on the StickScroll component:
export const Scroll: Override = props => overrides.scroll(props);

// Set overrides on the elements that have custom scrolling behaviours:
export const Element1: Override = props => overrides.element1(props);
```

`StickyElement` components should not be overridden in this way.

## Changelog

- **1.17.0** — Update README
- **1.14.0** — Update artwork
- **1.13.0** — Bug fix
- **1.12.0** — Bug fix
- **1.11.0** — Fix for StickyElements that are not pinned to the top
- **1.9.0** — Remove left over debugging code
- **1.8.0** — Patch to avoid console errors
- **1.7.0** — Complete rewrite to improve performance
- **1.5.0** — Initial release
