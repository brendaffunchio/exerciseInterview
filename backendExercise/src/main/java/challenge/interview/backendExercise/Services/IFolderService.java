package challenge.interview.backendExercise.Services;

import challenge.interview.backendExercise.Models.Folder;
import challenge.interview.backendExercise.Models.Task;

import java.util.List;

public interface IFolderService {

    Folder create(Folder folder) throws Exception;
    void delete(Integer id) throws Exception;
    Folder getById(Integer id) throws Exception;
    List<Folder> getList();
    public void addTaskInFolder(Integer id,Task task) throws Exception;

}
