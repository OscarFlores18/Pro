package com.sample.core.dao;

import java.sql.*;
import java.util.*;

import com.sample.core.dao.config.Conexion;
import com.sample.core.domain.Persona;
import com.sample.core.enums.Genero;

public class PersonaDaoImp implements PersonaDao {

    Connection conn = Conexion.getConnection();

    @Override
    public void insert(Persona p) {
    	
    	
        String sql = "INSERT INTO persona(nombre, apellido, edad, dni, genero, localidad, correo, telefono, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try {
        	
        	
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, p.getNombre());
            ps.setString(2, p.getApellido());
            ps.setInt(3, p.getEdad());
            ps.setString(4, p.getDni());
            ps.setString(5, p.getGenero().name());
            ps.setString(6, p.getLocalidad());
            ps.setString(7, p.getCorreo());
            ps.setString(8, p.getTelefono());
            ps.setString(9, p.getEstado());
            

            ps.executeUpdate(); 
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Persona> list() {

        List<Persona> lista = new ArrayList<>();
        String sql = "SELECT * FROM persona";

        try {
            PreparedStatement ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Persona p = new Persona();

                p.setId(rs.getInt("id"));
                p.setNombre(rs.getString("nombre"));
                p.setApellido(rs.getString("apellido"));
                p.setEdad(rs.getInt("edad"));
                p.setDni(rs.getString("dni"));
                p.setGenero(Genero.valueOf(rs.getString("genero")));
                p.setLocalidad(rs.getString("localidad"));
                p.setCorreo(rs.getString("correo"));
                p.setTelefono(rs.getString("telefono"));
                p.setEstado(rs.getString("estado"));
                lista.add(p);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return lista;
    }

    @Override
    public void update(Persona p) {
        String sql = "UPDATE persona SET nombre=?, apellido=?, edad=?, dni=?, genero=?, localidad=?, correo=?, telefono=?, estado=? WHERE id=?";
        try {
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, p.getNombre());
            ps.setString(2, p.getApellido());
            ps.setInt(3, p.getEdad());
            ps.setString(4, p.getDni());
            ps.setString(5, p.getGenero().name());
            ps.setString(6, p.getLocalidad());
            ps.setString(7, p.getCorreo());
            ps.setString(8, p.getTelefono());
            ps.setString(9, p.getEstado());
            ps.setInt(10, p.getId());
            
            ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(int id) {
        String sql = "DELETE FROM persona WHERE id=?";

        try {
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setInt(1, id);
            ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}