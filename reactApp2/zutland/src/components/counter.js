import create from 'zustand'

const useCounter = create((set) => ({
    counter : 0,
    increase: (counter) => set((state) => ({counter: state.counter + 1})),
    decrease: () => set((state) => ({counter: state.counter -  1}))
})
) 

export default useCounter