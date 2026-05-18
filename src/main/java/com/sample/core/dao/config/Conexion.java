package com.sample.core.dao.config;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {

    public static Connection getConnection() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            return DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/personas_db",
                "root",
                ""
            );
        } catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }
}