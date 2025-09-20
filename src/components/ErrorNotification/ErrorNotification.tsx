import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import { useApp } from '../../context/AppContext';
import { XIcon } from 'lucide-react';

export const ErrorNotification: React.FC = () => {
  const { state, actions } = useApp();
  const { error } = state;

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        actions.clearError();
      }, 5000); // Auto dismiss after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [error, actions]);

  if (!error) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-w-md">
      <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex-1">
          <h4 className="font-semibold mb-1">Error</h4>
          <p className="text-sm">{error}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={actions.clearError}
          className="text-white hover:bg-red-600 ml-2"
        >
          <XIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};