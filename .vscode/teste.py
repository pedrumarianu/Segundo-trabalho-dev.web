class Cadastro:
    def __init__(self, nome, idade, email):
        self.nome = nome
        self.idade = idade
        self.email = email

    def exibir_informacoes(self):
        print("Nome:", self.nome)
        print("Idade:", self.idade)
        print("Email:", self.email)

# Lista para armazenar os cadastros
cadastros = []

while True:
    print("1 - Cadastrar")
    print("2 - Exibir cadastros")
    print("3 - Sair")

    opcao = input("Escolha uma opção: ")

    if opcao == "1":
        nome = input("Digite o nome: ")
        idade = input("Digite a idade: ")
        email = input("Digite o email: ")

        cadastro = Cadastro(nome, idade, email)
        cadastros.append(cadastro)

        print("Cadastro realizado com sucesso!")

    elif opcao == "2":
        if len(cadastros) == 0:
            print("Nenhum cadastro encontrado.")
        else:
            for cadastro in cadastros:
                cadastro.exibir_informacoes()

    elif opcao == "3":
        break

    else:
        print("Opção inválida. Tente novamente.")
