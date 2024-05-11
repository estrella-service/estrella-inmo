import { create } from 'zustand';

export const useModal = create((set) => ({
  data: {},
  type: null,
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false }),
}));
