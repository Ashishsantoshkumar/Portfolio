import React from "react";

export default function ErrorBoundary({ children }) {
  const [error, setError] = React.useState(null);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Something went wrong</h1>
          <pre className="text-sm text-muted-foreground whitespace-pre-wrap break-words">{String(error)}</pre>
        </div>
      </div>
    );
  }

  return (
    <React.Suspense fallback={null}>
      <ErrorCatcher onError={setError}>{children}</ErrorCatcher>
    </React.Suspense>
  );
}

class ErrorCatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    if (this.props.onError) this.props.onError(error);
  }

  render() {
    return this.props.children;
  }
}

