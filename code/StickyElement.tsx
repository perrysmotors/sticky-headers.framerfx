import * as React from "react"
import { Frame, useTransform } from "framer"
import { NotConnected } from "./NotConnected"
import { ScrollContext } from "./StickyScroll"

export function StickyElement(props) {
    const { children, ...restProps } = props
    const { contentOffsetY, origin, positions, dispatch } = React.useContext(
        ScrollContext
    )

    const responsiveChildren = React.Children.map(children, (child) =>
        React.cloneElement(child, { width: "100%" })
    )

    const [top, setTop] = React.useState(0)

    // Get the y position of the element,
    // store it in state,
    // and send it to the context provider where it will be added to an ordered array of positions
    const ref = React.useCallback((node) => {
        if (node !== null) {
            const { y } = node.getBoundingClientRect()
            setTop(y)
            dispatch({ payload: y })
        }
    }, [])

    // Find where this element is in the positions list so that we can get the position of the next element
    const index = positions.indexOf(top)
    const isLast = index === positions.length - 1

    const yStick = top - origin

    let yRelease
    if (index === -1) {
        // Not found
        yRelease = yStick
    } else if (isLast) {
        yRelease = yStick * 2
    } else {
        yRelease = positions[index + 1] - props.height - origin
    }

    const y = useTransform(
        contentOffsetY,
        [0, -yStick, -yRelease],
        [0, 0, yRelease - yStick],
        { clamp: !isLast }
    )

    if (React.Children.count(children) === 0) {
        return <NotConnected prompt="Connect to something sticky" />
    } else {
        return (
            <Frame
                {...restProps}
                ref={ref}
                background={null}
                y={y}
                style={{ zIndex: 999 }}
                width="100%"
                height="100%"
            >
                {responsiveChildren}
            </Frame>
        )
    }
}
