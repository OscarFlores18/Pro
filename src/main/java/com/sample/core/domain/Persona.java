package com.sample.core.domain;
import com.sample.core.enums.Genero;

public class Persona {
	    private int id;
	    private String nombre;
	    
	    private int edad;
	    private String dni;
	    private Genero genero;

	    
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

	    
	    
	    
	   
	

