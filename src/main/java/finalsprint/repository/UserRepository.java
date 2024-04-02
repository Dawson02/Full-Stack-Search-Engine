package finalsprint.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import finalsprint.entities.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository <User, Long> {

    User findByUsername(String username);
    User findByEmail(String email);

    User findUserById(Long id);
}


