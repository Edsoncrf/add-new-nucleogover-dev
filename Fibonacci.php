<?php
function fibonacci($n) {
  $fib = [0, 1];

  if ($n <= 1) {
    return implode(", ", array_slice($fib, 0, $n + 1));
  }

  for ($i = 2; $i <= $n; $i++) {
    $fib[$i] = bcadd($fib[$i - 1], $fib[$i - 2]); 
  }

  return implode(", ", array_map('formatarNumero', $fib));
}

function formatarNumero($numero) {
  return number_format($numero, 0, ',', '.');
}

$resultado = fibonacci(40);
echo $resultado;
?>