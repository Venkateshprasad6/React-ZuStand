import { create } from "zustand";
import { persist,devtools } from "zustand/middleware";


const useProduct = create(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: () => set((state) => ({ count: state.count + 1 })),
        decrease: () => set((state) => ({ count: state.count - 1 })),
        multiply: () => set((state) => ({ count: state.count * 2 })),
        divide: () => set((state) => ({ count: state.count / 2 })),
      }),
      {
        name: "product-storage", // localStorage key
      },
      {
          name: "product-store", // localStorage key
      }
    )
  )
);

export default useProduct;