#usuario: MarianaQ, contrasena: mariana1354
#usuario: SebastianF, contrasena: sebas3608
#usuario: FernandaL, contrasena: fer3781
usuario1= "MarianaQ"
usuario2= "1"
usuario3= "FernandaL"
contrasena1= "mariana1354"
contrasena2= "1"
contrasena3= "fer3781"
ventas = []


"""Módulo de Logueo"""
usuario = str(input("Bienvenido a Medipets, digite el usuario: "))
contrasena = str(input("Digite la contraseña: "))

if((usuario == usuario1) and (contrasena == contrasena1)):
    print("Bienvenida Mariana!!")
      
elif((usuario == usuario2) and (contrasena == contrasena2)):
    print("Bienvenido Sebas!!")
      
elif((usuario == usuario3) and (contrasena == contrasena3)):
    print("Bienvenida Fernanda!!")
else:
    print ("Datos incorrectos")
    exit()

def buscar_dueno(duenos, cedula):
    for dueno in duenos:
        if dueno[1] == cedula:
            return dueno
    return None

def buscar_medico_disponible(medicos, disponibilidad, dia, horario):
    for medico in medicos:
        if medico[4] == disponibilidad and (horario in ["Mañana", "Tarde"] or dia < 6):
            return medico
    return None

def buscar_cita_agendada(citas, dia, horario):
    for cita in citas:
        if cita[2] == dia and cita[3] == horario:
            return cita
    return None

def registrar_medico(medicos):
    nombre = input("Ingrese nombre del médico: ")
    codigo = input("Ingrese código del médico: ")
    telefono = input("Ingrese teléfono del médico: ")
    correo = input("Ingrese correo del médico: ")
    disponibilidad = input("Ingrese disponibilidad de horario del médico (Mañana L-V, Tardes L-V, Fines de Semana (SD)): ")
    medicos.append((codigo, nombre, telefono, correo, disponibilidad))

def registrar_dueno(duenos):
    nombre = input("Ingrese nombre completo del dueño: ")
    cedula = input("Ingrese cédula del dueño: ")
    celular = input("Ingrese celular del dueño: ")
    correo = input("Ingrese correo del dueño: ")
    direccion = input("Ingrese dirección del dueño: ")
    duenos.append((nombre, cedula, celular, correo, direccion))
    

def registrar_mascota(mascotas):
    
    cedula_dueno = input("Ingrese la cédula del dueño de la mascota: ")
    dueno = buscar_dueno(duenos, cedula_dueno)
    if dueno:
        nombre = input("Ingrese nombre de la mascota: ")
        raza = input("Ingrese raza de la mascota: ")
        fecha_nacimiento = input("Ingrese fecha de nacimiento de la mascota: ")
        sexo = input("Ingrese sexo de la mascota: ")
        peso = input("Ingrese peso de la mascota: ")
        caracteristicas = input("Ingrese características de la mascota: ")
        alimento = input("Ingrese alimento que consume la mascota: ")
        observaciones = input("Ingrese observaciones generales de la mascota: ")
        mascotas.append((dueno[0], nombre, raza, fecha_nacimiento, sexo, peso, caracteristicas, alimento, observaciones))
    else:
        print("El dueño con la cédula especificada no ha sido encontrado.")


def agenda_cita(citas, medicos):
    disponibilidad = input("Ingrese disponibilidad de turno (Mañana/Tarde/Fin): ")
    horario = input("Ingrese horario de turno (9/10/11/1/2/3): ")
    dia = int(input("Ingrese día de la semana (1 para lunes, 7 para domingo): "))
    
    medico_disponible = buscar_medico_disponible(medicos, disponibilidad, dia, horario)
    if medico_disponible:
        nombre_mascota = input("Ingrese nombre de la mascota: ")
        cedula_dueno = input("Ingrese la cédula del dueño de la mascota: ")
        print("Médico asignado:", medico_disponible[1])
        citas.append((nombre_mascota, cedula_dueno, dia, horario, medico_disponible[1]))
    else:
        print("No hay médicos disponibles en ese horario.")

