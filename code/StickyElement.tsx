import * as React from "react"
import { Frame, useTransform, transform, RenderTarget } from "framer"
import { NotConnected } from "./NotConnected"
import { ScrollContext } from "./StickyScroll"

export function StickyElement(props) {
    const { children, ...restProps } = props

    let y
    if (RenderTarget.current() === RenderTarget.preview) {
        const { contentOffsetY, getStickyRange } = React.useContext(
            ScrollContext
        )

        const { yStick, yRelease } = getStickyRange(props.id)

        const convertScrollRange = transform(
            [0, -yStick, -yRelease],
            [0, 0, yRelease - yStick]
        )

        y = useTransform(contentOffsetY, convertScrollRange)
    }

    if (React.Children.count(children) === 0) {
        return <NotConnected prompt="Connect to something sticky" />
    } else {
        return (
            <Frame {...restProps} background={null} y={y}>
                {children}
            </Frame>
        )
    }
}
