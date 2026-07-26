import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application Error:", error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-orange-50 px-6 text-center">

          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Oops!
          </h1>

          <h2 className="text-2xl font-semibold mb-4">
            Something went wrong.
          </h2>

          <p className="text-gray-600 max-w-lg mb-8">
            We encountered an unexpected error while loading this page.
            Please refresh the page or try again later.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg"
          >
            Refresh Page
          </button>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;