import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

    // Placeholder for last id so we can simulate
    // automatic incrementing of id's
    lastId: number = 0;

    // Placeholder for todo's
    todos: Todo[] = [];

    constructor() {
        console.log("S-TodoDataService object"); // console.log does not work in constructor 
    }

    // Simulate POST /todos
    addTodo(todo: Todo): TodoDataService {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        console.log("S-AddTodo - Push");
        this.todos.push(todo);
        return this;
    }

    // Simulate DELETE /todos/:id
    deleteTodoById(id: number): TodoDataService {
        this.todos = this.todos
            .filter(todo => todo.id !== id);
        return this;
    }

    // Simulate PUT /todos/:id
    updateTodoById(id: number, values: Object = {}): Todo {
        let todo = this.getTodoById(id);
        if (!todo) {
             return null;
        }
        console.log("S-UpdateTodo - assign");
        Object.assign(todo, values);
        return todo;
    }

    // Simulate GET /todos
    getAllTodos(): Todo[] {
          console.log("S getAllTodos() = " + this.todos);
          return this.todos;
    }

    // Simulate GET /todos/:id
    getTodoById(id: number): Todo {
        console.log("S-GetTodo - Push");

        return this.todos
            .filter(todo => todo.id === id)
            .pop();
    }

    // Toggle todo complete
    toggleTodoComplete(todo: Todo){
        console.log("S-Complete");
        let updatedTodo = this.updateTodoById(todo.id, {
            complete: !todo.complete
        });
        return updatedTodo;
    }
}
