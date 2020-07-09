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
    origin: number
    positions: number[]
    dispatch: React.Dispatch<any>
}

export const ScrollContext = React.createContext<ScrollContext>({
    contentOffsetY: motionValue(0),
    origin: 0,
    positions: [],
    dispatch: () => null,
})

interface State {
    positions: number[]
}

// Receive the context consumer's position to build an ordered array listing the position of every StickElement
const reducer = (state: State, action) => ({
    positions: [...state.positions, action.payload].sort((a, b) => a - b),
})

const initialState: State = {
    positions: [],
}

// Take either a MotionValue or a number and always return MotionValue
function useMotionValueGenerator(value) {
    const isMotionValue = value instanceof MotionValue
    const initialValue = Number(value) === NaN ? 0 : Number(value)
    const newMotionValue = useMotionValue(initialValue)

    if (isMotionValue) {
        return value
    } else {
        return newMotionValue
    }
}

export function StickyScroll(props) {
    const {
        offset,
        fill,
        background,
        children,
        contentOffsetY,
        ...restProps
    } = props

    if (React.Children.count(children) === 0) {
        return <NotConnected prompt="Connect to scrollable content" />
    } else {
        const contentOffsetYmotionValue = useMotionValueGenerator(
            contentOffsetY
        )

        let [state, dispatch] = React.useReducer(reducer, initialState)

        // We need to know the position of the top of the scroll to calculate stick and release positions
        const [scrollTop, setScrollTop] = React.useState(0)

        const ref = React.useCallback((node) => {
            if (node !== null) {
                setScrollTop(node.getBoundingClientRect().y)
            }
        }, [])

        let value = {
            contentOffsetY: contentOffsetYmotionValue,
            origin: scrollTop + offset,
            positions: state.positions,
            dispatch: dispatch,
        }

        return (
            <ScrollContext.Provider value={value}>
                <div ref={ref} style={{ width: "100%", height: "100%" }}>
                    <Scroll
                        {...restProps}
                        background={fill ? background : null}
                        contentOffsetY={contentOffsetYmotionValue}
                        width="100%"
                        height="100%"
                    >
                        {children}
                    </Scroll>
                </div>
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
    contentOffsetY: 0,
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
