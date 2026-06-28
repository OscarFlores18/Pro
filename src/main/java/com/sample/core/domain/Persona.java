package com.sample.core.domain;
import com.sample.core.enums.Genero;

public class Persona {
	    private int id;
	    private String nombre;
	    
	    private int edad;
	    private String dni;
	    private Genero genero;

	    
	    private String apellido;
	    private String localidad;
	    private String correo;
	    private String telefono;
	    private String estado;
	    
	    
		public String getApellido() {
			return apellido;
		}
		public void setApellido(String apellido) {
			this.apellido = apellido;
		}
		public String getLocalidad() {
			return localidad;
		}
		public void setLocalidad(String localidad) {
			this.localidad = localidad;
		}
		public String getCorreo() {
			return correo;
		}
		public void setCorreo(String correo) {
			this.correo = correo;
		}
		public String getTelefono() {
			return telefono;
		}
		public void setTelefono(String telefono) {
			this.telefono = telefono;
		}
		public String getEstado() {
			return estado;
		}
		public void setEstado(String estado) {
			this.estado = estado;
		}
		
		// ostras
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getNombre() {
			return nombre;
		}
		public void setNombre(String nombre) {
			this.nombre = nombre;
		}
		public int getEdad() {
			return edad;
		}
		public void setEdad(int edad) {
			this.edad = edad;
		}
		public String getDni() {
			return dni;
		}
		public void setDni(String dni) {
			this.dni = dni;
		}
		public Genero getGenero() {
			return genero;
		}
		public void setGenero(Genero genero) {
			this.genero = genero;
		}
}

	    
	    
	    
	   
	

