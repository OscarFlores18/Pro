import face_recognition
import os

# ubicación donde está este archivo
ruta = os.path.dirname(os.path.abspath(__file__))
# imagen capturada por la cámara
imagen_login = face_recognition.load_image_file(
    os.path.join(ruta,"login.png")
)
# imagen del administrador registrado
imagen_admin = face_recognition.load_image_file(
    os.path.join(ruta,"admin.jpg")
)
# obtener caras
encoding_login = face_recognition.face_encodings(imagen_login)
encoding_admin = face_recognition.face_encodings(imagen_admin)

# si no encontró cara en la cámara
if len(encoding_login) == 0:

    print("NO_FACE")
    exit()
# si no existe cara del admin
if len(encoding_admin) == 0:

    print("NO_ADMIN")
    exit()
# compara caras
resultado = face_recognition.compare_faces(
    [encoding_admin[0]],
    encoding_login[0]
)

# si coincide
if resultado[0]:
    print("ADMIN")
# si hay cara pero no es el admin
else:
    print("NO_ADMIN")