package challenge.interview.backendExercise.Services;


import challenge.interview.backendExercise.Models.Folder;
import challenge.interview.backendExercise.Models.Task;
import challenge.interview.backendExercise.Repositories.IFolderRepository;
import challenge.interview.backendExercise.Repositories.ITaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FolderService implements IFolderService {

    private IFolderRepository repository;
    private ITaskService taskService;

    @Autowired
    public FolderService(IFolderRepository repository, ITaskService taskService) {

        this.repository = repository;
        this.taskService = taskService;
    }

    @Override
    public Folder create(Folder folder) throws Exception {
        if (folder != null) {
            return repository.save(folder);

        } else throw new Exception("Cannot create folder");
    }


    @Override
    public void delete(Integer id) throws Exception {
        Folder folder = repository.getById(id);
        if (folder != null) {
            repository.delete(folder);
        } else throw new Exception("Cannot delete folder");
    }

    @Override
    public Folder getById(Integer id) throws Exception {
        Folder folder = repository.getById(id);
        if (folder != null) {
            return folder;

        } else throw new Exception("Cannot find folder");


    }

    @Override
    public List<Folder> getList() {

        return repository.findAll();
    }

    @Override
    public void addTaskInFolder(Integer id,Task task) throws Exception {
        Folder folder = repository.getById(id);
        if (folder != null) {
            folder.getTasks().add(task);
            repository.save(folder);

        } else throw new Exception("Cannot create task in this folder");
    }
    }

