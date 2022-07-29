
hideAll()

$("#intervention_customer_select").change(function () {
    $("#building_select").empty()
    var customer_id = $("#intervention_customer_select :selected").val()

    $.ajax({
        method: "get",
        url: "/interventions/customer_buildings",
        data: {
            'customer_id': customer_id
        },
        dataType: 'json',
        success: function (buildings) {
            $.each(buildings, function (i, val) {
                $("#building_select").append("<option value='0'>NONE</option>")
                $("#building_select").append("<option value='" + val.id + " '>" + val.id + "</option>")
            })
        }
    })
    $("#building_select_div").show()
})

function hideAll() {
    $("#building_select_div").hide()
}
