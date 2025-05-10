"use client";

import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  duration?: number;
  onUpdate?: (currentText: string) => void;
}

export default function AnimatedText({
  text,
  duration = 666,
  onUpdate,
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];

    for (let i = 0; i <= text.length; i++) {
      timeoutIds.push(
        setTimeout(
          () => {
            const current = text.slice(0, i);
            setDisplayedText(current);
            if (onUpdate) onUpdate(current);
          },
          (duration / text.length) * i,
        ),
      );
    }

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [text, duration, onUpdate]);

  return <>{displayedText}</>;
}
