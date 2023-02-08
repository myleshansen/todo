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
      if (menu.style.display === "none") {
        menu.style.display = "flex";
      } else {
        menu.style.display = "none";
      }
    });

    const addBtn = document.querySelector(".add-btn");
    const addForm = document.querySelector(".task-add-menu");
    addBtn.addEventListener("click", () => {
      if (addForm.style.display === "none" || addForm.style.display === "") {
        addForm.style.display = "flex";
      } else {
        addForm.style.display = "none";
      }
    });

    const addProjectBtn = document.querySelector(".add-project-btn");
    const addProjectForm = document.querySelector(".project-add-menu");
    addProjectBtn.addEventListener("click", () => {
      if (
        addProjectForm.style.display === "none" ||
        addProjectForm.style.display === ""
      ) {
        addProjectForm.style.display = "flex";
      } else {
        addProjectForm.style.display = "none";
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
