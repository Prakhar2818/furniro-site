import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { XIcon, AlertTriangleIcon, EditIcon, TrashIcon } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'delete' | 'edit' | 'default';
  isLoading?: boolean;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = 'default',
  isLoading = false
}) => {
  if (!isOpen) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'delete':
        return {
          icon: <TrashIcon className="w-6 h-6 text-red-500" />,
          confirmButtonClass: "bg-red-500 hover:bg-red-600 text-white",
          iconBgClass: "bg-red-100"
        };
      case 'edit':
        return {
          icon: <EditIcon className="w-6 h-6 text-[#b88e2f]" />,
          confirmButtonClass: "bg-[#b88e2f] hover:bg-[#a67d28] text-white",
          iconBgClass: "bg-[#f9f1e7]"
        };
      default:
        return {
          icon: <AlertTriangleIcon className="w-6 h-6 text-orange-500" />,
          confirmButtonClass: "bg-[#b88e2f] hover:bg-[#a67d28] text-white",
          iconBgClass: "bg-orange-100"
        };
    }
  };

  const { icon, confirmButtonClass, iconBgClass } = getTypeStyles();

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <Card 
          className="w-full max-w-md bg-white shadow-xl border rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgClass}`}>
                {icon}
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                {title}
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              disabled={isLoading}
              className="h-8 w-8 hover:bg-gray-100"
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="pb-6">
            <p className="text-gray-600 mb-6 leading-relaxed">
              {message}
            </p>
            
            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={onClose}
                disabled={isLoading}
                className="px-6"
              >
                {cancelText}
              </Button>
              <Button
                onClick={onConfirm}
                disabled={isLoading}
                className={`px-6 ${confirmButtonClass}`}
              >
                {isLoading ? 'Processing...' : confirmText}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};