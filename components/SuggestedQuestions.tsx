"use client";

import { useState, useCallback } from "react";
import { SUGGESTED_QUESTIONS_BY_CATEGORY } from "@/lib/constants";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  disabled: boolean;
}

function pickRandomQuestions(): string[] {
  const shuffled = [...SUGGESTED_QUESTIONS_BY_CATEGORY]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  return shuffled.map(
    (cat) => cat.questions[Math.floor(Math.random() * cat.questions.length)]
  );
}

export default function SuggestedQuestions({
  onSelect,
  disabled,
}: SuggestedQuestionsProps) {
  const [questions, setQuestions] = useState(pickRandomQuestions);

  const shuffle = useCallback(() => {
    setQuestions(pickRandomQuestions());
  }, []);

  return (
    <div className="flex flex-wrap gap-2 px-3 pb-2">
      {questions.map((question) => (
        <button
          key={question}
          onClick={() => onSelect(question)}
          disabled={disabled}
          className="text-xs bg-navy-50 text-navy-700 border border-navy-200 rounded-full px-3 py-1.5 hover:bg-navy-100 hover:border-navy-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {question}
        </button>
      ))}
      <button
        onClick={shuffle}
        disabled={disabled}
        className="text-xs text-navy-400 hover:text-navy-600 px-2 py-1.5 transition-colors disabled:opacity-50"
        aria-label="Show different questions"
      >
        More ↻
      </button>
    </div>
  );
}
