export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction:string) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const animationVariants = {
    hidden: (direction: string) => {
      switch (direction) {
        case "left":
          return { opacity: 0, x: -100 }; // من اليسار
        case "right":
          return { opacity: 0, x: 100 }; // من اليمين
        case "up":
          return { opacity: 0, y: -100 }; // من الأعلى
        case "down":
          return { opacity: 0, y: 100 }; // من الأسفل
        default:
          return { opacity: 0 }; // افتراضي
      }
    },
    visible: { opacity: 1, x: 0, y: 0 }, // العنصر في مكانه الطبيعي
  };


  export const validateEmail = (email:string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  