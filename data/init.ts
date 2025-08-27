import { create } from "zustand"

interface CalcStore {
  displayValue: string
  history: string[]
  currentOperation: string | null

  setDisplayValue: (value: string) => void
  addToHistory: (entry: string) => void
  clearHistory: () => void
  setCurrentOperation: (operation: string | null) => void
}

export const useCalculatorStore = create<CalcStore>((set) => ({
  displayValue: "0",
  history: [],
  currentOperation: null,

  setDisplayValue: (value) => set({ displayValue: value }),
  addToHistory: (entry) =>
    set((state) => ({
      history: [...state.history, entry],
    })),
  clearHistory: () => set({ history: [] }),
  setCurrentOperation: (operation) => set({ currentOperation: operation }),
}))
