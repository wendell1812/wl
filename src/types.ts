export interface QuizOption {
  value: number;
  label: string;
  emoji: string;
  image?: string;
}

export interface QuizQuestion {
  id: number | string;
  type?: 'select' | 'multiselect' | 'slider' | 'social-proof-carousel' | 'content-block';
  question?: string;
  description?: string;
  options?: QuizOption[];
  sliderConfig?: {
    min: number;
    max: number;
    defaultValue: number;
    unit: string;
  };
}

export interface QuizAnswers {
  [key: string]: number | number[];
}
