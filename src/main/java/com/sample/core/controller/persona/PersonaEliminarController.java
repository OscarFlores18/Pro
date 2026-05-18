package com.sample.core.controller.persona;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import com.sample.core.service.PersonaServiceImp;

@WebServlet("/eliminarPersona")
public class PersonaEliminarController extends HttpServlet {

    private PersonaServiceImp service = new PersonaServiceImp();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        try {
            int id = Integer.parseInt(request.getParameter("id"));

            service.eliminar(id);

            response.getWriter().write("ok");

        } catch (Exception e) {
            e.printStackTrace();
            response.getWriter().write("error");
        }
    }
}