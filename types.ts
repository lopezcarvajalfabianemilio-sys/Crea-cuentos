export enum StoryPartStatus {
  LOCKED = 'LOCKED',
  OPEN = 'OPEN',
  COMPLETED = 'COMPLETED',
}

export interface StorySection {
  id: string;
  title: string;
  description: string; // The text prompt shown to the user
  audioScript: string; // The distinct text for the AI to speak
  promptGuidance: string; // Internal guidance for the AI analyzer
  status: StoryPartStatus;
  userContent: string;
  aiFeedback: string | null;
  color: string; // Tailwind color class for background
}

export interface AnalysisResponse {
  isRelevant: boolean;
  feedback: string;
  encouragement: string;
}