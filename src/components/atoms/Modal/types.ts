import React from "react";

export interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  onDismiss: () => void;
}
