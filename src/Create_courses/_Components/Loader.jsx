import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

function Loader({ loading, title = "Ai is Processing Your Request...", message = "Please wait a moment while we process your request.", animationSrc = "/creativity_15577852.gif" }) {
  return (
    <div>
      <AlertDialog open={loading}>
        <AlertDialogContent className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-200 animate-fadeIn">
          <AlertDialogHeader className="text-center">
            <AlertDialogTitle className="text-2xl font-semibold text-gray-900">
              {title}
            </AlertDialogTitle>
            <AlertDialogDescription className="mt-6 flex flex-col items-center space-y-6">
              <img
                src={animationSrc}
                alt="Loading animation"
                className="w-20 h-20"
              />
              <p className="text-md text-gray-700 font-medium text-center leading-relaxed">
                {message}
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Loader;
