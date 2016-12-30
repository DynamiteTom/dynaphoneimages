import {Component, OnInit, Inject} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent implements OnInit {
        title:string = "Angular Todos TodoList 26/12/2016";
        newTodo: Todo = new Todo();
        testList:[any];
        bFirst:boolean = true;
        ListEls: Todo[];
        bChange = false;

        constructor(@Inject(TodoDataService) private todoDataService: TodoDataService) {
                                                   console.log("AppComponent class");
                                             }
        ngOnInit(){
              console.log("AppComponent OnInit");
        }

        addTodo(inputTodo) { 
              console.log("inputTodo" + inputTodo);
              var todo = new Todo();
              var ip=inputTodo.value;
           
              if (ip == ""){ return; }              
              
              if (!this.checkUnique(ip)){ 
                  console.log("Duplicate!");
                return; }

              this.bChange = true;

              this.newTodo.title = ip;
              this.newTodo.complete = false;

              this.todoDataService.addTodo(this.newTodo);
              console.log("A-addTodo2() " + ip);
              this.newTodo = todo;
        }

        toggleTodoComplete(todo) {
              console.log("A-Toggle()");
              this.bChange = true;
        
              this.todoDataService.toggleTodoComplete(todo);
        }

        removeTodo(todo) {
              console.log("A-removeTodo()");
              this.bChange = true;
              this.todoDataService.deleteTodoById(todo.id);
        }

        get todos() {
              if (this.bFirst || this.bChange == true)
              {
                  console.log("A-todos()");
                  this.bFirst = false;
                  this.bChange = false;
        
                  this.ListEls = this.todoDataService.getAllTodos(); 
                  return this.ListEls;
              }
              else
              {
                   console.log("ListEls");
                   return this.ListEls;
              }
                
        }

        checkUnique(newItem):boolean
        {
            var lst = this.ListEls;
            
            var sz = lst.length;
            
            for(let i=0; i<sz; i++)
            {
                if (lst[i].title == newItem){
                    return false;                  
                }
            }
            return true;
        }

}
