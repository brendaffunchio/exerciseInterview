package challenge.interview.backendExercise.Services;

import challenge.interview.backendExercise.Models.Folder;
import challenge.interview.backendExercise.Models.Task;

import java.util.List;

public interface ITaskService {

    Task create(Task task, Integer id) throws Exception;
    Task edit(Task task) throws Exception;
    void delete(Integer id) throws Exception;
    Task getById(Integer id) throws Exception;
    List<Task> getList();
    List<Task> getByIdFolder(Integer id);
    public void addTaskInFolder(Task task,Integer id) throws Exception;


}
