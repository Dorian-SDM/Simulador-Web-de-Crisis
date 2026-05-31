document.getElementById("calcular").addEventListener("click", function () {


  const producto = document.getElementById("producto").value.trim();
  const precioAnterior = parseFloat(document.getElementById("precioAnterior").value);
  const precioActual = parseFloat(document.getElementById("precioActual").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);


  if (!producto || isNaN(precioAnterior) || isNaN(precioActual) || isNaN(cantidad)) {
    alert("Complete todos los campos.");
    return;
  }


  if (precioAnterior <= 0 || precioActual <= 0 || cantidad <= 0) {
    alert("Los valores deben ser mayores que cero.");
    return;
  }


  const gastoAnterior = precioAnterior * cantidad;
  const gastoActual = precioActual * cantidad;
  const diferencia = gastoActual - gastoAnterior;
  const porcentaje =
    ((precioActual - precioAnterior) / precioAnterior * 100).toFixed(2);


  let mensaje = `
    <h3>Resultados para ${producto}</h3>
    <p><strong>Gasto anterior:</strong> ${gastoAnterior.toFixed(2)} Bs</p>
    <p><strong>Gasto actual:</strong> ${gastoActual.toFixed(2)} Bs</p>
    <p><strong>Diferencia:</strong> ${diferencia.toFixed(2)} Bs</p>
    <p><strong>Variación:</strong> ${porcentaje}%</p>
  `;


  if (diferencia > 0) {
    mensaje += `
      <p style="color:red;">
        ⚠️ El presupuesto familiar aumentó.
      </p>
    `;
  } else if (diferencia < 0) {
    mensaje += `
      <p style="color:green;">
        ✅ El gasto familiar disminuyó.
      </p>
    `;
  } else {
    mensaje += `
      <p style="color:blue;">
        ℹ️ El gasto se mantiene igual.
      </p>
    `;
  }


  document.getElementById("output").innerHTML = mensaje;
});