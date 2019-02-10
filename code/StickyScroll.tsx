import * as React from "react";
import {
  PropertyControls,
  ControlType,
  Scroll,
  FrameProperties,
  FramerEvent
} from "framer";

const style: React.CSSProperties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#8855FF",
  background: "rgba(136, 85, 255, 0.1)",
  overflow: "hidden"
};

interface Props extends FrameProperties {
  offset: number;
  onMove: (event: FramerEvent) => void;
}

export class StickyScroll extends React.Component<Props> {
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

  // Store the current scroll position
  state = {
    scrollY: 0
  };

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
          element: stickyFrames[i],
          yStick: stickyFrames[i].props.top,
          yRelease: stickyFrames[i + 1].props.top - stickyFrames[i].props.height
        });
      }

      stickyPositionLookup.push({
        element: stickyFrames[i],
        yStick: stickyFrames[i].props.top,
        yRelease: Number.POSITIVE_INFINITY
      });
    }
    return stickyPositionLookup;
  };

  // Clone children, if StickyElement adjust props
  cloneStickyChildren = (elements = []) =>
    elements.map(element => {
      if (StickyScroll.isSticky(element)) {
        const offsetScrollY = this.state.scrollY + this.props.offset;
        const stickyPosition = this.stickyPositionLookup.find(
          found => found.element === element
        );

        if (offsetScrollY >= stickyPosition.yRelease) {
          return this.cloneContainer(element, {
            top: stickyPosition.yRelease
          });
        } else if (offsetScrollY >= stickyPosition.yStick) {
          return this.cloneContainer(element, {
            top: offsetScrollY
          });
        } else {
          return this.cloneContainer(element);
        }
      }

      // If not a StickyElement just clone it
      else {
        return this.cloneContainer(element);
      }
    });

  // Clone a container and clone it's children
  cloneContainer = (e, props = null) =>
    React.cloneElement(e, props, this.cloneStickyChildren(e.props.children));

  // Update scrollY onMove
  handleScroll = event => {
    // Update scrollY
    this.setState({ scrollY: -event.y });
    // Run any onMove function passed from props:
    const { onMove } = this.props;
    onMove && onMove(event);
  };

  render() {
    const { children } = this.props;

    if (children.length === 0) {
      return <div style={style}>Connect to scrollable content →</div>;
    } else {
      this.stickyPositionLookup = this.setStickyPositionsLookup();
      // Clone the child element to place in a scroll containter
      let content = this.cloneContainer(children[0]);

      return (
        // Create a scroll element with an onMove function
        <Scroll {...this.props} onMove={this.handleScroll}>
          {content}
        </Scroll>
      );
    }
  }
}
