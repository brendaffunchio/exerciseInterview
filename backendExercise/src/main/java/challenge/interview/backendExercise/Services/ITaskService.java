package challenge.interview.backendExercise.Services;

import challenge.interview.backendExercise.Models.Task;

import java.util.List;

public interface ITaskService {

    void create(Task task) throws Exception;
    void edit(Task task) throws Exception;
    void delete(Integer id) throws Exception;
    Task getById(Integer id) throws Exception;
    List<Task> getList();
    List<Task> findByIdFolder(Integer id);

}
