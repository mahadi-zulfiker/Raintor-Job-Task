"use client";

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
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