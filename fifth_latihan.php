<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>latihan</title>
</head>
<body>
    <?php
        $mahasiswa = array(
            array("Romi", "Bogor", 22),
            array("Anto", "Jakarta", 22),
            array("Putri", "Bekasi", 21)
        );

        for($i=0; $i<3; $i++){
            for($j=0; $j<3; $j++){
                if($j==0){
                    echo $mahasiswa[$i][$j]."<br>";
                } elseif($j==1){
                    echo "Asal : ".$mahasiswa[$i][$j]."<br>";
                } elseif($j==2){
                    echo "Umur : ".$mahasiswa[$i][$j]."<br><br>";
                }
            }
        }
    ?>
</body>
</html>