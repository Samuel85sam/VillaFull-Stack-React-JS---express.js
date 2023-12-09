import { create } from "zustand";

const initialState = {
  id: null,
  admin: null,
  nom: null,
  prenom: null,
  adresse: null,
  tel: null,
  mail: null,
  loginName: null,
  hashedPassword: null,
  JWT: null,
}


export const useAuthStore = create((set) => ({
  userData: initialState,
  addUserData: (newUserData) => set((state) => ({
    ...state,
    userData: newUserData,
    reset: () => {
      set(initialState)
    },
  
  }))
}));




// export const clearAuthStore = create((set) => ({
//   userData: dataStored,
//   noData: initialState,
//   clearUserData: (noData) => set((state) => ({
//     ...state,
//     userData : noData
// }));



