import { create } from 'zustand'

interface Demografi {
  name: string
  gender: string
  age: string
  marriage: string
  job: string
  lamakerja: string
  jumlahcase: string
}

interface TestState {
  demografi: Demografi | null
  scores: number[]
  setDemografi: (data: Demografi) => void
  setScores: (scores: number[]) => void
  resetAll: () => void
}

export const useTestStore = create<TestState>((set) => ({
  demografi: null,
  scores: [],
  setDemografi: (data) => set({ demografi: data }),
  setScores: (scores) => set({ scores }),
  resetAll: () => set({
    demografi:null,
    scores:[]
  })
}))