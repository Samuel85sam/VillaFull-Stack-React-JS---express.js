import create from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  authenticate: (username, password) => {
    // Simulez la vérification du mot de passe hashé ici
    const hashedPasswordFromDatabase = "le_mot_de_passe_hashé_enregistré_dans_la_base_de_données";
    
    // Remplacez cette simulation par une logique réelle, par exemple en utilisant bcrypt
    const isPasswordCorrect = hashedPasswordFromDatabase === hashFunction(password);

    if (isPasswordCorrect) {
      set({ isAuthenticated: true });
    } else {
      set({ isAuthenticated: false });
    }
  },
  logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;