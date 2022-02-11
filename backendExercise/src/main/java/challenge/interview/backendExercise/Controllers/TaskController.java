package challenge.interview.backendExercise.Controllers;

import challenge.interview.backendExercise.Models.Folder;
import challenge.interview.backendExercise.Models.Task;
import challenge.interview.backendExercise.Services.ITaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {

private ITaskService service;

@Autowired
    public TaskController(ITaskService service){
    this.service=service;
}


    @PostMapping(path="/create", consumes = "application/json",produces = "application/json")
    public Task createTask(@RequestBody Integer id, @RequestBody Task task) throws Exception{

        try {
            return service.create(id,task);
        }catch(Exception e){
            return null;
        }
    }
    @PutMapping(path="/edit", consumes = "application/json",produces = "application/json")
    public Task editTask(@RequestBody Task task) throws Exception{

        try {
            return service.edit(task);
        }catch(Exception e){
            return null;
        }
    }
    @DeleteMapping(path = "/delete",consumes = "application/json",produces = "application/json")
    public String deleteTask(@RequestBody Integer id) throws Exception {
        try {
            service.delete(id);
            return ("Task deleted");
        } catch (Exception e) {
            return e.getMessage();
        }
    }
    @GetMapping (path="/get", consumes = "application/json",produces = "application/json" )
    public Task getTask(@RequestBody Integer id)throws Exception{

        try{
            return service.getById(id);
        }catch(Exception e){
            return null;
        }
    }
    @GetMapping(path="/getAll",produces = "application/json")
    public List<Task> getAllFolders(){

        return service.getList();
    }

}
