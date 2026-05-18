package com.sample.core.controller.persona;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import com.sample.core.enums.Genero;
import com.sample.core.domain.Persona;
import com.sample.core.service.PersonaServiceImp;

@WebServlet("/editarPersona")
public class PersonaEditarController extends HttpServlet {

    private PersonaServiceImp service = new PersonaServiceImp();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        try {
            String edadStr = request.getParameter("edad");

            if (edadStr == null || edadStr.isEmpty()) {
                response.getWriter().write("Edad vacía");
                return;
            }

            String generoStr = request.getParameter("genero");

            if (generoStr == null || generoStr.isEmpty()) {
                response.getWriter().write("Genero vacío");
                return;
            }

            Persona p = new Persona();
            p.setId(Integer.parseInt(request.getParameter("id")));
            p.setNombre(request.getParameter("nombre"));
            p.setEdad(Integer.parseInt(edadStr));
            p.setDni(request.getParameter("dni"));
            p.setGenero(Genero.valueOf(generoStr.toUpperCase()));

            service.actualizar(p);

            response.getWriter().write("ok");

        } catch (Exception e) {
            e.printStackTrace();
            response.getWriter().write("error");
        }
    }
}