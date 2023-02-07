import { compareAsc, format } from "date-fns";
import { TodoList } from "./TodoList";

const Dom = (() => {
  const loadPage = () => {
    loadProjects();
    initMenu();
  };
  const loadProjects = () => {
    const todoList = TodoList();
  };

  const loadTodos = () => {};

  const initMenu = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    menuBtn.addEventListener("click", () => {
        if(menu.style.display === "none") {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    });
  };

  return {
    loadPage,
    loadProjects,
    loadTodos,
  };
})();

export default Dom;
