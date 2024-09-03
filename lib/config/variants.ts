  export const openVariant = {
    open: { d: 'M3.06061 2.99999L21.0606 21' },
    closed: { d: 'M0 8.5L24 8.5' },
  }
  
  export const closedVariant = {
    open: { d: 'M3.00006 21.0607L21 3.06064' },
    moving: { d: 'M0 14.5L24 14.5' },
    closed: { d: 'M0 14.5L12 14.5' },
  }
  
  export const ulVariant = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: 1 },
    },
  }
  
  export const liVariant = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 30, type: 'spring', ease: 'easeIn' },
      },
    },
    closed: {
      x: 100,
      opacity: 0,
      transition: {
        x: { stiffness: 30, type: 'spring', ease: 'easeOut' },
      },
    },
  }
