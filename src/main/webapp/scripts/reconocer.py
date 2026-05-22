import face_recognition

imagen_login = face_recognition.load_image_file(
    r"C:\Users\Rog Zephyrus\Desktop\Trabajos\Proyectos maven\Proyectof\src\main\webapp\scripts\login.png"
)

imagen_admin = face_recognition.load_image_file(
    r"C:\Users\Rog Zephyrus\Desktop\Trabajos\Proyectos maven\Proyectof\src\main\webapp\scripts\admin.jpg"
)

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