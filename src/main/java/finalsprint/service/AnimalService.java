package finalsprint.service;
import finalsprint.entities.Animal;
import finalsprint.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        List <Animal> animalSearchResults = new ArrayList<>();
        List <Animal> animals = animalRepository.findAll();

        if (animals == null) {
            System.out.println("Error: No animals found");
        } else {
            for (Animal animal : animals) {
                if (animal.getSpecies().toLowerCase().contains(searchString.toLowerCase())) {
                    animalSearchResults.add(animal);
               }
                if (animal.getAge().contains(searchString)) {
                    animalSearchResults.add(animal);
                }
                if (animal.getColor().toLowerCase().contains(searchString.toLowerCase())) {
                    animalSearchResults.add(animal);
                }
                if (animal.getWeight().contains(searchString)) {
                    animalSearchResults.add(animal);
                }
                if (animal.getHabitat().toLowerCase().contains(searchString.toLowerCase())) {
                    animalSearchResults.add(animal);
                }
                if (animal.getDiet().toLowerCase().contains(searchString.toLowerCase())) {
                    animalSearchResults.add(animal);
                }
                if (animal.getAverageLifespan().contains(searchString)) {
                    animalSearchResults.add(animal);
                }
                if (animal.getPredators().toLowerCase().contains(searchString.toLowerCase())) {
                    animalSearchResults.add(animal);
                }
            }
        }

        return animalSearchResults;
    }

}
