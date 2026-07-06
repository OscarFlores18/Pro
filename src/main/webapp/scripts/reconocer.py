import face_recognition
import os

# ubicación donde está este archivo
ruta = os.path.dirname(os.path.abspath(__file__))

# imagen capturada por la camara
imagen_login = face_recognition.load_image_file(
    os.path.join(ruta, "login.png")
)

encoding_login = face_recognition.face_encodings(imagen_login)

# si no encontro cara en la cámara
if len(encoding_login) == 0:
    print("NO_FACE")
    exit()

# lista de administradores
admins = ["admin.jpg"]

# recorrer todos los administradores
for admin in admins:

    ruta_admin = os.path.join(ruta, admin)

    # si el archivo no existe, lo salta
    if not os.path.exists(ruta_admin):
        continue

    imagen_admin = face_recognition.load_image_file(ruta_admin)
    encoding_admin = face_recognition.face_encodings(imagen_admin)

    # si esa imagen no tiene rostro, la salta
    if len(encoding_admin) == 0:
        continue

    # comparar
    resultado = face_recognition.compare_faces(
        [encoding_admin[0]],
        encoding_login[0],
        tolerance =0.55
    )

    if resultado[0]:
        print("ADMIN")
        exit()

# si termino el recorrido y no encontró coincidencias
print("NO_ADMIN")