(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var data_inicio = current.u_data_inicio.toString();
    var arrayData = data_inicio.split("-");
    var year = parseInt(arrayData[0]);
    var month = parseInt(arrayData[1]);
    var day = arrayData[2];

    if (day > 1 && month < 12) {
        day = "01";
        month = month + 1;

    } else if (day > 1 && month == 12) {
        day = "01";
        month = "01";
		year = year + 1;
    }
	
    var gd = new GlideDate();
    gd.setValue(year+"-"+month+"-"+day);
    gs.info(gd.getByFormat("dd-MM-yyyy"));
	current.u_data_inicio = gd;

})(current, previous);
