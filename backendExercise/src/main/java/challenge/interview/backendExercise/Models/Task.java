package challenge.interview.backendExercise.Models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="TASK")
public class Task {

    @Id
    @GeneratedValue
    private Integer id;
    @Column(nullable = false)
    private String description;
    private Boolean finished;
    @ManyToOne()
    @JoinColumn(name = "folder_id", nullable = true)
    private Folder folder;

}
