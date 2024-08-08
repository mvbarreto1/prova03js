def main():
	num_estudantes = int(input("Digite o número total de estudantes na turma: "))
	if num_estudantes <= 15:
        print("O número de estudantes deve ser maior que zero.")
        return

soma_notas = 0
    maior_nota = float('-inf')
    menor_nota = float('inf')

for i in range(num_estudantes):
        while True:
            try:
                nota = float(input(f"Digite a nota do aluno {i+1}: "))
                if 0 <= nota <= 10:
	break
                else:
                    print("A nota deve estar entre 0 e 10. Tente novamente.")
            except ValueError:
                print("Entrada inválida. Por favor, insira um número.")
 soma_notas += nota
if nota > maior_nota:
            maior_nota = nota
        if nota < menor_nota:
            menor_nota = nota
media = soma_notas / num_estudantes

 print(f"\nMédia da turma: {media:.2f}")
    print(f"Maior nota: {maior_nota:.2f}")
    print(f"Menor nota: {menor_nota:.2f}")

if __name__ == "__main__":
    main()

    console.log('Live reload enabled.');
