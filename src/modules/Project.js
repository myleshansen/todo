import { Task } from './Task';

const project = (title) => {
    let tasks = [];
    const addTask = (task) => {
        tasks.push(task);
    };
    
    const getTasks = () => tasks;
    
    return { title, addTask, getTasks };
};