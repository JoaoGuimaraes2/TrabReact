Perguntas = ["Telefonou para a vitima?", "Esteve no local?", "Mora perto da vitima?", "Devia para vitima?", "Já trabalhou com a vitima?"]
Resposta = []

for i in Perguntas:
  print(f"{i}")
  Resposta.append(input("Responda apenas (sim ou nao):\n"))
if (Resposta.count("sim")==2):
  print("Voce é suspeito")
elif (Resposta.count("sim")==3 or (Resposta.count("sim")==4) ):
  print("Voce é o assassino")
else:
  print("Voce inocente")