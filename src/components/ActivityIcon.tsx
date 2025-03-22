
import React from "react";
import { 
  Dumbbell, 
  Trophy, 
  BookOpen, 
  Calculator, 
  Languages, 
  Music, 
  Footprints, 
  Palette, 
  Pen, 
  PenTool, 
  Dices, 
  Microscope,
  ArrowUpRight,
  Waypoints,
  Users,
  Target,
  CircleDashed
} from "lucide-react";

interface ActivityIconProps {
  name: string;
  className?: string;
  size?: number;
}

const ActivityIcon: React.FC<ActivityIconProps> = ({ name, className = "", size = 20 }) => {
  const getLowercaseName = name.toLowerCase();

  if (getLowercaseName.includes("kickboxing")) {
    return <Dumbbell className={className} size={size} />;
  } else if (getLowercaseName.includes("throwball")) {
    return <Trophy className={className} size={size} />;
  } else if (getLowercaseName.includes("chess")) {
    return <BookOpen className={className} size={size} />; // Changed from ChessKnight to BookOpen
  } else if (getLowercaseName.includes("vedic math")) {
    return <Calculator className={className} size={size} />;
  } else if (getLowercaseName.includes("spanish") || getLowercaseName.includes("german") || getLowercaseName.includes("mandarin")) {
    return <Languages className={className} size={size} />;
  } else if (getLowercaseName.includes("bollywood") || getLowercaseName.includes("dance")) {
    return <Music className={className} size={size} />;
  } else if (getLowercaseName.includes("kho-kho")) {
    return <Footprints className={className} size={size} />;
  } else if (getLowercaseName.includes("steam")) {
    return <Microscope className={className} size={size} />;
  } else if (getLowercaseName.includes("gymnastics")) {
    return <Waypoints className={className} size={size} />;
  } else if (getLowercaseName.includes("speech") || getLowercaseName.includes("drama")) {
    return <Users className={className} size={size} />;
  } else if (getLowercaseName.includes("archery")) {
    return <Target className={className} size={size} />;
  } else if (getLowercaseName.includes("basketball")) {
    return <CircleDashed className={className} size={size} />; // Changed from Basketball to CircleDashed
  } else if (getLowercaseName.includes("calligraphy")) {
    return <PenTool className={className} size={size} />;
  } else if (getLowercaseName.includes("creative art")) {
    return <Palette className={className} size={size} />;
  } else if (getLowercaseName.includes("creative writing")) {
    return <Pen className={className} size={size} />;
  } else if (getLowercaseName.includes("football")) {
    return <Dices className={className} size={size} />; // Changed from Football to Dices
  }

  return <ArrowUpRight className={className} size={size} />;
};

export default ActivityIcon;
