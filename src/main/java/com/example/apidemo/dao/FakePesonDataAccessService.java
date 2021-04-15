package com.example.apidemo.dao;

import com.example.apidemo.model.Person;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("fakeDao")
public class FakePesonDataAccessService implements PersonDao{

    private static List<Person> DB = new ArrayList<>();

    @Override
    public int insertPerson(UUID id, final Person person) {
        DB.add(new Person(id, person.getName()));
        return 1;
    }

    @Override
    public int deletePersonById(UUID id) {
        Optional<Person> toRemove = getPersonById(id);
        if(toRemove.isEmpty()) {
            return 0;
        }
        DB.remove(toRemove.get());
        return 1;
    }

    @Override
    public int updatePersonById(UUID id, final Person person) {
        return getPersonById(id).map(p -> {
            int indexOfPerson = DB.indexOf(p);
            if(indexOfPerson >= 0) {
                DB.set(indexOfPerson, person);
                return 1;
            }
            return 0;
        }).orElse(0);
    }

    @Override
    public Optional<Person> getPersonById(UUID id) {
        return DB.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst();
    }

    @Override
    public List<Person> getAllPeople() {
        return DB;
    }

}
