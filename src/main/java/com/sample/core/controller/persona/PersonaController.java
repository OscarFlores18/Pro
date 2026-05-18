package com.sample.core.controller.persona;

import java.io.IOException;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import com.google.gson.Gson;
import com.sample.core.domain.Persona;
import com.sample.core.service.PersonaServiceImp;

@WebServlet("/listarPersona")
public class PersonaController extends HttpServlet {

    private PersonaServiceImp service = new PersonaServiceImp();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        List<Persona> lista = service.listar();

        String json = new Gson().toJson(lista);

        response.setContentType("application/json");
        response.getWriter().write(json);
    }
}