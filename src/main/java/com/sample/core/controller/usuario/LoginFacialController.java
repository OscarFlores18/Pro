package com.sample.core.controller.usuario;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.util.Base64;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/loginFacial")
public class LoginFacialController extends HttpServlet {

    protected void doPost(HttpServletRequest request,HttpServletResponse response){

        try{

            String imagen =
                request.getReader().readLine();

            imagen = imagen.split(",")[1];

            byte[] bytes =
                Base64.getDecoder().decode(imagen);

            String rutaLogin = request.getServletContext()
            	    .getRealPath("/scripts/login.png");

            	FileOutputStream fos = new FileOutputStream(rutaLogin);

            fos.write(bytes);
            fos.close();

            String rutaPython = request.getServletContext()
            	    .getRealPath("/scripts/reconocer.py");

            String rutaAdmin = request.getServletContext()
            	    .getRealPath("/scripts/admin.jpg");

            	ProcessBuilder pb = new ProcessBuilder(
            	    "python",
            	    rutaPython,
            	    rutaLogin,
            	    rutaAdmin
            	);
            Process process = pb.start();

            BufferedReader reader =
                new BufferedReader(
                    new InputStreamReader(
                        process.getInputStream()
                    )
                );

            String resultado = reader.readLine();

            System.out.println("RESULTADO PYTHON: " + resultado);

            if(resultado == null){
                resultado = "false";
            }

            if(resultado.equals("true")){

                response.getWriter().write("true");

            }else{

                response.getWriter().write("false");

            }

        }catch(Exception e){

            e.printStackTrace();

        }

    }

}