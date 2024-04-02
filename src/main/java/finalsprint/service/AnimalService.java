package finalsprint.service;
import finalsprint.entities.Animal;
import finalsprint.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.data.jpa.domain.Specification;

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

    public List<Animal> searchAnimals(String species, Integer age, String color, Double weight, String habitat, String diet, Integer averageLifespan, String predators) {
        // Construct a specification with all search criteria combined using logical OR
        Specification<Animal> spec = Specification.where(null);

        if (species != null && !species.isEmpty()) {
            spec = spec.or((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("species"), species));
        }
        if (age != null) {
            spec = spec.or((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("age"), age));
        }
        if (color != null && !color.isEmpty()) {
            spec = spec.or((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("color"), color));
        }
        if (weight != null) {
            spec = spec.or((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("weight"), weight));
        }
        if (habitat != null && !habitat.isEmpty()) {
            spec = spec.or((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("habitat"), habitat));
        }
        if (diet != null && !diet.isEmpty()) {
            spec = spec.or((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("diet"), diet));
        }
        if (averageLifespan != null) {
            spec = spec.or((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("averageLifespan"), averageLifespan));
        }
        if (predators != null && !predators.isEmpty()) {
            spec = spec.or((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("predators"), predators));
        }

        return animalRepository.findAll(spec);
    }
}
