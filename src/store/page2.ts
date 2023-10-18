import { create } from 'zustand'
type Page2Store = {
  count: number
  addCount: (count: number) => void
}
const store = create<Page2Store>((set, get) => ({
  count: 0,
  addCount: (count: number) => {
    set((state) => ({ count: state.count + count }))
  },
}))
export const usePage2Store = store
