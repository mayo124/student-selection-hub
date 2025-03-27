
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { StudentInfo } from "@/components/StudentInfoForm";
import { SelectedProgram } from "@/types/program";

// Collection references
const SELECTIONS_COLLECTION = "programSelections";

// Interface for the complete program selection data
export interface ProgramSelectionData {
  studentInfo: StudentInfo;
  selectedPrograms: SelectedProgram;
  timestamp: Date;
  id?: string; // Make id optional to allow it in the returned data
}

// Save program selection to Firestore
export const saveProgramSelection = async (data: ProgramSelectionData) => {
  try {
    const docRef = await addDoc(collection(db, SELECTIONS_COLLECTION), {
      ...data,
      timestamp: new Date()
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error("Error saving program selection:", error);
    throw error;
  }
};

// Get program selection by student GR number
export const getProgramSelectionByGR = async (grNumber: string) => {
  try {
    const q = query(
      collection(db, SELECTIONS_COLLECTION), 
      where("studentInfo.grNumber", "==", grNumber)
    );
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return null;
    }
    
    // Return the most recent selection if multiple exist
    let latestSelection: ProgramSelectionData | null = null;
    let latestTimestamp = new Date(0);
    
    querySnapshot.forEach((doc) => {
      const data = doc.data() as ProgramSelectionData;
      const timestamp = data.timestamp instanceof Date 
        ? data.timestamp 
        : new Date(data.timestamp);
        
      if (timestamp > latestTimestamp) {
        latestTimestamp = timestamp;
        latestSelection = { ...data, id: doc.id };
      }
    });
    
    return latestSelection;
  } catch (error) {
    console.error("Error getting program selection:", error);
    throw error;
  }
};

// Get all program selections
export const getAllProgramSelections = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, SELECTIONS_COLLECTION));
    const selections: ProgramSelectionData[] = [];
    
    querySnapshot.forEach((doc) => {
      selections.push({ id: doc.id, ...doc.data() as ProgramSelectionData });
    });
    
    return selections;
  } catch (error) {
    console.error("Error getting all program selections:", error);
    throw error;
  }
};
