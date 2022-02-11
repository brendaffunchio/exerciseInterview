package challenge.interview.backendExercise.Repositories;
import challenge.interview.backendExercise.Models.Folder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IFolderRepository extends JpaRepository<Folder,Integer> {


}
