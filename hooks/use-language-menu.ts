import { create } from 'zustand';

interface LanguageStoreState {
  languageOpen: boolean;
}

interface LanguageStoreActions {
  setLanguageOpen: (isOpen: boolean) => void;
}

const useLanguageStore = create<LanguageStoreState & LanguageStoreActions>((set) => ({
  languageOpen: false,
  setLanguageOpen: (isOpen) => set({ languageOpen: isOpen }),
}));

export default useLanguageStore;
