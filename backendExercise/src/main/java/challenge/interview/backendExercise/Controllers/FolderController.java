package challenge.interview.backendExercise.Controllers;

import challenge.interview.backendExercise.Models.Folder;
import challenge.interview.backendExercise.Services.IFolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/folder")
public class FolderController {

    private IFolderService service;

    @Autowired
    public FolderController(IFolderService service) {
        this.service = service;
    }

    @PostMapping(path = "/create",consumes = "application/json",produces = "application/json")
    public Folder addfolder(@RequestBody Folder folder) throws Exception {
        try {
            return service.create(folder);
        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping(path = "/delete",consumes = "application/json",produces = "application/json")
    public String deleteFolder(@RequestBody Integer id) throws Exception {
        try {
            service.delete(id);
            return ("Folder deleted");
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    @GetMapping (path="/get", consumes = "application/json",produces = "application/json" )
    public Folder getFolder(@RequestBody Integer id)throws Exception{

        try{
            return service.getById(id);
        }catch(Exception e){
            return null;
        }
    }
    @GetMapping(path="/getAll",produces = "application/json")
    public List<Folder> getAllFolders(){

        return service.getList();
    }

}



