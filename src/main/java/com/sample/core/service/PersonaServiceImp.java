package com.sample.core.service;

import java.util.List;
import com.sample.core.dao.*;
import com.sample.core.domain.Persona;

public class PersonaServiceImp implements PersonaService {

    private PersonaDao dao = new PersonaDaoImp();

    @Override
    public void guardar(Persona p) {
        dao.insert(p);
    }

    @Override
    public List<Persona> listar() {
        return dao.list();
    }

    @Override
    public void actualizar(Persona p) {
        dao.update(p);
    }

    @Override
    public void eliminar(int id) {
        dao.delete(id);
    }
}