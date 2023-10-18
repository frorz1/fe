import { create } from 'zustand'
type Page1Store = {
  count: number
  addCount: (count: number) => void
}
const store = create<Page1Store>((set, get) => ({
  count: 0,
  addCount: (count: number) => {
    set((state) => ({ count: state.count + count }))
  },
}))
export const usePage1Store = store
