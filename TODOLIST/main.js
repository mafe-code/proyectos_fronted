const input = document.querySelector('input[type="text"]')
const lista = document.getElementById('listContainer')
const stats = document.getElementById('stats')

document.getElementById('addButton').addEventListener('click', function() {
    if (!input.value.trim()) return

    lista.innerHTML += `
        <div class="task-container">
            <input type="checkbox">
            <label>${input.value}</label>
            <img src="./IMG/basurero.png" class="closeBtn">
        </div>
    `
    input.value = ''
    contarTareas()
})

lista.addEventListener('click', function(e) {
    if (e.target.classList.contains('closeBtn')) {
        e.target.parentElement.remove()
    }
    contarTareas()
})

function contarTareas() {
    const total = document.querySelectorAll('.task-container').length
    const hechas = document.querySelectorAll('input[type="checkbox"]:checked').length
    stats.textContent = `Tareas Pendientes: ${total - hechas}  Tareas Completadas: ${hechas}`
}

contarTareas()