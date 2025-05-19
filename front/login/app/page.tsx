"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import translations from "./translations";
import AnimatedText from "./components/AnimatedText";

export default function LoginPage() {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"en" | "uk">("en");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
    document.body.classList.toggle("light-theme", !isDark);
  }, [isDark]);

  useEffect(() => {
    document.body.classList.remove("en", "uk");
    document.body.classList.add(lang);
  }, [lang]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 980);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const loginContainerClasses = [
    "login-container",
    isLoginActive ? "active" : "",
    !isLoginActive ? "shifted-left" : "",
    isMobile && !isLoginActive ? "hidden" : "",
    isMobile && isLoginActive ? "" : "",
  ].join(" ");

  const registerContainerClasses = [
    "register-container",
    !isLoginActive ? "active" : "",
    isLoginActive ? "shifted-right" : "",
    isMobile && isLoginActive ? "hidden" : "",
    isMobile && !isLoginActive ? "" : "",
  ].join(" ");

  const dividerClasses = [
    "divider",
    isLoginActive ? "shifted-right" : "shifted-left",
    isMobile ? "hidden" : "",
  ].join(" ");

  return (
    <main>
      <nav>
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark((v) => !v)} />
        <LanguageToggle
          lang={lang}
          onToggle={() => setLang((l) => (l === "en" ? "uk" : "en"))}
        />
      </nav>
      <div className="container">
        <div className={loginContainerClasses}>
          <LoginForm
            translations={translations}
            lang={lang}
            onSwitchToRegister={() => setIsLoginActive(false)}
          />
        </div>
        <div className={dividerClasses}>
          <h2
            className={"login-pointer" + (isLoginActive ? " active" : "")}
            onClick={() => setIsLoginActive(true)}
          >
            <AnimatedText
              text={translations[lang].login_pointer}
              duration={333}
            />
          </h2>
          <AnimatedText text="_____________" />
          <h2
            className={"register-pointer" + (!isLoginActive ? " active" : "")}
            onClick={() => setIsLoginActive(false)}
          >
            <AnimatedText
              text={translations[lang].register_pointer}
              duration={333}
            />
          </h2>
        </div>
        <div className={registerContainerClasses}>
          <RegisterForm
            translations={translations}
            lang={lang}
            onSwitchToLogin={() => setIsLoginActive(true)}
          />
        </div>
      </div>
    </main>
  );
}
