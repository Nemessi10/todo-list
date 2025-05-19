"use client";

import { useState, FormEvent, useEffect } from "react";
import AnimatedText from "./AnimatedText";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
  translations: Record<string, Record<string, string>>;
  lang: "en" | "uk";
}

export default function RegisterForm({
  onSwitchToLogin,
  translations,
  lang,
}: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [animatedPlaceholderName, setAnimatedPlaceholderName] = useState("");
  const [animatedPlaceholderEmail, setAnimatedPlaceholderEmail] = useState("");
  const [animatedPlaceholderPassword, setAnimatedPlaceholderPassword] =
    useState("");
  const [
    animatedPlaceholderPasswordConfirm,
    setAnimatedPlaceholderPasswordConfirm,
  ] = useState("");
  const [animatedButtonText, setAnimatedButtonText] = useState("");

  //Так, кострубато. Просто вийшло так що AnimateText невалідний варіант тут,і простіше ось це,аніж пробувати
  // перемудрити AnimateText
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
      translations[lang].register_name_placeholder,
      setAnimatedPlaceholderName,
    );
    const cleanupEmail = animateText(
      translations[lang].register_email_placeholder,
      setAnimatedPlaceholderEmail,
    );
    const cleanupPassword = animateText(
      translations[lang].register_password_placeholder,
      setAnimatedPlaceholderPassword,
    );
    const cleanupPasswordConfirm = animateText(
      translations[lang].register_password_confirm_placeholder,
      setAnimatedPlaceholderPasswordConfirm,
    );
    const cleanupButton = animateText(
      translations[lang].register_button,
      setAnimatedButtonText,
    );

    return () => {
      cleanupName();
      cleanupEmail();
      cleanupPassword();
      cleanupPasswordConfirm();
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
    if (!email.trim()) {
      alert(
        lang === "uk"
          ? "Будь ласка, введіть вашу електронну пошту."
          : "Please enter your email.",
      );
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert(
        lang === "uk"
          ? "Будь ласка, введіть коректну електронну пошту."
          : "Please enter a valid email.",
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
    if (password.length < 8) {
      alert(
        lang === "uk"
          ? "Пароль повинен містити мінімум 8 символів."
          : "Password must be at least 8 characters.",
      );
      return false;
    }
    if (password !== passwordConfirm) {
      alert(
        lang === "uk"
          ? "Паролі не співпадають. Будь ласка, введіть повторно."
          : "Passwords do not match.",
      );
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("registerName", name);
      localStorage.setItem("registerEmail", email);
      localStorage.setItem("registerPassword", password);
      alert(lang === "uk" ? "Реєстрація успішна!" : "Registration successful!");
      // TODO: Додати логіку після реєстрації (редірект, API виклик)
    }
  };

  return (
    <div>
      <h2>
        <AnimatedText text={translations[lang].register_title} />
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder={
              animatedPlaceholderName ||
              translations[lang].register_name_placeholder
            }
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder={
              animatedPlaceholderEmail ||
              translations[lang].register_email_placeholder
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder={
              animatedPlaceholderPassword ||
              translations[lang].register_password_placeholder
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder={
              animatedPlaceholderPasswordConfirm ||
              translations[lang].register_password_confirm_placeholder
            }
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {animatedButtonText || translations[lang].register_button}
        </button>
        <a
          href="#"
          className="login-link"
          onClick={(e) => {
            e.preventDefault();
            onSwitchToLogin();
          }}
        >
          <AnimatedText text={translations[lang].login_link} />
        </a>
      </form>
    </div>
  );
}
