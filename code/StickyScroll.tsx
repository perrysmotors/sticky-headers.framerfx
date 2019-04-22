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
    // Calculate and store sticky positions
    function setStickyPositionsLookup() {
        const { offset } = props
        const parent = props.children[0]
        const stickyFrames = getStickyElements(parent)

        const stickyPositionLookup = []

        if (stickyFrames.length > 0) {
            let i
            for (i = 0; i < stickyFrames.length - 1; i++) {
                stickyPositionLookup.push({
                    id: stickyFrames[i].props.id,
                    yStick: getY(stickyFrames[i]) - offset,
                    yRelease:
                        getY(stickyFrames[i + 1]) -
                        stickyFrames[i].props.constraints.height -
                        offset,
                })
            }

            stickyPositionLookup.push({
                id: stickyFrames[i].props.id,
                yStick: getY(stickyFrames[i]) - offset,
                yRelease:
                    parent.props.constraints.height -
                    stickyFrames[i].props.constraints.height -
                    offset,
            })
        }

        return stickyPositionLookup
    }

    const { children, contentOffsetY = motionValue(0), ...restProps } = props

    if (React.Children.count(children) === 0) {
        return <NotConnected prompt="Connect to scrollable content" />
    } else {
        const stickyPositionLookup = setStickyPositionsLookup()

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
                <Scroll {...restProps} contentOffsetY={contentOffsetY}>
                    {children}
                </Scroll>
            </ScrollContext.Provider>
        )
    }
}

StickyScroll.defaultProps = {
    offset: 0,
    direction: "vertical",
    overflow: "hidden",
    wheelEnabled: true,
    onScroll: () => null,
}

addPropertyControls(StickyScroll, {
    offset: {
        type: ControlType.Number,
        title: "Offset",
        min: 0,
        max: 500,
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
        .sort((a, b) => getY(a) - getY(b))
}

// Get y position in parent
function getY(element) {
    let { top, bottom, centerY, height, parentSize } = element.props.constraints

    if (!parentSize) return // On the canvas parentSize is sometimes null?

    if (top) {
        return top
    } else if (bottom) {
        return parentSize.height - bottom - height
    } else {
        return Math.round(
            (parseFloat(centerY) / 100) * parentSize.height - height / 2
        )
    }
}
