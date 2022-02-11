package challenge.interview.backendExercise.Services;

import challenge.interview.backendExercise.Models.Task;

import java.util.List;

public interface ITaskService {

    void create(Task task);
    void edit(Task task);
    void delete(Integer id);
    Task getById(Integer id);
    List<Task> getList();
    List<Task> findByIdFolder(Integer id);
    
}
