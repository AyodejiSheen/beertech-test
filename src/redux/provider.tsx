"use client";
import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Toaster
        position="top-center"
        richColors closeButton
        toastOptions={{
          style: { height: '64px' },
        }}
      />
      {children}
    </Provider>
  )
}
