"use client";

interface LanguageToggleProps {
  lang: "en" | "uk";
  onToggle: () => void;
}

export default function LanguageToggle({
  lang,
  onToggle,
}: LanguageToggleProps) {
  return (
    <img
      src={"/icons/gb.svg"}
      alt="Language icon"
      title="Toggle language"
      id="language-icon"
      onClick={onToggle}
    />
  );
}
