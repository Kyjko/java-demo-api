package com.example.apidemo.service;

import com.example.apidemo.dao.PersonDao;
import com.example.apidemo.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PersonService {
    private final PersonDao personDao;

    @Autowired
    public PersonService(@Qualifier("sqlDao") PersonDao personDao) {
        this.personDao = personDao;
    }

    public int addPerson(final Person person) {
        return personDao.addPerson(person);
    }

    public Optional<Person> getPersonById(UUID id) {
            return personDao.getPersonById(id);
    }

    public int updatePersonById(UUID id, final Person person) {
        return personDao.updatePersonById(id, person);
    }

    public int deletePersonById(UUID id) {
        return personDao.deletePersonById(id);
    }

    public List<Person> getAllPeople() {
        return personDao.getAllPeople();
    }
}