def vacunacion(vacunas):
    nombre_mascota = input("Ingrese nombre de la mascota: ")
    
    print("**********Vacunas*******")
    print("1. Vacuna contra distemper, (entre 6 a 12 semanas de vida)")
    print("2. Vacuna Parvovirus, (cada 3 semanas hasta los 4 meses de vida)")
    print("3. Vacuna contra hepatitis, (3 refuerzos anuales)")
    print("4. Vacuna contra la rabia, (una vez por año)")
    vacuna = input("Ingrese numero de la vacuna a aplicar: ")
    if vacuna=='1':
        vacuna= "Vacuna contra distemper"
      
    elif vacuna=='2':
        vacuna= "Vacuna Parvovirus"
      
    elif vacuna=='3':
        vacuna= "Vacuna contra hepatitis"
       
    elif vacuna=='4':
        vacuna= "Vacuna contra la rabia"
       
    
    fecha = input("Ingrese fecha de colocación de la vacuna (YYYY-MM-DD): ")
    dosis = int(input("Ingrese cantidad de dosis a aplicar: "))
    proxima_cita = input("Ingrese fecha de la próxima cita de vacunación (YYYY-MM-DD): ")
    vacunas.append((nombre_mascota, vacuna, fecha, dosis, proxima_cita))

def cancelar_cita(citas):
    nombre_mascota = input("Ingrese nombre de la mascota: ")
    dia = int(input("Ingrese día de la cita a cancelar (1 para lunes, 7 para domingo): "))
    horario = input("Ingrese horario de la cita a cancelar (9/10/11/1/2/3): ")
    
    cita = buscar_cita_agendada(citas, dia, horario)
    if cita:
        citas.remove(cita)
        print("Cita cancelada con éxito.")
    else:
        print("No se encontró ninguna cita para cancelar.")

#Modulo Ventas
def calcular_factura():
    nombre_cliente = input("Ingrese el nombre del cliente: ")
    print("**********Alimentos*******")
    print("1. Proplan perro 1KG 5000 colones")
    print("2. Nutrisorce perro 1KG 7500 colones")
    print("3. Kirland gato 20KG 50000 colones")
    print("4. Petists 3.75KG 10000 colones")
    print("*********Otros*********")
    print("5. Pechera gato pequeÑo 5000 colones")
    print("6. Collar perro grande 3500 colones")
    print("7. Vestido perrita 5000 colones")
    print("8. Botas de hule 6000 colones")
    descripcion = input("Digite el numero de producto a comprar: ")
    if descripcion=='1':
        descripcion= "Proplan perro 1KG"
        precio = 5000
    elif descripcion=='2':
        descripcion= "Nutrisorce perro 1KG"
        precio = 7500
    elif descripcion=='3':
        descripcion= "Kirland gato 20KG"
        precio = 50000
    elif descripcion=='4':
        descripcion= "Petists 3.75KG"
        precio = 10000
    elif descripcion=='5':
        descripcion= "Pechera gato pequeño"
        precio = 5000
    elif descripcion=='6':
        descripcion= "Collar perro grande"
        precio = 3500
    elif descripcion=='7':
        descripcion= "Vestido perrita"
        precio = 5000
    elif descripcion=='8':
        descripcion= "Vestido perrita"
        precio = 6000
    else:
        print("opción no valida")
        descripcion= ""
        precio = 0
    cantidad = int(input("Ingrese la cantidad de producto: "))
    

    


    subtotal = cantidad * precio
    descuento = float(input("Ingrese el porcentaje de descuento (sin el signo %): "))
    descuento_total = (descuento / 100) * subtotal
    subtotal_con_descuento = subtotal - descuento_total
    iva = subtotal_con_descuento * 0.13  # Asume un IVA del 13%
    total_general = subtotal_con_descuento + iva
    
    # Crea un diccionario para cada venta y lo añade a la lista de ventas
    venta_actual = {
        'cliente': nombre_cliente,
        'descripcion': descripcion,
        'cantidad': cantidad,
        'precio': precio,
        'subtotal': subtotal,
        'descuento': descuento_total,
        'total': total_general
    }
    ventas.append(venta_actual)

    print("\nFactura Generada:")
    print(f"Nombre del Cliente: {nombre_cliente}")
    print(f"Descripción: {descripcion}")
    print(f"Cantidad: {cantidad}")
    print(f"Precio Unitario: ${precio:.2f}")
    print(f"Subtotal: ${subtotal:.2f}")
    print(f"Descuento ({descuento}%): -${descuento_total:.2f}")
    print(f"IVA (13%): ${iva:.2f}")
    print(f"Total General: ${total_general:.2f}")

