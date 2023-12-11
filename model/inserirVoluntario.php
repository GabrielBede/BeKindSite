<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserir Voluntario | BeKind</title>
    <link rel="stylesheet" href="../../css/voluntario.css">
</head>
<body>
<?php
try {
    require_once("../factory/conexao.php");

    if (isset($_POST['cxnome']) && isset($_POST['cxemail']) && isset($_POST['cxsenha']) && isset($_POST['cxcpf'])) {
        $conn = new Caminho();
        $query = "INSERT INTO voluntarios (nome, email, senha, cpf) VALUES (:nome, :email, :senha, :cpf)";
        
        $cadastrar = $conn->getConn()->prepare($query);
        $cadastrar->bindParam(':nome', $_POST['cxnome'], PDO::PARAM_STR);
        $cadastrar->bindParam(':email', $_POST['cxemail'], PDO::PARAM_STR);
        $cadastrar->bindParam(':senha', $_POST['cxsenha'], PDO::PARAM_STR);
        $cadastrar->bindParam(':cpf', $_POST['cxcpf'], PDO::PARAM_STR);

        $cadastrar->execute();

        if ($cadastrar->rowCount()) {
            echo "<p>Dados cadastrados com sucesso</p>";
        } else {
            echo "ERRO: Dados não cadastrados";
        }
    } else {
        echo "Dados incompletos!";
    }
} catch (Exception $ex) {
    echo 'Erro: ' . $ex->getMessage();
}
?>

</body>
</html>

