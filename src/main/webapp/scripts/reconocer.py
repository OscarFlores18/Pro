import sys
import face_recognition

ruta_login = sys.argv[1]
ruta_admin = sys.argv[2]

imagen_login = face_recognition.load_image_file(ruta_login)
imagen_admin = face_recognition.load_image_file(ruta_admin)

encoding_login = face_recognition.face_encodings(imagen_login)
encoding_admin = face_recognition.face_encodings(imagen_admin)

if len(encoding_login) == 0 or len(encoding_admin) == 0:
    print("false")
    exit()

resultado = face_recognition.compare_faces(
    [encoding_admin[0]],
    encoding_login[0]
)

if resultado[0]:
    print("true")
else:
    print("false")