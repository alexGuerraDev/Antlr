$(function () {
    $('.linedArea').linedtextarea();

    $('.btnAnalizar').on('click', function () {
        $('.errContainer').empty();
        $.ajax({
            type: "post",
            url: "/antlr",
            data: {
                input: $('#parserArea').val()
            },
            success: function (response) {
                let errors = JSON.parse(response);
                if (errors.length > 0) {
                    errors.map(err => {
                        let errDesc = `
                            <div class="card red darken-1">
                                <div class="card-content white-text">
                                    <div class="card-title">Error</div>
                                    <p>${err.text}</p>
                                    <p>Linea: ${err.row+1}</p>
                                    <p>Columna: ${err.column}</p>
                                </div>
                            </div>
                            `;
                        $('.errContainer').append(errDesc);
                    })
                }else{
                    let noErr = `
                    <div class="card green lighten-1">
                        <div class="card-content">
                            <div class="card-title">Expresión aceptada</div>
                            <p>No se encontró ningún error durante el análisis</p>
                        </div>
                    </div>
                    `
                    $('.errContainer').append(noErr);
                }
            }
        });
    });
})