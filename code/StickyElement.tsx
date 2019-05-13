import * as React from "react"
import { Frame, transform, useTransform } from "framer"
import { NotConnected } from "./NotConnected"
import { ScrollContext } from "./StickyScroll"

export function StickyElement(props) {
    const { children, ...restProps } = props
    const { contentOffsetY, getStickyRange } = React.useContext(ScrollContext)
    const { yStick, yRelease } = getStickyRange(props.id)

    const convertScrollRange = transform(
        [0, -yStick, -yRelease],
        [0, 0, yRelease - yStick]
    )

    const y = useTransform(contentOffsetY, convertScrollRange)

    if (React.Children.count(children) === 0) {
        return <NotConnected prompt="Connect to something sticky" />
    } else {
        return (
            <Frame
                {...restProps}
                background={null}
                y={y}
                width="100%"
                height="100%"
            >
                {children}
            </Frame>
        )
    }
}
