"use client";
import { useState, useCallback, useEffect } from "react";
import Spline from '@splinetool/react-spline';

export default function SplineLoader({ 
  scene, 
  className = "", 
  style = {},
  showLoader = true,
  fallbackBg = "bg-gradient-to-br from-orange-50 via-white to-orange-100"
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 2;

  const handleLoad = useCallback(() => {
    setLoading(false);
    setLoaded(true);
    setError(false);
  }, []);

  const handleError = useCallback(() => {
    if (retryCount < maxRetries) {
      // Retry loading after a delay
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setLoading(true);
      }, 1000 * (retryCount + 1));
    } else {
      setLoading(false);
      setError(true);
    }
  }, [retryCount]);

  // Reset on scene change
  useEffect(() => {
    setLoading(true);
    setError(false);
    setLoaded(false);
    setRetryCount(0);
  }, [scene]);

  return (
    <div className={`relative w-full h-full ${className}`} style={style}>
      {/* Loading placeholder */}
      {loading && showLoader && (
        <div className={`absolute inset-0 ${fallbackBg} flex items-center justify-center z-10 animate-pulse`}>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-gray-600">Loading 3D Scene...</p>
            {retryCount > 0 && (
              <p className="text-xs text-gray-500">Retrying... ({retryCount}/{maxRetries})</p>
            )}
          </div>
        </div>
      )}
      
      {/* Error fallback */}
      {error && (
        <div className={`absolute inset-0 ${fallbackBg} flex items-center justify-center z-10`}>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">3D Scene unavailable</p>
            <button 
              onClick={() => {
                setError(false);
                setLoading(true);
                setRetryCount(0);
              }}
              className="text-xs text-orange-400 hover:text-orange-500 underline"
            >
              Retry
            </button>
          </div>
        </div>
      )}
      
      {/* Spline component */}
      <div 
        className={`w-full h-full transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ minHeight: '100%', minWidth: '100%' }}
      >
        {!error && (
          <Spline 
            scene={scene}
            onLoad={handleLoad}
            onError={handleError}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
    </div>
  );
}
