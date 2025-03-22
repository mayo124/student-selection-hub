
import React, { useState, useEffect } from "react";
import { programData, getGroupColor, getDayColor } from "@/data/programData";
import { Grade, SelectedProgram, ProgramSlot, ActivityDay, TimeSlot } from "@/types/program";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import ProgramCard from "./ProgramCard";
import { cn } from "@/lib/utils";

interface ProgramSelectionProps {
  onSubmit: (selectedPrograms: SelectedProgram) => void;
}

const ProgramSelection: React.FC<ProgramSelectionProps> = ({ onSubmit }) => {
  const { toast } = useToast();
  const [activeGrade, setActiveGrade] = useState<Grade>(5);
  const [selectedPrograms, setSelectedPrograms] = useState<SelectedProgram>({
    monday130: null,
    monday230: null,
    wednesday130: null,
    wednesday230: null,
    friday130: null,
    friday230: null,
  });
  
  const [filteredPrograms, setFilteredPrograms] = useState<ProgramSlot[]>([]);
  
  useEffect(() => {
    setFilteredPrograms(programData.filter(program => program.grade === activeGrade));
  }, [activeGrade]);

  const getSlotKey = (day: ActivityDay, time: TimeSlot): keyof SelectedProgram => {
    const dayPrefix = day.toLowerCase();
    const timeKey = time.startsWith("1:30") ? "130" : "230";
    return `${dayPrefix}${timeKey}` as keyof SelectedProgram;
  };

  const handleSelectActivity = (slotKey: keyof SelectedProgram, activityId: string) => {
    setSelectedPrograms(prev => {
      const updated = { ...prev };
      updated[slotKey] = prev[slotKey] === activityId ? null : activityId;
      return updated;
    });
    
    toast({
      title: "Selection updated",
      description: "Your activity choice has been updated",
      duration: 2000,
    });
  };
  
  const handleSubmit = () => {
    const hasSelections = Object.values(selectedPrograms).some(val => val !== null);
    
    if (!hasSelections) {
      toast({
        title: "No activities selected",
        description: "Please select at least one activity before submitting",
        variant: "destructive",
      });
      return;
    }
    
    onSubmit(selectedPrograms);
    toast({
      title: "Success!",
      description: "Your activity selections have been submitted",
    });
  };

  const renderDaySection = (day: ActivityDay) => {
    const daySlots = filteredPrograms.filter(program => program.day === day);
    const dayColorClass = getDayColor(day);
    
    if (daySlots.length === 0) return null;
    
    return (
      <div className={cn("program-day mb-8", dayColorClass)}>
        <h2 className={cn(
          "text-xl font-semibold mb-3 py-2 px-4 rounded-lg",
          day === "Monday" ? "bg-program-monday text-white" : 
          day === "Wednesday" ? "bg-program-wednesday text-white" : 
          "bg-program-friday text-white"
        )}>
          {day}
        </h2>
        
        <div className="space-y-6">
          {daySlots.map(slot => {
            const slotKey = getSlotKey(slot.day, slot.time);
            const groupClass = `program-group-${slot.group.toLowerCase()}`;
            
            return (
              <div key={`${slot.day}-${slot.time}-${slot.grade}`} className="animate-fade-in">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium shadow-sm">
                    {slot.time}
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium shadow-sm",
                    slot.group === "A" ? "bg-program-group-a" :
                    slot.group === "B" ? "bg-program-group-b" :
                    slot.group === "C" ? "bg-program-group-c" :
                    slot.group === "D" ? "bg-program-group-d" :
                    "bg-program-group-steam"
                  )}>
                    Group {slot.group}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {slot.activities.map(activity => (
                    <ProgramCard
                      key={activity.id}
                      activity={activity}
                      isSelected={selectedPrograms[slotKey] === activity.id}
                      onClick={() => handleSelectActivity(slotKey, activity.id)}
                      groupColor={groupClass}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full animate-fade-in">
      <Tabs defaultValue="5" className="w-full mb-6">
        <div className="flex justify-center mb-4">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger 
              value="5" 
              onClick={() => setActiveGrade(5)}
              className="text-base py-2"
            >
              Grade 5
            </TabsTrigger>
            <TabsTrigger 
              value="6" 
              onClick={() => setActiveGrade(6)}
              className="text-base py-2"
            >
              Grade 6
            </TabsTrigger>
            <TabsTrigger 
              value="7" 
              onClick={() => setActiveGrade(7)}
              className="text-base py-2"
            >
              Grade 7
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="5" className="animate-slide-up">
          {renderDaySection("Monday")}
          {renderDaySection("Wednesday")}
          {renderDaySection("Friday")}
        </TabsContent>
        
        <TabsContent value="6" className="animate-slide-up">
          {renderDaySection("Monday")}
          {renderDaySection("Wednesday")}
          {renderDaySection("Friday")}
        </TabsContent>
        
        <TabsContent value="7" className="animate-slide-up">
          {renderDaySection("Monday")}
          {renderDaySection("Wednesday")}
          {renderDaySection("Friday")}
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 flex justify-center">
        <Button 
          onClick={handleSubmit}
          size="lg" 
          className="px-10 py-6 text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
        >
          Submit Selection
        </Button>
      </div>
    </div>
  );
};

export default ProgramSelection;
