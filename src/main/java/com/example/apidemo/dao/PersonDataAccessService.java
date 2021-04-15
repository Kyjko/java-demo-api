package com.example.apidemo.dao;

import com.example.apidemo.model.Person;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

import java.util.Optional;
import java.util.UUID;

@Repository("sqlDao")
public class PersonDataAccessService implements PersonDao {

    private SessionFactory sessionFactory;
    private StandardServiceRegistry reg = new StandardServiceRegistryBuilder().configure().build();

    public PersonDataAccessService() {
        try {
            sessionFactory = new MetadataSources(reg).buildMetadata().buildSessionFactory();
        } catch(Exception ex) {
            ex.printStackTrace();
            System.err.println("error while initializing sessionFactory!");
        }
    }

    @Override
    public int insertPerson(UUID id, Person person) {

        Person toInsert = new Person(id, person.getName());
        Session session = sessionFactory.openSession();
        session.beginTransaction();

        session.save(toInsert);

        session.getTransaction().commit();
        session.close();

        return 0;
    }

    @Override
    public int deletePersonById(UUID id) {
        Optional<Person> toRemove = getPersonById(id);
        if(toRemove.isEmpty()) {
            return 0;
        }

        Session session = sessionFactory.openSession();
        session.beginTransaction();

        String hql = "delete from Person where id = :userid";
        Query query = session.createQuery(hql);
        query.setParameter("userid", id);
        int s = query.executeUpdate();
        System.out.println(s);
        session.getTransaction().commit();
        session.close();

        return 1;
    }

    @Override
    public int updatePersonById(UUID id, Person person) {

        return getPersonById(id).map(p -> {
            Session session = sessionFactory.openSession();
            session.beginTransaction();

            String hql = "update Person set name=:username where id = :userid";
            Query query = session.createQuery(hql);
            query.setParameter("username", person.getName());
            query.setParameter("userid", id);
            int s = query.executeUpdate();
            System.out.println(s);
            session.getTransaction().commit();
            session.close();

            return 1;

        }).orElse(0);

    }

    @Override
    public Optional<Person> getPersonById(UUID id) {
        return getAllPeople().stream()
                .filter(p -> p.getId().equals(id))
                .findFirst();
    }

    @Override
    public List<Person> getAllPeople() {
        Session session = sessionFactory.openSession();
        session.beginTransaction();

        List<Person> res = session.createQuery("from Person", Person.class).list();

        session.getTransaction().commit();
        session.close();

        return res;
    }
}
