Função findGreaterDate()
Esta função compara duas datas fornecidas pelo usuário e exibe qual é a maior. Aqui está uma explicação passo a passo do que ela faz:
Obtenção das datas do usuário: A função começa obtendo os valores dos campos de entrada de data do HTML usando document.getElementById("date1").value e document.getElementById("date2").value. Esses valores são então convertidos em objetos Date.
Comparação de datas: As datas são comparadas usando o operador de comparação maior que (>). Se date1 for maior que date2, significa que a primeira data é maior. Se date2 for maior que date1, significa que a segunda data é maior. Se as duas datas forem iguais, uma mensagem é exibida indicando isso.
Exibição do resultado: Dependendo do resultado da comparação, uma mensagem é exibida no parágrafo com o id result, informando qual das datas é maior.

Função calculateDateInterval()
Esta função calcula o intervalo em dias entre duas datas fornecidas pelo usuário, desde que a primeira data seja mais antiga que a segunda. Aqui está uma explicação passo a passo do que ela faz:
Obtenção das datas do usuário: Assim como na função anterior, esta função começa obtendo os valores dos campos de entrada de data do HTML.
Verificação da validade das datas: É verificado se a primeira data (date1) é de fato mais antiga que a segunda data (date2). Se não for, uma mensagem é exibida indicando que a primeira data deve ser mais antiga.
Cálculo do intervalo de datas: Se a primeira data for mais antiga, o intervalo de tempo entre as duas datas é calculado em milissegundos usando o método getTime(). Em seguida, esse intervalo é convertido em dias e arredondado usando Math.floor().
Exibição do resultado: Se as datas forem válidas e a primeira data for mais antiga, a função exibe o intervalo entre as datas em dias no parágrafo com o id result.

Função getCurrentDateTime()
Esta função retorna a data e hora atuais no formato desejado: hora:minuto - dia/mês/ano. Aqui está uma explicação passo a passo do que ela faz:
Obtenção da data e hora atuais: A função cria um novo objeto Date, que representa a data e hora atuais.
Formatação da data e hora: O método toLocaleString() é usado para formatar a data e hora atual no formato desejado. As opções fornecidas ao método especificam que queremos a hora e os minutos no formato 24 horas (hour12: false), e queremos que a data e hora sejam exibidas no formato hora:minuto - dia/mês/ano.
Exibição do resultado: A data e hora formatadas são inseridas no parágrafo com o id result.
