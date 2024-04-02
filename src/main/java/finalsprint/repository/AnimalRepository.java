package finalsprint.repository;
import finalsprint.entities.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.domain.Specification;
import java.util.List;

public interface AnimalRepository extends JpaRepository<Animal, Long> {

    List<Animal> findAll(Specification<Animal> spec);

}
