import * as React from "react";
import {
  PropertyControls,
  ControlType,
  Scroll,
  FrameProperties,
  FramerEvent
} from "framer";
import NotConnected from "./NotConnected";
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
    return (
      componentIdentifier &&
      componentIdentifier.includes("StickyElement") &&
      element.props.top != null // Ignore if element is not fixed to top
    );
  }

  static getStickyFrames(elements = []) {
    return elements
      .filter(element => StickyScroll.isSticky(element))
      .sort((a, b) => a.props.top - b.props.top);
  }

  stickyPositionLookup: any;

  // Calculate and store sticky positions
  setStickyPositionsLookup = () => {
    const scrollContentChildren = this.props.children[0].props.children;
    const stickyFrames = StickyScroll.getStickyFrames(scrollContentChildren);
    const stickyPositionLookup = [];

    if (stickyFrames.length > 0) {
      let i;
      for (i = 0; i < stickyFrames.length - 1; i++) {
        stickyPositionLookup.push({
          id: stickyFrames[i].props.id,
          yStick: stickyFrames[i].props.top,
          yRelease: stickyFrames[i + 1].props.top - stickyFrames[i].props.height
        });
      }

      stickyPositionLookup.push({
        id: stickyFrames[i].props.id,
        yStick: stickyFrames[i].props.top,
        yRelease: Number.POSITIVE_INFINITY
      });
    }
    console.log(stickyPositionLookup);
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
    // console.log("registerLayer:", layerConfigs);
    this.layerConfigs.push(layerConfigs);
  };

  unregisterLayer = layerConfigs => {
    this.layerConfigs = this.layerConfigs.filter(c => c !== layerConfigs);
  };

  layerConfigs = [];

  componentDidMount() {
    const { children } = this.props;
    if (React.Children.count(children) > 0) {
      this.stickyPositionLookup = this.setStickyPositionsLookup();
    }
  }

  render() {
    const { children } = this.props;

    if (React.Children.count(children) === 0) {
      return <NotConnected prompt="Connect to scrollable content" />;
    } else {
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
