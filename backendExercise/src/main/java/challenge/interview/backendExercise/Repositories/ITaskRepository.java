package challenge.interview.backendExercise.Repositories;

import challenge.interview.backendExercise.Models.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ITaskRepository extends JpaRepository<Task, Integer> {

    @Query("SELECT * FROM TASK WHERE idFolder.id = :id")
    List<Task> findByIdFolder(Integer id);

}
