function renderTable(){
    var order= firebase.database().ref("order/");
    order.on("child_added",function(data){
        var orderValue =data.val();
        document.getElementById("table").innerHTML+=`
            <tr>
                <td> ${orderValue.id}</td>
                <td> ${orderValue.order}</td>
                <td> ${orderValue.total}</td>
            </tr>
        `;
    })
};