import PerfectScrollbar from "perfect-scrollbar";
export const init = () => {
  new PerfectScrollbar(".playlist__content", {
  handlers: ["drag-thumb", "keyboard", "wheel", "touch"],
  wheelSpeed: 1,
  wheelPropagation: false
});
}