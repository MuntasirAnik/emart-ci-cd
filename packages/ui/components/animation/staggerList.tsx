export const staggerList = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
export const staggerItem = {
  hidden: { opacity: 0, y: -100 },
  visible: { opdacity: 1, y: 0 },
};
