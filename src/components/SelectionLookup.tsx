
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getProgramSelectionByGR } from "@/services/programService";
import { useToast } from "@/hooks/use-toast";
import { ProgramSelectionData } from "@/services/programService";

const SelectionLookup: React.FC = () => {
  const [grNumber, setGrNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selection, setSelection] = useState<ProgramSelectionData | null>(null);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!grNumber.trim()) {
      toast({
        title: "GR Number Required",
        description: "Please enter a GR number to search",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await getProgramSelectionByGR(grNumber);
      setSelection(result);
      
      if (!result) {
        toast({
          title: "No Selection Found",
          description: "No program selection found for this GR number",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error searching for selection:", error);
      toast({
        title: "Error",
        description: "Failed to search for program selection",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date: Date | any) => {
    if (!date) return "N/A";
    const d = date instanceof Date ? date : new Date(date.seconds * 1000);
    return d.toLocaleString();
  };

  const getActivityName = (activityId: string | null) => {
    if (!activityId) return "None";
    // This is a simplified approach - in a real app you'd look up the activity name from your data
    return activityId;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Look Up Student Selection</h2>
      
      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Enter GR Number"
          value={grNumber}
          onChange={(e) => setGrNumber(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </div>
      
      {selection && (
        <div className="border rounded-lg p-4">
          <div className="mb-4">
            <h3 className="text-lg font-medium">{selection.studentInfo.fullName}</h3>
            <p className="text-sm text-gray-500">
              GR Number: {selection.studentInfo.grNumber} | 
              Grade: {selection.studentInfo.grade} |
              Submitted: {formatDate(selection.timestamp)}
            </p>
          </div>
          
          <h4 className="font-medium mb-2">Selected Programs:</h4>
          <ul className="space-y-1 text-sm">
            <li><span className="font-medium">Monday 1:30-2:30:</span> {getActivityName(selection.selectedPrograms.monday130)}</li>
            <li><span className="font-medium">Monday 2:30-3:30:</span> {getActivityName(selection.selectedPrograms.monday230)}</li>
            <li><span className="font-medium">Wednesday 1:30-2:30:</span> {getActivityName(selection.selectedPrograms.wednesday130)}</li>
            <li><span className="font-medium">Wednesday 2:30-3:30:</span> {getActivityName(selection.selectedPrograms.wednesday230)}</li>
            <li><span className="font-medium">Friday 1:30-2:30:</span> {getActivityName(selection.selectedPrograms.friday130)}</li>
            <li><span className="font-medium">Friday 2:30-3:30:</span> {getActivityName(selection.selectedPrograms.friday230)}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectionLookup;
