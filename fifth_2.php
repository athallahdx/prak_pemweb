<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percobaan2</title>
</head>
<body>
    <?php
        $color = array("Red", "Green", "Blue");
        echo "I Like" . $color[0] . ", " . $color[1] . ", " . $color[2] . ", " . "<br>";
        echo count($color);
        echo "<br>";
        $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
        echo "Peter is " . $age['Peter'] . " years old <br>";
        $mahasiswa = array(
            array("Romi", "Bogor", 22),
            array("Budi", "Depok", 23),
            array("Anto", "Jakarta", 22),
            array("Putri", "Bekasi", 21)
        );
        echo $mahasiswa[0][0].": asal ".$mahasiswa[0][1].", Umur ".$mahasiswa[0][2].".<br>"; 
        echo $mahasiswa[1][0].": asal ".$mahasiswa[1][1].", Umur ".$mahasiswa[1][2].".<br>";     
        echo $mahasiswa[2][0].": asal ".$mahasiswa[2][1].", Umur ".$mahasiswa[2][2].".<br>";     
        echo $mahasiswa[3][0].": asal ".$mahasiswa[3][1].", Umur ".$mahasiswa[3][2].".<br>";     
    ?>
</body>
</html>