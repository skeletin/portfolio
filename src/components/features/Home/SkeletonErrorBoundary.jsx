import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function SkeletonFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-center text-gray-400">
        <p className="text-sm">Unable to load 3D model</p>
        <button
          onClick={resetErrorBoundary}
          className="mt-2 text-xs text-gray-500 hover:text-gray-300 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default function SkeletonErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={SkeletonFallback}>
      {children}
    </ErrorBoundary>
  );
}
