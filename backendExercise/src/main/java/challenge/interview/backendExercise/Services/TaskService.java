package challenge.interview.backendExercise.Services;

import challenge.interview.backendExercise.Models.Folder;
import challenge.interview.backendExercise.Models.Task;
import challenge.interview.backendExercise.Repositories.IFolderRepository;
import challenge.interview.backendExercise.Repositories.ITaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService implements ITaskService {

    @Autowired
    private ITaskRepository repository;
    @Autowired
    private IFolderRepository folderRepository;

    @Override
    public Task create(Task task,Integer id) throws Exception {
        Task newTask = null;
           if (task != null) {
           addTaskInFolder(task,id);
           newTask = repository.save(task);

        } else throw new Exception("Cannot create task");

           return newTask;
        }


    @Override
    public Task edit(Task task) throws Exception {

        Task oldTask = repository.getById(task.getId());

        if (oldTask != null) {
            oldTask.setDescription(task.getDescription());
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
        Task task = repository.findById(id).get();
        if (task != null) {
            return task;
        } else throw new Exception("Cannot find task");

    }

    @Override
    public List<Task> getList() {
        return repository.findAll();

    }

    @Override
    public List<Task> getByIdFolder(Integer id) {

        return repository.findByFolder_id(id);
    }
    @Override
    public void addTaskInFolder(Task task,Integer id){
        if(id!=null) {
            Folder folder1 = folderRepository.getById(id);
            task.setFolder(folder1);
        }


    }

}
