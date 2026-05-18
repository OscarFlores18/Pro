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
        String sql = "INSERT INTO persona(nombre, edad, dni, genero) VALUES (?, ?, ?, ?)";

        try {
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, p.getNombre());
            ps.setInt(2, p.getEdad());
            ps.setString(3, p.getDni());
            ps.setString(4, p.getGenero().name());
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
                p.setEdad(rs.getInt("edad"));
                p.setDni(rs.getString("dni"));
                p.setGenero(Genero.valueOf(rs.getString("genero")));
                lista.add(p);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return lista;
    }

    @Override
    public void update(Persona p) {
        String sql = "UPDATE persona SET nombre=?, edad=?, dni=?, genero=? WHERE id=?";

        try {
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, p.getNombre());
            ps.setInt(2, p.getEdad());
            ps.setString(3, p.getDni());
            ps.setString(4, p.getGenero().name());
            ps.setInt(5, p.getId()); 
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