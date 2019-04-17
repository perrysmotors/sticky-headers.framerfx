import * as React from "react"
import { Frame, Animatable } from "framer"
import { NotConnected } from "./NotConnected"
import { RegisterContext } from "./StickyScroll"

export function StickyElement(props) {
    const { children, ...restProps } = props
    const { registerLayer, unregisterLayer } = React.useContext(RegisterContext)

    const layerConfig = {
        top: Animatable(0),
        id: props.id,
    }

    if (registerLayer) {
        React.useEffect(() => {
            registerLayer(layerConfig)

            return function cleanUp() {
                unregisterLayer(layerConfig)
            }
        }, [])
    }

    if (React.Children.count(children) === 0) {
        return <NotConnected prompt="Connect to something sticky" />
    } else {
        return (
            <Frame
                {...restProps}
                background={null}
                top={layerConfig.top}
                registerLayer={registerLayer}
                unregisterLayer={unregisterLayer}
            >
                {children}
            </Frame>
        )
    }
}

// interface RegistrarProps {
//     registerLayer: (layerConfig) => any
//     unregisterLayer: (layerConfig) => any
// }

// function StickyElementRegistrar(props) {
//     const layerConfig = {
//         top: Animatable(0),
//         id: null,
//     }
//     const { registerLayer, unregisterLayer } = props
//     if (registerLayer) {
//         React.useEffect(() => {
//             layerConfig.id = props.id
//             registerLayer(layerConfig)

//             return function cleanUp() {
//                 unregisterLayer(layerConfig)
//             }
//         }, [])
//     }
//     return (
//         <Frame {...props} background={null} top={layerConfig.top}>
//             {props.children}
//         </Frame>
//     )
// }

// export function StickyElement(props) {
//     const { children, ...restProps } = props
//     const { registerLayer, unregisterLayer } = React.useContext(RegisterContext)

//     if (React.Children.count(children) === 0) {
//         return <NotConnected prompt="Connect to something sticky" />
//     } else {
//         return (
//             <StickyElementRegistrar
//                 {...restProps}
//                 registerLayer={registerLayer}
//                 unregisterLayer={unregisterLayer}
//             >
//                 {children}
//             </StickyElementRegistrar>
//         )
//     }
// }
