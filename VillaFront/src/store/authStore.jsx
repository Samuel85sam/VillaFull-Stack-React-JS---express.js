import { create } from "zustand";
//! import authService from "../../../VillaBack/services/auth.service";

const useAuthStore = create((set) => ({
  isAuhenticated : false,
  user: null,
  authenticate: async (token)=>{
    try {
      const response = await fetch(`/api/auth/verify-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        const user = await response.json();
        set({ isAuthenticated: true, user });
      } else {
        set({ isAuthenticated: false, user: null });
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      set({ isAuthenticated: false, user: null });
    }
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;
//     const user = await authService.verifyJwt(token);
//     if (user) {
//       set({isAuthenticated: true, user});
//     }else{
//       set({isAuthenticated: false, user:null });
      
//     }
//   },
//   logout: ( ) => set({isAuthenticated : false, user: null})
// })) 
// export default useAuthStore


  //   // userInfos: { id:null, nom:"",prenom:"",adresse:"",tel:"",mail:"",loginName:"",hashedPassword:"",JWT:null,}
  
  //   // set({userInfos: { }})
  
  //   JWT: {},
  //   name: '',
  //   id: null,
  //   login: async (formValues) => {
  //     const url = route
  //     const response = await PostForm(formValues, url);
  //     set({ JWT: await response.data.token })
  //     console.log(`READY in STORAGE ====>${JSON.stringify(response)}`);
  //     return response
  //   },
  // }
  // ));
  
  // window.store = useAuthStore;
  