import { create } from "zustand";

const initialState = {
  id: '',
  nom:'',
  prenom:'',
  adresse:'',
  tel:'',
  email:'',
  loginName:'',
  hashedPassword:'',
  JWT:'',
}


export const useAuthStore = create((set) => ({
 userData: initialState,
 addUserData: (newUserData) => set((state) => ({
                                                  ...state,
                                                  userData: newUserData,
                                                  }))
}))

