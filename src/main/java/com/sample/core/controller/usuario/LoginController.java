package com.sample.core.controller.usuario;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/login")
public class LoginController extends HttpServlet {

    private static final long serialVersionUID = 1L;

    // Datos del admin
    private final String NOMBRE = "admin";
    private final String PASSWORD = "1234";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String nombre = request.getParameter("nombre");
        String password = request.getParameter("password");

        if (NOMBRE.equals(nombre)
                && PASSWORD.equals(password)) {

            HttpSession session = request.getSession();
            session.setAttribute("admin", nombre);

            response.sendRedirect("Persona/Personahome.jsp");

        } else {

            request.setAttribute("error", "Nombre, contraseña incorrectos.");
            request.getRequestDispatcher("/Login/login.jsp").forward(request, response);

        }
    }
}