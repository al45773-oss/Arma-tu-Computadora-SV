function calcularTotal() {
    let total = 0;

    // Seleccionar todos los selects
    const selects = document.querySelectorAll("select");

    selects.forEach(select => {
        total += parseFloat(select.value);
    });

    // Sumar accesorios (checkbox)
    const accesorios = document.querySelectorAll("input[type='checkbox']:checked");

    accesorios.forEach(acc => {
        total += parseFloat(acc.value);
    });

    // Mostrar resultado
    document.getElementById("resultado").textContent =
        "Total a pagar: $" + total.toLocaleString("es-MX") + " MXN";
}
