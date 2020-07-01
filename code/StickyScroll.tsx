import * as React from "react"
import {
    addPropertyControls,
    ControlType,
    Scroll,
    MotionValue,
    motionValue,
    useMotionValue,
} from "framer"
import { NotConnected } from "./NotConnected"

interface ScrollContext {
    contentOffsetY: MotionValue
    getStickyRange: (id?: string) => any
}

export const ScrollContext = React.createContext<ScrollContext>({
    contentOffsetY: motionValue(0),
    getStickyRange: () => ({ yStick: 0, yRelease: 0 }),
})

export function StickyScroll(props) {
    const {
        offset,
        fill,
        background,
        children,
        contentOffsetY = useMotionValue(0),
        ...restProps
    } = props

    if (React.Children.count(children) === 0) {
        return <NotConnected prompt="Connect to scrollable content" />
    } else {
        const stickyPositionLookup = setStickyPositionsLookup(
            children[0],
            offset
        )

        const getStickyRange = id => {
            const lookup = stickyPositionLookup.find(found => found.id === id)
            if (lookup) {
                return lookup
            } else {
                return { yStick: 0, yRelease: 0 }
            }
        }

        return (
            <ScrollContext.Provider
                value={{
                    contentOffsetY: contentOffsetY,
                    getStickyRange: getStickyRange,
                }}
            >
                <Scroll
                    {...restProps}
                    background={fill ? background : null}
                    contentOffsetY={contentOffsetY}
                    width="100%"
                    height="100%"
                >
                    {children}
                </Scroll>
            </ScrollContext.Provider>
        )
    }
}

StickyScroll.defaultProps = {
    offset: 0,
    direction: "vertical",
    directionLock: true,
    dragEnabled: true,
    wheelEnabled: true,
    fill: false,
    background: "#fff",
    onScroll: () => null,
}

addPropertyControls(StickyScroll, {
    offset: {
        type: ControlType.Number,
        title: "Offset",
        min: 0,
    },
    directionLock: {
        type: ControlType.Boolean,
        title: "Lock",
        defaultValue: true,
        enabledTitle: "1 Axis",
        disabledTitle: "Off",
    },
    dragEnabled: {
        type: ControlType.Boolean,
        title: "Drag scroll",
        defaultValue: true,
        enabledTitle: "On",
        disabledTitle: "Off",
    },
    wheelEnabled: {
        type: ControlType.Boolean,
        title: "Wheel scroll",
        defaultValue: true,
        enabledTitle: "On",
        disabledTitle: "Off",
    },
    fill: {
        type: ControlType.Boolean,
        title: "Fill",
        defaultValue: false,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    background: {
        type: ControlType.Color,
        title: "Fill Color",
        defaultValue: "#fff",
        hidden(props) {
            return props.fill === false
        },
    },
})

function isSticky(element) {
    const { componentIdentifier } = element.props
    return componentIdentifier && componentIdentifier.includes("StickyElement")
}

// Return an array of the StickyElements sorted top to bottom
function getStickyElements(parent) {
    const { children } = parent.props
    return children
        .filter(element => isSticky(element))
        .sort((a, b) => getY(a, parent) - getY(b, parent))
}

// Get y position in parent
function getY(element, parent) {
    const { top, bottom, height } = element.props

    if (typeof top === "string") {
        // Not constrained to top or bottom.
        // In this case, top is distance to centre of element as a percentage of parent height.
        return Math.round(
            (parseFloat(top) / 100) * parent.props.height - height / 2
        )
    } else if (top != undefined) {
        // Constrained to top
        return top
    } else {
        // Constrained to bottom
        return parent.props.height - bottom - height
    }
}

// Calculate sticky positions
function setStickyPositionsLookup(parent, offset) {
    const stickyPositionLookup = []
    const stickyFrames = getStickyElements(parent)

    if (stickyFrames.length > 0) {
        let i
        for (i = 0; i < stickyFrames.length - 1; i++) {
            stickyPositionLookup.push({
                id: stickyFrames[i].props.id,
                yStick: getY(stickyFrames[i], parent) - offset,
                yRelease:
                    getY(stickyFrames[i + 1], parent) -
                    stickyFrames[i].props.height -
                    offset,
            })
        }

        stickyPositionLookup.push({
            id: stickyFrames[i].props.id,
            yStick: getY(stickyFrames[i], parent) - offset,
            yRelease:
                parent.props.height - stickyFrames[i].props.height - offset,
        })
    }

    return stickyPositionLookup
}
