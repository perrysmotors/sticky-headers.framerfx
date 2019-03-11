import * as React from "react";
import {
  PropertyControls,
  ControlType,
  Scroll,
  FrameProperties,
  FramerEvent
} from "framer";
import { NotConnected } from "./NotConnected";
import { RegisterContext } from "./RegisterContext";

interface ScrollProps extends FrameProperties {
  offset: number;
  onMove: (event: FramerEvent) => void;
}

export class StickyScroll extends React.Component<ScrollProps> {
  static defaultProps = {
    offset: 0,
    direction: "vertical",
    overflow: "hidden",
    onMove: () => null
  };

  static propertyControls: PropertyControls = {
    offset: {
      type: ControlType.Number,
      title: "Offset",
      min: 0,
      max: 500
    }
  };

  static isSticky(element) {
    const { componentIdentifier } = element.props;
    return componentIdentifier && componentIdentifier.includes("StickyElement");
  }

  // Return an array of the StickyElements sorted top to bottom
  static getStickyElements(parent) {
    const { children } = parent.props;
    return children
      .filter(element => StickyScroll.isSticky(element))
      .sort(
        (a, b) => StickyScroll.getY(a, parent) - StickyScroll.getY(b, parent)
      );
  }

  // Get y position in parent
  static getY(element, parent) {
    let { top, bottom, centerY, height } = element.props;

    if (top) {
      return top;
    } else if (bottom) {
      return parent.props.height - bottom - height;
    } else {
      return Math.round(
        (parseFloat(centerY) / 100) * parent.props.height - height / 2
      );
    }
  }

  layerConfigs = [];
  stickyPositionLookup = [];

  // Calculate and store sticky positions
  setStickyPositionsLookup = () => {
    const parent = this.props.children[0];
    const stickyFrames = StickyScroll.getStickyElements(parent);
    const stickyPositionLookup = [];

    if (stickyFrames.length > 0) {
      let i;
      for (i = 0; i < stickyFrames.length - 1; i++) {
        stickyPositionLookup.push({
          id: stickyFrames[i].props.id,
          yStick: StickyScroll.getY(stickyFrames[i], parent),
          yRelease:
            StickyScroll.getY(stickyFrames[i + 1], parent) -
            stickyFrames[i].props.height
        });
      }

      stickyPositionLookup.push({
        id: stickyFrames[i].props.id,
        yStick: StickyScroll.getY(stickyFrames[i], parent),
        yRelease: Number.POSITIVE_INFINITY
      });
    }

    return stickyPositionLookup;
  };

  handleScroll = event => {
    const offsetScrollY = this.props.offset - event.y;

    this.stickyPositionLookup.forEach(({ id, yStick, yRelease }) => {
      const layerConfig = this.layerConfigs.find(found => found.id === id);

      if (offsetScrollY >= yRelease) {
        layerConfig.top.set(yRelease - yStick);
      } else if (offsetScrollY >= yStick) {
        layerConfig.top.set(offsetScrollY - yStick);
      } else {
        layerConfig.top.set(0);
      }
    });

    // Run any onMove function passed from props:
    const { onMove } = this.props;
    onMove && onMove(event);
  };

  registerLayer = layerConfigs => {
    this.layerConfigs.push(layerConfigs);
  };

  unregisterLayer = layerConfigs => {
    this.layerConfigs = this.layerConfigs.filter(c => c !== layerConfigs);
  };

  render() {
    const { children } = this.props;

    if (React.Children.count(children) === 0) {
      return <NotConnected prompt="Connect to scrollable content" />;
    } else {
      this.stickyPositionLookup = this.setStickyPositionsLookup();
      return (
        <RegisterContext.Provider
          value={{
            registerLayer: this.registerLayer,
            unregisterLayer: this.unregisterLayer
          }}
        >
          <Scroll {...this.props} onMove={this.handleScroll}>
            {children}
          </Scroll>
        </RegisterContext.Provider>
      );
    }
  }
}
