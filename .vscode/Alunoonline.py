class Aluno:
    def __init__(self, nome):
        self.nome = nome
        self.notas = []

    def adicionar_nota(self, nota):
        self.notas.append(nota)

    def calcular_media(self):
        if len(self.notas) == 0:
            return 0
        total = sum(self.notas)
        media = total / len(self.notas)
        return media


def exibir_menu():
    print("Sistema de Notas")
    print("1. Adicionar nota")
    print("2. Calcular média")
    print("3. Sair")


alunos = []

while True:
    exibir_menu()
    opcao = input("Digite a opção desejada: ")

    if opcao == "1":
        nome_aluno = input("Digite o nome do aluno: ")
        nota = float(input("Digite a nota do aluno: "))

        aluno_existente = False
        for aluno in alunos:
            if aluno.nome == nome_aluno:
                aluno_existente = True
                aluno.adicionar_nota(nota)
                break

        if not aluno_existente:
            novo_aluno = Aluno(nome_aluno)
            novo_aluno.adicionar_nota(nota)
            alunos.append(novo_aluno)

    elif opcao == "2":
        nome_aluno = input("Digite o nome do aluno: ")

        aluno_encontrado = False
        for aluno in alunos:
            if aluno.nome == nome_aluno:
                aluno_encontrado = True
                media = aluno.calcular_media()
                print("Média do aluno:", media)
                break

        if not aluno_encontrado:
            print("Aluno não encontrado.")

    elif opcao == "3":
        print("Saindo do sistema...")
        break

    else:
        print("Opção inválida. Por favor, tente novamente.")
