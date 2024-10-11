<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percobaan4</title>
</head>
<body>
    <?php
        function text() {
            echo "Hello world! <br><br>";
        }
        text();
        
        function olahraga($sport){
            echo "Saya bermain $sport <br>";
        }
        olahraga("sepak bola");
        olahraga("basket");
        olahraga("voli");
        olahraga("badminton");
        olahraga("golf <br>");

        function penjumlahan(int $a, int $b){
            return $a + $b;
        }
        echo penjumlahan(5,3)."<br>";

        function tambah_dua(&$value) {
            $value += 2;
        }
        $num = 4;
        tambah_dua($num);
        echo $num."<br><br>";

        function lahir(&$bulanKelahiran){
            switch ($bulanKelahiran) {
                case "Januari":
                    echo "Anda Lahir di bulan Januari";
                    break;
                case "Februari":
                    echo "Anda Lahir di bulan Februari";
                    break;
                case "Maret":
                    echo "Anda Lahir di bulan Maret";
                    break;
                default:
                    echo "Bulan kelahiran Anda bukan Januari, Februari, ataupun Maret";
            }
        }
        $bulan = "November";
        echo lahir($bulan);
    ?>
</body>
</html>