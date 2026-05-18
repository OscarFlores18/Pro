package com.sample.core.dao;

import java.util.List;

import com.sample.core.domain.Persona;

public interface PersonaDao {

    void insert(Persona p);

    List<Persona> list();

    void update(Persona p);

    void delete(int id);
}