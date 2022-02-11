package challenge.interview.backendExercise.Services;

import challenge.interview.backendExercise.Models.Folder;

import java.util.List;

public interface IFolderService {

    void create(Folder folder) throws Exception;
    void delete(Integer id) throws Exception;
    Folder getById(Integer id) throws Exception;
    List<Folder> getList();
}
