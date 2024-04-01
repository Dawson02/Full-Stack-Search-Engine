package finalsprint.entities;
import jakarta.persistence.*;
//import jakarta.persistence.Id;
//import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Animal {

    @Id
    private Long id;
    private String species;
    private int age;
    private String color;
    private double weight;
    private String habitat;
    private String diet;
    private int averageLifespan;
    private String predators;

    // Getters and setters
}