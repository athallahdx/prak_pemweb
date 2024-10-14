<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator</title>
    <link rel="stylesheet" type="text/css" href="fifth_tugas.css">
</head>
<body>
    <h1 id="title">Calculator</h1>
    <div class="container1">
        <form method="POST" action="" id="numberForm">
            <table>
                <tr>
                    <td><label for="number1Input">Masukkan Angka Pertama</label></td>
                    <td>: <input type="text" id="number1Input" pattern="-?\d+(\.\d+)?" name="number1"></td>
                </tr>
                <tr>
                    <td><label for="number2Input">Masukkan Angka Kedua</label></td>
                    <td>: <input type="text" id="number2Input" pattern="-?\d+(\.\d+)?" name="number2"></td>
                </tr>
            </table>
            <div class="container2">
                <button type="submit" name="operation" value="add"><h3>+</h3></button>
                <button type="submit" name="operation" value="subtract"><h3>-</h3></button>
                <button type="submit" name="operation" value="multiply"><h3>×</h3></button>
                <button type="submit" name="operation" value="divide"><h3>÷</h3></button>
            </div>
        </form>
    </div>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $number1 = $_POST['number1'];
        $number2 = $_POST['number2'];
        $operation = $_POST['operation'];
        $result = '';

        if (is_numeric($number1) && is_numeric($number2)) {
            switch ($operation) {
                case 'add':
                    $result = $number1 + $number2;
                    break;
                case 'subtract':
                    $result = $number1 - $number2;
                    break;
                case 'multiply':
                    $result = $number1 * $number2;
                    break;
                case 'divide':
                    if ($number2 != 0) {
                        $result = $number1 / $number2;
                    } else {
                        $result = 'Error: Division by zero';
                    }
                    break;
                default:
                    $result = 'Invalid operation';
                    break;
            }
        } else {
            $result = 'Please enter valid numbers';
        }

        echo "<div id='hasilHitung'><h2>Result: $result</h2></div>";
    }
    ?>
</body>
</html>