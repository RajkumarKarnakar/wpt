$(document).ready(function () {
    $("#btn").click(function () {


        let nm = $("#nm").val();
        let ch = $("#ch").val();
        let adv = $("#adv").val();
        let adj = $("#adj").val();

        $("#story").html(`<h4 class="text-center">Wendy's Crazy MadLibs Story</h4>` +
            `<p>One day, my friend <span id="spnm">${nm}</span> was visiting New York and ran into <span id="spch">${ch}</span>. ` +
            `<span id="spnm">${nm}</span> ran <span id="spadv">${adv}</span> to meet <span id="spch">${ch}</span>. ` +
            `But <span id="spch">${ch}</span> turned out to be very <span id="spadj">${adj}</span> and <span id="spnm">${nm}</span> did not enjoy the meeting.</p>`
        );

    })
})