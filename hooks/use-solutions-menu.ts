import { create } from 'zustand';

interface SolutionsStoreState {
    solutionsOpen: boolean;
}

interface SolutionsStoreActions {
    setSolutionsOpen: (isOpen: boolean) => void;
}

const useSolutionsStore = create<SolutionsStoreState & SolutionsStoreActions>((set) => ({
    solutionsOpen: false,
    setSolutionsOpen: (isOpen) => set({ solutionsOpen: isOpen }),
}));

export default useSolutionsStore;