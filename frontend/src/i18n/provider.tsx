"use client";

import { NextIntlClientProvider } from "next-intl";
import type { Messages } from "next-intl";
import { ReactNode, useEffect, useState } from "react";

interface LocaleProviderProps {
  children: ReactNode;
}

export default function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<string>("en");
  const [messages, setMessages] = useState<Messages | null>(null);

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") || "en";
    setLocale(storedLocale);

    import(`/messages/${storedLocale}.json`)
      .then((mod) => setMessages(mod))
      .catch(() => setMessages({}));
  }, []);

  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
