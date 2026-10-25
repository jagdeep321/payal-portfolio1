"use client";

import React from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const theme = createTheme({
  primaryColor: "lavender",
  colors: {
    lavender: [
      "#f7f4fc",
      "#eae2f5",
      "#d9cbed",
      "#c7b3e4",
      "#b8a4d8",
      "#a087c8",
      "#876cb8",
      "#6f549e",
      "#56407d",
      "#3f2d5d",
    ],
    charcoal: [
      "#f6f5f8",
      "#eae8ee",
      "#c6c3cd",
      "#9793a3",
      "#6a6578",
      "#4c4758",
      "#3b3646",
      "#2e2b38",
      "#24212a",
      "#16141b",
    ],
    blush: [
      "#fdf9fa",
      "#faf0f1",
      "#f5e0e3",
      "#edd0d4",
      "#e8c7cb",
      "#d6a3a9",
      "#bf7e87",
      "#a45a64",
      "#823c45",
      "#5e272e",
    ],
  },
  fontFamily: "var(--font-body), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  headings: {
    fontFamily: "var(--font-heading), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
    fontWeight: "700",
  },
  defaultRadius: "md",
  autoContrast: true,
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications position="top-right" zIndex={1000} />
      {children}
    </MantineProvider>
  );
}
