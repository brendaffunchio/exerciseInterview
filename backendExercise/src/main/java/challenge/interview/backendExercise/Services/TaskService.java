package challenge.interview.backendExercise.Services;

import challenge.interview.backendExercise.Models.Folder;
import challenge.interview.backendExercise.Models.Task;
import challenge.interview.backendExercise.Repositories.ITaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService implements ITaskService {

    private ITaskRepository repository;
    private IFolderService folderService;

    @Autowired
    public TaskService(ITaskRepository repository, IFolderService folderService) {
        this.repository = repository;
        this.folderService=folderService;
    }

    @Override
    public Task create(Integer id, Task task) throws Exception {

        if (task != null) {
            return repository.save(task);
           // if(id!=null) folderService.addTaskInFolder(id,task);

            }else throw new Exception("Cannot create task");

    }

    @Override
    public Task edit(Task task) throws Exception {

        Task oldTask = repository.getById(task.getId());

        if (oldTask != null) {
            oldTask.setDescription(task.getDescription());
            oldTask.setFinished(task.getFinished());
            oldTask.setFolder(task.getFolder());
            return repository.save(oldTask);

        } else throw new Exception("Cannot edit task");
    }

    @Override
    public void delete(Integer id) throws Exception {
        Task task = repository.getById(id);
        if (task != null) {
            repository.delete(task);
        } else throw new Exception("Cannot delete task");
    }

    @Override
    public Task getById(Integer id) throws Exception {
        Task task = repository.getById(id);
        if (task != null) {
            return task;
        } else throw new Exception("Cannot find task");

    }

    @Override
    public List<Task> getList() {
        return repository.findAll();

    }

    @Override
    public List<Task> findByIdFolder(Integer id) {

        return repository.findByIdFolder(id);
    }


}
