package com.sample.core.controller.usuario;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Base64;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/loginFacial")
public class LoginFacialController extends HttpServlet {


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {


        try {

            // recibe la imagen enviada desde javascript
            String imagen = request.getReader().readLine();
            // la imagen viene así:
            // data:image/png;base64,xxxxx
            //
            // eliminamos la parte inicial
            imagen = imagen.split(",")[1];
            // convierte texto base64 a bytes reales
            byte[] bytes =
                    Base64.getDecoder().decode(imagen);
            // obtiene la carpeta scripts del proyecto
            // funciona en tu PC y en Docker
            String rutaScripts =
                    getServletContext()
                    .getRealPath("/scripts");
            // crea archivo login.png
            File archivoLogin =
                    new File(
                        rutaScripts,
                        "login.png"
                    );

            // guarda la foto capturada
            FileOutputStream fos =
                    new FileOutputStream(archivoLogin);
            fos.write(bytes);
            fos.close();
            // ubicación del python
            File python =
                    new File(
                        rutaScripts,
                        "reconocer.py"
                    );
            // ejecuta:
            // python reconocer.py
            ProcessBuilder pb =
                    new ProcessBuilder(
                        "python",
                        python.getAbsolutePath()
                    );

            Process process =
                    pb.start();
            // lee lo que devuelve Python
            BufferedReader reader =
                    new BufferedReader(
                        new InputStreamReader(
                            process.getInputStream()
                        )
                    );
            String resultado =
                    reader.readLine();

            System.out.println(
                "RESULTADO PYTHON: "
                + resultado
            );
            // si Python no devolvió nada
            if(resultado == null){

                resultado = "ERROR";
            }
            // manda respuesta al javascript
            response.getWriter()
                    .write(resultado);
        }catch(Exception e){
            e.printStackTrace();
            response.getWriter()
                    .write("ERROR");
        }

    }

}