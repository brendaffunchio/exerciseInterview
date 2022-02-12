package challenge.interview.backendExercise.Controllers;

import challenge.interview.backendExercise.Models.Folder;
import challenge.interview.backendExercise.Services.IFolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/folder")
public class FolderController {

    @Autowired
    private IFolderService service;

    @PostMapping(path = "/create")
    public Folder addfolder(@RequestBody Folder folder) throws Exception {
        try {
            return service.create(folder);
        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping(path = "/delete")
    public String deleteFolder(@RequestParam("id") Integer id) throws Exception {

        Boolean result = service.delete(id);

        if (result) {
            return "Folder deleted";
        } else return "Cannot delete folder";
    }

    @GetMapping(path = "/get")
    public Folder getFolder(@RequestParam("id") Integer id) throws Exception {

        try {
            return service.getById(id);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping(path = "/getAll")
    public List<Folder> getAllFolders() {

        return service.getList();
    }

}



