package finalsprint.service;
import finalsprint.entities.Animal;
import finalsprint.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;


@Service
public class AnimalService {
    private final AnimalRepository animalRepository;

    @Autowired
    public AnimalService(AnimalRepository animalRepository) {
        this.animalRepository = animalRepository;
    }

    public List<Animal> getAllAnimals() {
        return animalRepository.findAll();
    }

    public Animal getAnimalById(Long id) {
        return animalRepository.findById(id).orElse(null);
    }

    public List<Animal> searchAnimals(String searchString) {
        Specification<Animal> spec = Specification.where(null);

        if (!StringUtils.isEmpty(searchString)) {
            spec = spec.or((root, query, criteriaBuilder) ->
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("species")), "%" + searchString.toLowerCase() + "%")
            ).or((root, query, criteriaBuilder) ->
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("color")), "%" + searchString.toLowerCase() + "%")
            ).or((root, query, criteriaBuilder) ->
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("habitat")), "%" + searchString.toLowerCase() + "%")
            ).or((root, query, criteriaBuilder) ->
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("diet")), "%" + searchString.toLowerCase() + "%")
            ).or((root, query, criteriaBuilder) ->
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("predators")), "%" + searchString.toLowerCase() + "%")
            );
        }

        return animalRepository.findAll(spec);
    }
}
