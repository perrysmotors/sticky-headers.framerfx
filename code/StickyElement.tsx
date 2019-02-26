import * as React from "react";
import { Frame, Animatable } from "framer";
import { NotConnected } from "./NotConnected";
import { RegisterContext } from "./RegisterContext";

interface RegistrarProps {
  registerLayer: (layerConfig) => any;
  unregisterLayer: (layerConfig) => any;
}

class StickyElementRegistrar extends React.Component<RegistrarProps> {
  layerConfig = {
    top: Animatable(0),
    id: null,
    props: null
  };
  componentDidMount() {
    const { registerLayer } = this.props;
    if (registerLayer) {
      this.layerConfig.props = this.props;
      this.layerConfig.id = this.props.id;
      registerLayer(this.layerConfig);
    }
  }
  componentWillUnmount() {
    const { unregisterLayer } = this.props;
    if (unregisterLayer) {
      unregisterLayer(this.layerConfig);
    }
  }
  render() {
    return (
      <Frame {...this.props} background={null} top={this.layerConfig.top}>
        {this.props.children}
      </Frame>
    );
  }
}

export class StickyElement extends React.Component {
  render() {
    const { children, ...restProps } = this.props;

    if (React.Children.count(children) === 0) {
      return <NotConnected prompt="Connect to something sticky" />;
    } else {
      return (
        <RegisterContext.Consumer>
          {({ registerLayer, unregisterLayer }) => {
            return (
              <StickyElementRegistrar
                {...restProps}
                registerLayer={registerLayer}
                unregisterLayer={unregisterLayer}
              >
                {children}
              </StickyElementRegistrar>
            );
          }}
        </RegisterContext.Consumer>
      );
    }
  }
}
