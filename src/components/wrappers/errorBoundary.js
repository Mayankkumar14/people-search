import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Log Component error", error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <h3>Error encountered while rendering the component</h3>;
    }
    return this.props.children;
  }
}

const Fallback = () => {
  return (
    <div className="fallback">
      <h3>Something went wrong...!</h3>
      <h6>Please try again after some time.</h6>
    </div>
  );
};

export { ErrorBoundary, Fallback };
