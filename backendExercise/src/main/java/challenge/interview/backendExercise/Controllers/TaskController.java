package challenge.interview.backendExercise.Controllers;

import challenge.interview.backendExercise.Models.Folder;
import challenge.interview.backendExercise.Models.Task;
import challenge.interview.backendExercise.Services.ITaskService;
import org.apache.tomcat.util.http.parser.MediaType;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpRequest;
import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {

    @Autowired
    private ITaskService service;


    @PostMapping(path = "/create")
    public Task createTask(@RequestBody @NotNull Task task, @RequestParam (value = "id_folder", required = false) Integer id_folder) throws Exception {

      return service.create(task,id_folder);

    }

    @PutMapping(path = "/edit", consumes="application/json", produces="application/json")
    public Task editTask(@RequestBody Task task) throws Exception {

        try {
            return service.edit(task);
        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping(path = "/delete")
    public String deleteTask(@RequestParam ("id") Integer id) throws Exception {
        try {
            service.delete(id);
            return ("Task deleted");
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    @GetMapping(path = "/get")
    public Task getTask(@RequestParam ("id")  Integer id) throws Exception {

        try {
            return service.getById(id);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping(path = "/getAll")
    public List<Task> getAllTasks() {

        return service.getList();
    }

    @GetMapping(path = "/getByFolder")
    public List<Task> getAllTasksByFolderId(@RequestParam ("folder_id")Integer folder_id) {

        return service.getByIdFolder(folder_id);
    }

}
