import * as React from "react"
import { addPropertyControls, ControlType, Scroll, FramerEvent } from "framer"
import { NotConnected } from "./NotConnected"
// import { RegisterContext } from "./RegisterContext"

let layerConfigs = []

const registerLayer = config => {
    layerConfigs.push(config)
}

const unregisterLayer = config => {
    layerConfigs = layerConfigs.filter(c => c !== config)
}

export const RegisterContext = React.createContext({
    registerLayer: registerLayer,
    unregisterLayer: unregisterLayer,
})

export function StickyScroll(props) {
    function isSticky(element) {
        const { componentIdentifier } = element.props
        return (
            componentIdentifier && componentIdentifier.includes("StickyElement")
        )
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
        let {
            top,
            bottom,
            centerY,
            height,
            parentSize,
        } = element.props.constraints

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

    // Calculate and store sticky positions
    const setStickyPositionsLookup = () => {
        const parent = props.children[0]
        const stickyFrames = getStickyElements(parent)
        const stickyPositionLookup = []

        if (stickyFrames.length > 0) {
            let i
            for (i = 0; i < stickyFrames.length - 1; i++) {
                stickyPositionLookup.push({
                    id: stickyFrames[i].props.id,
                    yStick: getY(stickyFrames[i]),
                    yRelease:
                        getY(stickyFrames[i + 1]) -
                        stickyFrames[i].props.constraints.height,
                })
            }

            stickyPositionLookup.push({
                id: stickyFrames[i].props.id,
                yStick: getY(stickyFrames[i]),
                yRelease: Number.POSITIVE_INFINITY,
            })
        }

        return stickyPositionLookup
    }

    let stickyPositionLookup = []

    const handleScroll = pos => {
        const offsetScrollY = props.offset - pos.y

        stickyPositionLookup.forEach(({ id, yStick, yRelease }) => {
            const layerConfig = layerConfigs.find(found => found.id === id)

            if (offsetScrollY >= yRelease) {
                layerConfig.top.set(yRelease - yStick)
            } else if (offsetScrollY >= yStick) {
                layerConfig.top.set(offsetScrollY - yStick)
            } else {
                layerConfig.top.set(0)
            }
        })

        // Run any onScroll function passed from props:
        const { onScroll } = props
        onScroll && onScroll(pos)
    }

    const { children, ...restProps } = props

    if (React.Children.count(children) === 0) {
        return <NotConnected prompt="Connect to scrollable content" />
    } else {
        stickyPositionLookup = setStickyPositionsLookup()
        return (
            <Scroll {...restProps} onScroll={handleScroll}>
                {children}
            </Scroll>
        )
    }
}

StickyScroll.defaultProps = {
    offset: 0,
    direction: "vertical",
    overflow: "hidden",
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
