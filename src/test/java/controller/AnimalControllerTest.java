package controller;

import finalsprint.controller.AnimalController;
import finalsprint.entities.Animal;
import finalsprint.service.AnimalService;
import finalsprint.repository.AnimalRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class AnimalControllerTest {

    @Mock
    private AnimalService animalService;

    @InjectMocks
    private AnimalController animalController;

    @Mock
    private AnimalRepository AnimalRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllAnimals() {
        // Mock data
        List<Animal> animals = new ArrayList<>();
        Animal newAnimal = new Animal();
        newAnimal.setSpecies("Dog");
        newAnimal.setAge("5");
        newAnimal.setColor("Black");
        newAnimal.setWeight("10");
        newAnimal.setHabitat("House");
        newAnimal.setDiet("Carnivore");
        newAnimal.setAverageLifespan("10");
        newAnimal.setPredators("Tiger");
        animals.add(newAnimal);

        // Mock behavior of animalRepository
        when(animalService.getAllAnimals()).thenReturn(animals);

        // Call controller method
        List<Animal> result = animalController.getAllAnimals();

        // Verify behavior
        assertEquals(animals.size(), result.size());
        assertEquals(animals.get(0).getSpecies(), result.get(0).getSpecies());
        assertEquals(animals.get(0).getAge(), result.get(0).getAge());
        assertEquals(animals.get(0).getColor(), result.get(0).getColor());
        assertEquals(animals.get(0).getWeight(), result.get(0).getWeight());
        assertEquals(animals.get(0).getHabitat(), result.get(0).getHabitat());
        assertEquals(animals.get(0).getDiet(), result.get(0).getDiet());
        assertEquals(animals.get(0).getAverageLifespan(), result.get(0).getAverageLifespan());
        assertEquals(animals.get(0).getPredators(), result.get(0).getPredators());

        verify(animalService, times(1)).getAllAnimals();
    }


    @Test
    public void testSearchAnimals() {
        // Mock data
        List<Animal> animals = new ArrayList<>();
        Animal dog = new Animal();
        dog.setSpecies("Dog");
        animals.add(dog);

        // Mock behavior of service
        when(animalService.searchAnimals("Dog")).thenReturn(animals);

        // Call controller method
        List<Animal> result = animalController.searchAnimals("Dog");

        // Verify behavior
        assertEquals(animals.size(), result.size());
        assertEquals(animals.get(0).getSpecies(), result.get(0).getSpecies());
        verify(animalService, times(1)).searchAnimals("Dog");
    }
}

