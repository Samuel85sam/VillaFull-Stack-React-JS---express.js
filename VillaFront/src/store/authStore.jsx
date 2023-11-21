import { create } from "zustand";
import { PostForm } from "../api/CRUD.api";

const useAuthStore = create((set, route) => ({
  JWT: {},
  login: async (formValues) => {
    const url = route
    const result = await PostForm(formValues, url);
    set({ JWT: await result.data.token })
    console.log(`READY in STORAGE ====>${JSON.stringify(result)}`);
    return result
  },
}))

export default useAuthStore