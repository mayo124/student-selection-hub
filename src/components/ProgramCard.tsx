
import React from "react";
import { Activity } from "@/types/program";
import { cn } from "@/lib/utils";
import ActivityIcon from "./ActivityIcon";

interface ProgramCardProps {
  activity: Activity;
  isSelected: boolean;
  onClick: () => void;
  groupColor: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  activity,
  isSelected,
  onClick,
  groupColor,
}) => {
  return (
    <div
      className={cn(
        "activity-card group",
        isSelected && "selected animate-pulse-soft",
        `bg-${groupColor}/10`
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          "p-2 rounded-full",
          `bg-${groupColor}/20 text-primary`,
          "transition-all duration-300 group-hover:bg-primary group-hover:text-white"
        )}>
          <ActivityIcon name={activity.name} />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-base">{activity.name}</h3>
          <p className="text-sm text-muted-foreground">
            {activity.location}
            {activity.classes && ` • ${activity.classes}`}
          </p>
        </div>
        <div className={cn(
          "w-5 h-5 rounded-full border-2",
          isSelected ? "bg-primary border-primary" : "border-gray-300",
          "transition-all duration-200"
        )}></div>
      </div>
    </div>
  );
};

export default ProgramCard;
