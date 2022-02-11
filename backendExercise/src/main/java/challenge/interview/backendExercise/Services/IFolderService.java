package challenge.interview.backendExercise.Services;

import challenge.interview.backendExercise.Models.Folder;

import java.util.List;

public interface IFolderService {

    void create(Folder folder);
    void delete(Integer id);
    Folder getById(Integer id);
    List<Folder> getList();
}
