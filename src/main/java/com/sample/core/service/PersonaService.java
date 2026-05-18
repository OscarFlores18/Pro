package com.sample.core.service;

import java.util.List;
import com.sample.core.domain.Persona;

public interface PersonaService {

    void guardar(Persona p);
    List<Persona> listar();
    void actualizar(Persona p);
    void eliminar(int id);
}