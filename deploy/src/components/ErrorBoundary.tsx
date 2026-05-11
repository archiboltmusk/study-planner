import { Component, ReactNode, ErrorInfo } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary] Uncaught error:", error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
          <div className="max-w-md w-full space-y-6 text-center">
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 space-y-4">
              <AlertTriangle className="w-10 h-10 text-destructive mx-auto" />
              <div>
                <h2 className="text-lg font-mono font-bold text-foreground">Something went wrong</h2>
                <p className="text-sm font-mono text-muted-foreground mt-1">
                  The app hit an unexpected error. Your data is safe in storage.
                </p>
              </div>
              {this.state.error && (
                <pre className="text-left text-[11px] font-mono text-destructive/80 bg-background border border-border rounded-lg p-3 overflow-auto max-h-32">
                  {this.state.error.message}
                </pre>
              )}
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-mono rounded-lg hover:opacity-90 transition-opacity"
              >
                <RefreshCw className="w-4 h-4" />
                Try again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border text-sm font-mono rounded-lg hover:bg-muted transition-colors"
              >
                Reload page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
