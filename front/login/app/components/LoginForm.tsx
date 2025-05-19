"use client";

import { useState, FormEvent, useEffect } from "react";
import AnimatedText from "./AnimatedText";

interface LoginFormProps {
  onSwitchToRegister: () => void;
  translations: Record<string, Record<string, string>>;
  lang: "en" | "uk";
}

export default function LoginForm({
  onSwitchToRegister,
  translations,
  lang,
}: LoginFormProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [animatedPlaceholderName, setAnimatedPlaceholderName] = useState("");
  const [animatedPlaceholderPassword, setAnimatedPlaceholderPassword] =
    useState("");
  const [animatedButtonText, setAnimatedButtonText] = useState("");

  useEffect(() => {
    const animateText = (
      text: string,
      setter: React.Dispatch<React.SetStateAction<string>>,
      duration = 700,
    ) => {
      let i = 0;
      setter("");
      const interval = setInterval(() => {
        i++;
        setter(text.slice(0, i));
        if (i === text.length) clearInterval(interval);
      }, duration / text.length);
      return () => clearInterval(interval);
    };

    const cleanupName = animateText(
      translations[lang].login_name_placeholder,
      setAnimatedPlaceholderName,
    );
    const cleanupPassword = animateText(
      translations[lang].login_password_placeholder,
      setAnimatedPlaceholderPassword,
    );
    const cleanupButton = animateText(
      translations[lang].login_button,
      setAnimatedButtonText,
    );

    return () => {
      cleanupName();
      cleanupPassword();
      cleanupButton();
    };
  }, [lang, translations]);

  const validate = () => {
    if (!name.trim()) {
      alert(
        lang === "uk"
          ? "Будь ласка, введіть ваше ім'я."
          : "Please enter your name.",
      );
      return false;
    }
    if (!password.trim()) {
      alert(
        lang === "uk"
          ? "Будь ласка, введіть ваш пароль."
          : "Please enter your password.",
      );
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("loginName", name);
      localStorage.setItem("loginPassword", password);
      alert(lang === "uk" ? "Вхід успішний!" : "Login successful!");
    }
  };

  return (
    <div>
      <h2>
        <AnimatedText text={translations[lang].login_title} />
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder={animatedPlaceholderName}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder={animatedPlaceholderPassword}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {animatedButtonText || translations[lang].login_button}
        </button>
        <a
          href="#"
          className="register-link"
          onClick={(e) => {
            e.preventDefault();
            onSwitchToRegister();
          }}
        >
          <AnimatedText text={translations[lang].register_link} />
        </a>
      </form>
    </div>
  );
}
