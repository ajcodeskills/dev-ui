export const positionClass = {
  left: {
    position: "left-0 inset-y-0 ",
    transition: {
      enterFrom: "-translate-x-full",
      enterTo: "translate-x-0",
      leaveFrom: "translate-x-0",
      leaveTo: "-translate-x-full",
    },
  },
  right: {
    position: "right-0 inset-y-0 ",
    transition: {
      enterFrom: "translate-x-full",
      enterTo: "translate-x-0",
      leaveFrom: "translate-x-0",
      leaveTo: "translate-x-full",
    },
  },
  top: {
    position: "top-0 inset-x-0 ",
    transition: {
      enterFrom: "-translate-y-full",
      enterTo: "translate-y-0",
      leaveFrom: "translate-y-0",
      leaveTo: "-translate-y-full",
    },
  },
  bottom: {
    position: "bottom-0 inset-x-0 ",
    transition: {
      enterFrom: "translate-y-full",
      enterTo: "translate-y-0",
      leaveFrom: "translate-y-0",
      leaveTo: "translate-y-full",
    },
  },
};
