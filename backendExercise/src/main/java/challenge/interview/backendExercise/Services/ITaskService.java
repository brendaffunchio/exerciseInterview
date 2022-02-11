package challenge.interview.backendExercise.Services;

import challenge.interview.backendExercise.Models.Task;

import java.util.List;

public interface ITaskService {

    Task create(Integer id, Task task) throws Exception;
    Task edit(Task task) throws Exception;
    void delete(Integer id) throws Exception;
    Task getById(Integer id) throws Exception;
    List<Task> getList();
    List<Task> findByIdFolder(Integer id);


}
