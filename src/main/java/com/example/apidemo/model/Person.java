package com.example.apidemo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "users")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "s_id", unique = true, nullable = false)
    private int s_id;

    @Column(name = "id", nullable = false)
    @Type(type = "uuid-char")
    private UUID id;

    @Column(name = "name", nullable = false)
    private String name;

    public Person(@JsonProperty("id") UUID id,
                  @JsonProperty("name") String name) {

        this.id = id;
        this.name = name;
    }

    public Person() {}

    public String getName() {
        return name;
    }

    public UUID getId() {
        return id;
    }

    public String toString() {
        return "(id)" + id.toString() + " - " + name;
    }
}
