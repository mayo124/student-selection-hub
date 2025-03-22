
import React, { useState } from "react";
import ProgramSelection from "@/components/ProgramSelection";
import { SelectedProgram } from "@/types/program";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (selectedPrograms: SelectedProgram) => {
    console.log("Selected programs:", selectedPrograms);
    setSubmitted(true);
    
    // In a real application, you would send this data to your backend
    // For now we'll just show a success message
    toast({
      title: "Success!",
      description: "Your after-school program selections have been saved.",
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-blue-50">
      <div className="container px-4 py-10 mx-auto max-w-5xl">
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-flex px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-3">
            2024-25 Academic Year
          </div>
          <h1 className="text-4xl font-bold mb-3 text-gray-900">
            After-School Program Selection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your preferred activities for the Higher Learning Program (HLP).
            You can choose one activity per time slot.
          </p>
        </header>

        {!submitted ? (
          <ProgramSelection onSubmit={handleSubmit} />
        ) : (
          <div className="glass-card p-8 rounded-xl text-center animate-scale-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your selection has been successfully submitted. You'll receive a
              confirmation of your program choices soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Make New Selections
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
