import random
import string

def gerar_senha(comprimento, usar_maiusculas, usar_minusculas, usar_numeros, usar_caracteres):
    caracteres = ''

    if usar_maiusculas:
        caracteres += string.ascii_uppercase
    if usar_minusculas:
        caracteres += string.ascii_lowercase
    if usar_numeros:
        caracteres += string.digits
    if usar_caracteres:
        caracteres += string.punctuation

    senha = ''.join(random.choice(caracteres) for _ in range(comprimento))
    return senha

comprimento = int(input("Digite o comprimento da senha: "))
usar_maiusculas = input("Usar letras maiúsculas? (s/n): ").lower() == "s"
usar_minusculas = input("Usar letras minúsculas? (s/n): ").lower() == "s"
usar_numeros = input("Usar números? (s/n): ").lower() == "s"
usar_caracteres = input("Usar caracteres especiais? (s/n): ").lower() == "s"

senha_gerada = gerar_senha(comprimento, usar_maiusculas, usar_minusculas, usar_numeros, usar_caracteres)
print("Senha gerada:", senha_gerada)
