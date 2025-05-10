"use client";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <img
      src={"/icons/sun.svg"}
      alt="Theme icon"
      title="Toggle theme"
      id="theme-icon"
      onClick={onToggle}
    />
  );
}
