// components/ErrorBoundary.tsx
"use client"; // This component needs to be a Client Component

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button'; // Assuming your button component

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode; // Custom fallback UI
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary Component
 * Catches JavaScript errors anywhere in its child component tree, logs those errors,
 * and displays a fallback UI instead of the component tree that crashed.
 * Learn more: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // This static method is called after an error is thrown by a descendant component.
  // It receives the error that was thrown as a parameter and should return a value to update state.
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  // This method is called after an error has been thrown.
  // It receives two parameters: error (the error that was thrown) and info (an object with a componentStack property).
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // Optionally send error to a logging service like Sentry, DataDog etc.
    // logErrorToMyService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    // You might want to re-fetch data or navigate away
    // For simplicity, we just reset the error state here.
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-card text-card-foreground rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-destructive mb-4">
            Oops! Something went wrong.
          </h2>
          <p className="text-muted-foreground mb-6">
            We are sorry, but there was an unexpected error loading this section.
            Please try again later.
          </p>
          {this.state.error && (
            <details className="text-sm text-muted-foreground mb-6 max-h-40 overflow-auto border border-border p-3 rounded-md">
              <summary className="cursor-pointer text-foreground font-semibold">Error Details</summary>
              <pre className="whitespace-pre-wrap break-all mt-2 text-xs">
                {this.state.error.message}
                {this.state.error.stack && `\n\nStack:\n${this.state.error.stack}`}
              </pre>
            </details>
          )}
          <Button onClick={this.handleRetry}>
            Try Reloading Section
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;