package finalsprint.controller;
import finalsprint.entities.Animal;
import finalsprint.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/animals")
public class AnimalController {
    private final AnimalService animalService;

    @Autowired
    public AnimalController(AnimalService animalService) {
        this.animalService = animalService;
    }

    @GetMapping
    public List<Animal> getAllAnimals() {
        return animalService.getAllAnimals();
    }

    @GetMapping("/{id}")
    public Animal getAnimalById(@PathVariable Long id) {
        return animalService.getAnimalById(id);
    }

    @GetMapping("/search")
    public List<Animal> searchAnimals(@RequestParam(required = false) String species,
                                      @RequestParam(required = false) Integer age,
                                      @RequestParam(required = false) String color,
                                      @RequestParam(required = false) Double weight,
                                      @RequestParam(required = false) String habitat,
                                      @RequestParam(required = false) String diet,
                                      @RequestParam(required = false) Integer averageLifespan,
                                      @RequestParam(required = false) String predators) {
        return animalService.searchAnimals(species, age, color, weight, habitat, diet, averageLifespan, predators);
    }
}