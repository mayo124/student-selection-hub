
import React, { useState } from "react";
import ProgramSelection from "@/components/ProgramSelection";
import StudentInfoForm, { StudentInfo } from "@/components/StudentInfoForm";
import SelectionLookup from "@/components/SelectionLookup";
import { SelectedProgram } from "@/types/program";
import { useToast } from "@/hooks/use-toast";
import { saveProgramSelection, getProgramSelectionByGR } from "@/services/programService";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button"; // Import the Button component

const Index = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>({
    fullName: "Guest User",
    grNumber: "GR123456",
    grade: "5"
  }); // Set default student info
  const [selectedPrograms, setSelectedPrograms] = useState<SelectedProgram | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewingExisting, setViewingExisting] = useState(false);
  // Skip the student info form and go directly to program selection
  const [showStudentForm, setShowStudentForm] = useState(false);

  const handleStudentSubmit = async (data: StudentInfo) => {
    setIsLoading(true);
    try {
      // Check if this student already has a selection
      const existingSelection = await getProgramSelectionByGR(data.grNumber);
      
      if (existingSelection) {
        toast({
          title: "Existing Selection Found",
          description: `We found an existing selection for ${existingSelection.studentInfo.fullName}`,
        });
        setStudentInfo(existingSelection.studentInfo);
        setSelectedPrograms(existingSelection.selectedPrograms);
        setViewingExisting(true);
      } else {
        setStudentInfo(data);
        setViewingExisting(false);
      }
    } catch (error) {
      console.error("Error checking for existing selection:", error);
      toast({
        title: "Error",
        description: "There was a problem checking for existing selections.",
        variant: "destructive",
      });
      setStudentInfo(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProgramSubmit = async (programs: SelectedProgram) => {
    if (!studentInfo) return;
    
    setIsLoading(true);
    try {
      await saveProgramSelection({
        studentInfo,
        selectedPrograms: programs,
        timestamp: new Date(),
      });
      
      setSelectedPrograms(programs);
      setSubmitted(true);
      
      toast({
        title: "Success!",
        description: "Your after-school program selections have been saved.",
      });
    } catch (error) {
      console.error("Error saving selection:", error);
      toast({
        title: "Error",
        description: "There was a problem saving your selections.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStudentInfo(null);
    setSelectedPrograms(null);
    setViewingExisting(false);
    setShowStudentForm(true);
  };

  const renderSelectionForm = () => {
    if (showStudentForm && !studentInfo) {
      return (
        <div className="glass-card p-8 rounded-xl animate-slide-up max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Student Information</h2>
          <StudentInfoForm onSubmit={handleStudentSubmit} isLoading={isLoading} />
        </div>
      );
    }
    
    if (!submitted) {
      return (
        <>
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="font-medium">Student: {studentInfo?.fullName || "Guest User"}</h3>
                <p className="text-sm text-gray-500">GR Number: {studentInfo?.grNumber || "GR123456"} | Grade: {studentInfo?.grade || "5"}</p>
              </div>
              {viewingExisting && (
                <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                  Viewing Existing Selection
                </div>
              )}
              <Button variant="outline" size="sm" onClick={() => setShowStudentForm(true)}>
                Change Student
              </Button>
            </div>
          </div>
          <ProgramSelection 
            onSubmit={handleProgramSubmit} 
            initialGrade={Number(studentInfo?.grade || "5") as 5 | 6 | 7}
            existingSelection={viewingExisting ? selectedPrograms : undefined}
          />
        </>
      );
    }
    
    return (
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
        <h2 className="text-2xl font-semibold mb-2">Thank You, {studentInfo?.fullName}!</h2>
        <p className="text-gray-600 mb-6">
          Your selection has been successfully submitted. You'll receive a
          confirmation of your program choices soon.
        </p>
        <Button
          onClick={handleReset}
          size="lg"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Make New Selections
        </Button>
      </div>
    );
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

        <Tabs defaultValue="select" className="w-full mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="select">Make Selection</TabsTrigger>
            <TabsTrigger value="lookup">Lookup Selection</TabsTrigger>
          </TabsList>
          
          <TabsContent value="select" className="mt-6">
            {renderSelectionForm()}
          </TabsContent>
          
          <TabsContent value="lookup" className="mt-6">
            <div className="glass-card rounded-xl animate-slide-up max-w-2xl mx-auto">
              <SelectionLookup />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
