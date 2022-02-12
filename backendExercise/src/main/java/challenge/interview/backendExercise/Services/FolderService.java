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

    @Autowired
    private IFolderRepository repository;
    @Autowired
    private ITaskService taskService;


    @Override
    public Folder create(Folder folder) throws Exception {
        if (folder != null) {
            return repository.save(folder);

        } else throw new Exception("Cannot create folder");
    }


    @Override
    public Boolean delete(Integer id) throws Exception {
        Folder folder = repository.getById(id);

        if (folder != null) {
            for (Task task: taskService.getByIdFolder(id)
            ) {
                taskService.delete(task.getId());

            }
            repository.delete(folder);
            return true;
        } else return false;
    }

    @Override
    public Folder getById(Integer id) throws Exception {
        Folder folder = repository.findById(id).get();
        if (folder != null) {
            return folder;

        } else throw new Exception("Cannot find folder");


    }

    @Override
    public List<Folder> getList() {

        return repository.findAll();
    }


    }

