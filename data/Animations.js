export const leftFromRight = {
        initial: {
          x: "-100vw",
        },
        animate: {
          x: 0,
          transition: {
            duration: 1.2,
          },
        },
    

}

export const rightFromLeft = {
...leftFromRight,
    initial: {x: 100},


}