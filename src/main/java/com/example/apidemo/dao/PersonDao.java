package com.example.apidemo.dao;

import com.example.apidemo.model.Person;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PersonDao {
    int insertPerson(UUID id, final Person person);
    default int addPerson(final Person person) {
        UUID id = UUID.randomUUID();
        return insertPerson(id, person);
    }

    int deletePersonById(UUID id);
    int updatePersonById(UUID id, final Person person);

    Optional<Person> getPersonById(UUID id);

    List<Person> getAllPeople();

}
