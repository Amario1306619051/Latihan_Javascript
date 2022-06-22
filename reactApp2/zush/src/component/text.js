import create from 'zustand'

export const useText = create((set) => ({
    name: 'Pridana',
    jurusan: 'Fisika',
    bio: 'I am a person who likes to do things and stuff and stuff and stuff',
    setName: (name) => set(() => ({ name })),
    setJurusan: (jurusan) => set(() => ({ jurusan })),
    setBio: (bio) => set(() => ({ bio })),
}))