def listar_productos():
    print("\nListado de Productos Vendidos:")
    for venta in ventas:
        print(f"Cliente: {venta['cliente']}, Descripción: {venta['descripcion']}, Cantidad: {venta['cantidad']}, Precio Unitario: ${venta['precio']:.2f}, Total: ${venta['total']:.2f}")

def mostrar_ficha_clinica(mascotas):
    print("\nFicha Clínica de las Mascotas Registradas:")
    for mascota in mascotas:
        print(f"Dueño: {mascota[0]}, Mascota: {mascota[1]}, Raza: {mascota[2]}, Fecha de Nacimiento: {mascota[3]}")

def mostrar_citas_programadas(citas):
    print("\nListado de Citas Programadas:")
    for cita in citas:
        print(f"Mascota: {cita[0]}, Dueño: {cita[1]}, Día: {cita[2]}, Horario: {cita[3]}, Médico Asignado: {cita[4]}")



def mostrar_menuRegistrar():
    print("1. Registrar Medico")
    print("2. Registrar Dueño")
    print("3. Registrar Mascota")
    print("4. Salir")

def mostrar_menu_historial():
    print("1. Ver Ficha Clínica")
    print("2. Ver Citas Programadas")
    print("3. Ver Listado de Productos")
    print("4. Salir")

def mostrar_menu():
    print("1. Modulo Registrar")
    print("2. Modulo Clinico")
    print("3. Modulo Venta")
    print("4. Modulo Historial")
    print("5. Salir")

def mostrar_menu_clinico():
    print("1. Agenda de cita")
    print("2. Vacunación")
    print("3. Cancelar cita")
    print("4. Salir")

def main(citas, medicos, duenos, mascotas, vacunas, productos):
   

    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ")

        if opcion == '1':
            while True:
                mostrar_menuRegistrar()  
                opcion3 = input("Seleccione una opción: ")
                     
                if opcion3 == '1':
                   registrar_medico(medicos)
                elif opcion3 == '2':
                    registrar_dueno(duenos)
                elif opcion3 == '3':
                   registrar_mascota(mascotas)
                elif opcion3 == '4':
                    break
                else:
                    print("Opción inválida. Inténtelo de nuevo.")  
        elif opcion == '2':
            while True:
                mostrar_menu_clinico()
                opcion2 = input("Seleccione una opción: ")
                if opcion2 == '1':
                    agenda_cita(citas, medicos)
                elif opcion2 == '2':
                    vacunacion(vacunas)
                elif opcion2 == '3':
                    cancelar_cita(citas)
                elif opcion2 == '4':
                    break
                else:
                    print("Opción inválida. Inténtelo de nuevo.")        
        elif opcion == '3':
            calcular_factura()
        elif opcion == '4':
            while True:
                mostrar_menu_historial()
                opcion = input("Seleccione una opción: ")
                if opcion == '1':
                    mostrar_ficha_clinica(mascotas)
                elif opcion == '2':
                    mostrar_citas_programadas(citas)
                elif opcion == '3':
                    listar_productos()
                elif opcion == '4':
                    break
                else:
                    print("Opción inválida. Inténtelo de nuevo.")
        elif opcion == '5':
            break
        else:
            print("Opción inválida. Inténtelo de nuevo.")

medicos = []
duenos = []
mascotas = []
citas = []
vacunas = []

main(citas, medicos, duenos, mascotas, vacunas)

