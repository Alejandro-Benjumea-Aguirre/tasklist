<?php

    include_once("./config/db.php");
    $consulta = $conexion->prepare("SELECT * FROM tareas");
    $consulta->execute();
    $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
    foreach($resultado as $data){
        $estado = '';
        $estilo = '';
        if($data['id_estado']==='1'){
            $estado = 'Pendiente';
            $estilo = 'border-warning';
        }elseif($data['id_estado']==='2'){
            $estado = 'Realizada';
            $estilo = 'border-success';
        }elseif($data['id_estado']==='3'){
            $estado = 'Cancelada';
            $estilo = 'border-danger';
        }

        $data[] = array(
            'id' => $data['id'],
            'estilo' => $estilo,
            'estado' => $estado,
            'nombre' => $data['nombre'],
            'descripcion' => $data['descripcion'],
            'fecha_cre' => $data['fecha_creacion']
        );
    }
    echo $data;
?>