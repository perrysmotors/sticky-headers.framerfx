# Sticky Headers

_Inspired by 'Sticky' by Ismael Martínez and 'Parallax' by Linton Ye_

This package lets you add headers that stick to the top of the screen when you scroll.

[View the code on Github](https://github.com/perrysmotors/sticky-headers.framerfx)

## Features:

- **New in version 2.5** – Place StickyElements anywhere in the scroll content including inside stacks and frames
- Only supports vertical scrolling

## Usage

After you install this package you will see two components: `StickyScroll` and `StickyElement`.

`StickyScroll` works like a native Scroll component.
`StickyElement` should be placed inside your scroll content and connected to another canvas element. This will make the connected content appear inside the scroll content and stick when you scroll past the top of the scroll component.

You can use multiple StickyElements in your scroll content. Each StickyElement reaching the top **pushes** the StickyElement above it up and off the top of scroll component.

### Property Controls for `StickyScroll` Component

| Property | Type | Description | Default |
| --- | --- | --- | --- |
| Offset | `number` | Makes elements stick at a set distance below the top of the scroll component | `0` |
| Lock | `boolean` | Controls whether the Scroll should ignore dragging in its opposite direction while scrolling | `1 Axis` |
| Drag scroll | `boolean` | Controls whether the Scroll should respond to drag interactions | `On` |
| Wheel scroll | `boolean` | Controls whether the Scroll should respond to scroll interactions | `On` |
| Fill | `color` | Show or hide, and set the fill color | `Hide` |

![Screen Recording (Framer X)](https://user-images.githubusercontent.com/12557727/54369321-a3808800-466d-11e9-8b50-4f245ac8075b.gif)

## How to use with overrides

You can do stuff based on the scroll position by adding an override to the your StickyScroll component that sets an `onScroll` event handler:

```
import { Override } from "framer"

// Apply this override to your scroll component
export const StickyScroll: Override = () => {
  return {
    onScroll: info => {
      console.log(info.point.y)
    },
  }
}
```

... or you can track changes to the scroll position using a `MotionValue`. Here's how you could use this approach to add a parallax effect:

```
import { Override, motionValue, useTransform } from "framer"

const contentOffsetY = motionValue(0)

// Apply this override to your scroll component
export function StickyScroll(): Override {
    return { contentOffsetY: contentOffsetY }
}

// Apply this override to your parallax layer
export function ParallaxLayer(): Override {
    const y = useTransform(contentOffsetY, [0, -100], [0, 50], {
        clamp: false,
    })
    return {
        y: y,
    }
}
```

## Changelog

- **2.7.0** — Minor refactor 
- **2.6.0** — Fix issue where StickyElements break when overriding `contentOffsetY` using a number.
- **2.5.0** — Rewrite to allow StickyElements to be placed anywhere in scroll content including inside stacks.
- **2.4.0** — Add standard scroll component property controls and support for responsive StickyElements.
- **2.3.0** — Fix bug where StickyElement would not stick if positioned at top of scroll content.
- **2.2.0** — Add support for responsive scroll content width.
- **2.0.0** — Complete rewrite to use new API.
- **1.14.0** — Update artwork
- **1.13.0** — Bug fix
- **1.12.0** — Bug fix
- **1.11.0** — Fix for StickyElements that are not pinned to the top
- **1.9.0** — Remove left over debugging code
- **1.8.0** — Patch to avoid console errors
- **1.7.0** — Complete rewrite to improve performance
- **1.5.0** — Initial release