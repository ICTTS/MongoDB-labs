<script type="text/javascript">
jQuery(document).ready(function($){

var map = new L.Map('map', {center: new L.LatLng(53.9618, 58.4277), zoom: 13});
var osm = new L.TileLayer('https://map.gtt.to.it/pandonia/{z}/{x}/{y}.png').addTo(map);
var styles = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType": "transit", "elementType": "all", "stylers": [{"hue": "#f69d94"}, {"saturation": 84}, {"lightness": 9}, {"visibility": "off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}];

var ico_palina = L.icon({iconUrl: '/leaflet/images/ico3/ico_bus_giallo.png'});
var ico_palina_start = L.icon({iconUrl: '/leaflet/images/ico3/ico_verde.png'});
var ico_palina_stop = L.icon({iconUrl: '/leaflet/images/ico3/ico_rossa.png'});

map.addControl(new L.Control.Fullscreen());



var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/ico_verde.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.07659,7.67037],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_0"><p>Fermata: <strong>951 - STATUTO CAP.</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=951&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_0').append('<table id="table_popup_0" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_0').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.07406,7.6682],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_1"><p>Fermata: <strong>27 - XVIII DICEMBRE</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=27&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_1').append('<table id="table_popup_1" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_1').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.07103,7.66879],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_2"><p>Fermata: <strong>29 - QUESTURA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=29&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_2').append('<table id="table_popup_2" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_2').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.06771,7.66646],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_3"><p>Fermata: <strong>31 - VITTORIO EMANUELE II</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=31&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_3').append('<table id="table_popup_3" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_3').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.06513,7.66452],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_4"><p>Fermata: <strong>375 - STATI UNITI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=375&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_4').append('<table id="table_popup_4" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_4').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.06258,7.66277],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_5"><p>Fermata: <strong>376 - POLITECNICO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=376&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_5').append('<table id="table_popup_5" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_5').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.06062,7.66136],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_6"><p>Fermata: <strong>378 - EINAUDI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=378&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_6').append('<table id="table_popup_6" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_6').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.05775,7.65935],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_7"><p>Fermata: <strong>380 - VESPUCCI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=380&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_7').append('<table id="table_popup_7" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_7').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.05404,7.65671],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_8"><p>Fermata: <strong>382 - ORBASSANO NORD</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=382&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_8').append('<table id="table_popup_8" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_8').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.05097,7.65451],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_9"><p>Fermata: <strong>384 - CASERMA MONTE GRAPPA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=384&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_9').append('<table id="table_popup_9" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_9').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.04817,7.65246],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_10"><p>Fermata: <strong>386 - CAPRERA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=386&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_10').append('<table id="table_popup_10" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_10').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.04402,7.64951],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_11"><p>Fermata: <strong>388 - SEBASTOPOLI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=388&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_11').append('<table id="table_popup_11" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_11').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.04131,7.64756],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_12"><p>Fermata: <strong>390 - FILADELFIA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=390&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_12').append('<table id="table_popup_12" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_12').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.03736,7.64478],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_13"><p>Fermata: <strong>392 - SAN MARINO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=392&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_13').append('<table id="table_popup_13" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_13').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.03504,7.64308],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_14"><p>Fermata: <strong>394 - COSENZA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=394&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_14').append('<table id="table_popup_14" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_14').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.03081,7.64014],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_15"><p>Fermata: <strong>396 - TAZZOLI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=396&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_15').append('<table id="table_popup_15" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_15').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.02645,7.63705],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_16"><p>Fermata: <strong>3379 - TRAIANO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=3379&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_16').append('<table id="table_popup_16" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_16').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.02419,7.63541],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_17"><p>Fermata: <strong>3368 - CAIO MARIO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=3368&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_17').append('<table id="table_popup_17" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_17').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.02321,7.63433],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_18"><p>Fermata: <strong>806 - SETTEMBRINI C.8</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=806&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_18').append('<table id="table_popup_18" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_18').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.02512,7.62942],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_19"><p>Fermata: <strong>810 - SETTEMBRINI C.16</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=810&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_19').append('<table id="table_popup_19" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_19').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.02933,7.61865],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_20"><p>Fermata: <strong>816 - SETTEMBRINI C.19</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=816&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_20').append('<table id="table_popup_20" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_20').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.0298,7.61742],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_21"><p>Fermata: <strong>818 - SETTEMBRINI C.20</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=818&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_21').append('<table id="table_popup_21" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_21').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.03053,7.61549],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_22"><p>Fermata: <strong>820 - SETTEMBRINI </strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=820&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_22').append('<table id="table_popup_22" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_22').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/ico_rossa.png',
		className: 'percorso0',
		iconAnchor: [12, 25],
	});
L.marker([45.03052,7.61516],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_23"><p>Fermata: <strong>822 - SETTEMBRINI CAP.</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=822&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_23').append('<table id="table_popup_23" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_23').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var firstpolyline = new L.Polyline([new L.LatLng(45.07666,7.67043), new L.LatLng(45.07694,7.6697), new L.LatLng(45.07679,7.66932), new L.LatLng(45.07648,7.66931), new L.LatLng(45.07636,7.66969), new L.LatLng(45.07622,7.66977), new L.LatLng(45.07385,7.66806), new L.LatLng(45.07375,7.66809), new L.LatLng(45.07368,7.6682), new L.LatLng(45.07294,7.67021), new L.LatLng(45.07268,7.67005), new L.LatLng(45.05377,7.65661), new L.LatLng(45.0533,7.65615), new L.LatLng(45.05319,7.65589), new L.LatLng(45.05308,7.65578), new L.LatLng(45.05281,7.65564), new L.LatLng(45.05243,7.65561), new L.LatLng(45.05215,7.65545), new L.LatLng(45.05173,7.65511), new L.LatLng(45.05169,7.65491), new L.LatLng(45.05161,7.65484), new L.LatLng(45.05152,7.65484), new L.LatLng(45.05142,7.65493), new L.LatLng(45.0511,7.65463), new L.LatLng(45.04791,7.65241), new L.LatLng(45.03775,7.64512), new L.LatLng(45.02483,7.63598), new L.LatLng(45.02353,7.63496), new L.LatLng(45.0231,7.63477), new L.LatLng(45.02307,7.63457), new L.LatLng(45.02493,7.62968), new L.LatLng(45.03052,7.61533), new L.LatLng(45.03115,7.61481), new L.LatLng(45.03115,7.61449), new L.LatLng(45.03106,7.61438), new L.LatLng(45.03092,7.61438), new L.LatLng(45.03062,7.61491), new L.LatLng(45.03056,7.61517)], {
	color: '#ff0000',
	className: 'percorso0',
	opacity: 0.6,
	weight: 5,
	offset: 3
});
firstpolyline.addTo(map);


var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/ico_verde.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.07659,7.67037],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_0"><p>Fermata: <strong>951 - STATUTO CAP.</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=951&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_0').append('<table id="table_popup_0" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_0').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.07406,7.6682],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_1"><p>Fermata: <strong>27 - XVIII DICEMBRE</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=27&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_1').append('<table id="table_popup_1" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_1').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.07103,7.66879],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_2"><p>Fermata: <strong>29 - QUESTURA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=29&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_2').append('<table id="table_popup_2" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_2').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.06771,7.66646],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_3"><p>Fermata: <strong>31 - VITTORIO EMANUELE II</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=31&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_3').append('<table id="table_popup_3" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_3').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.06513,7.66452],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_4"><p>Fermata: <strong>375 - STATI UNITI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=375&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_4').append('<table id="table_popup_4" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_4').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.06258,7.66277],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_5"><p>Fermata: <strong>376 - POLITECNICO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=376&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_5').append('<table id="table_popup_5" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_5').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.06062,7.66136],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_6"><p>Fermata: <strong>378 - EINAUDI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=378&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_6').append('<table id="table_popup_6" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_6').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.05775,7.65935],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_7"><p>Fermata: <strong>380 - VESPUCCI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=380&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_7').append('<table id="table_popup_7" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_7').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.05404,7.65671],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_8"><p>Fermata: <strong>382 - ORBASSANO NORD</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=382&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_8').append('<table id="table_popup_8" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_8').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.05097,7.65451],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_9"><p>Fermata: <strong>384 - CASERMA MONTE GRAPPA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=384&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_9').append('<table id="table_popup_9" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_9').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.04817,7.65246],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_10"><p>Fermata: <strong>386 - CAPRERA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=386&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_10').append('<table id="table_popup_10" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_10').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.04402,7.64951],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_11"><p>Fermata: <strong>388 - SEBASTOPOLI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=388&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_11').append('<table id="table_popup_11" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_11').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.04131,7.64756],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_12"><p>Fermata: <strong>390 - FILADELFIA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=390&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_12').append('<table id="table_popup_12" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_12').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.03736,7.64478],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_13"><p>Fermata: <strong>392 - SAN MARINO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=392&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_13').append('<table id="table_popup_13" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_13').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.03504,7.64308],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_14"><p>Fermata: <strong>394 - COSENZA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=394&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_14').append('<table id="table_popup_14" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_14').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.03081,7.64014],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_15"><p>Fermata: <strong>396 - TAZZOLI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=396&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_15').append('<table id="table_popup_15" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_15').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.02645,7.63705],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_16"><p>Fermata: <strong>3379 - TRAIANO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=3379&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_16').append('<table id="table_popup_16" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_16').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_r.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.02419,7.63541],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_17"><p>Fermata: <strong>3368 - CAIO MARIO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=3368&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_17').append('<table id="table_popup_17" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_17').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/ico_rossa.png',
		className: 'percorso1',
		iconAnchor: [12, 25],
	});
L.marker([45.02418,7.63686],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_18"><p>Fermata: <strong>3373 - CAIO MARIO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=3373&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_18').append('<table id="table_popup_18" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_18').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var firstpolyline = new L.Polyline([new L.LatLng(45.07666,7.67043), new L.LatLng(45.07694,7.6697), new L.LatLng(45.07679,7.66932), new L.LatLng(45.07648,7.66931), new L.LatLng(45.07636,7.66969), new L.LatLng(45.07622,7.66977), new L.LatLng(45.07385,7.66806), new L.LatLng(45.07375,7.66809), new L.LatLng(45.07368,7.6682), new L.LatLng(45.07294,7.67021), new L.LatLng(45.07268,7.67005), new L.LatLng(45.05377,7.65661), new L.LatLng(45.0533,7.65615), new L.LatLng(45.05319,7.65589), new L.LatLng(45.05308,7.65578), new L.LatLng(45.05281,7.65564), new L.LatLng(45.05243,7.65561), new L.LatLng(45.05215,7.65545), new L.LatLng(45.05173,7.65511), new L.LatLng(45.05169,7.65491), new L.LatLng(45.05161,7.65484), new L.LatLng(45.05152,7.65484), new L.LatLng(45.05142,7.65493), new L.LatLng(45.0511,7.65463), new L.LatLng(45.04791,7.65241), new L.LatLng(45.03775,7.64512), new L.LatLng(45.02483,7.63598), new L.LatLng(45.02371,7.63509), new L.LatLng(45.02336,7.6352), new L.LatLng(45.02324,7.63541), new L.LatLng(45.02323,7.63563), new L.LatLng(45.02343,7.63605), new L.LatLng(45.02419,7.63686)], {
	color: '#ff0000',
	className: 'percorso1',
	opacity: 0.6,
	weight: 5,
	offset: 3
});
firstpolyline.addTo(map);


var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/ico_verde.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.03052,7.61516],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_0"><p>Fermata: <strong>822 - SETTEMBRINI CAP.</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=822&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_0').append('<table id="table_popup_0" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_0').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.02978,7.61708],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_1"><p>Fermata: <strong>819 - SETTEMBRINI C.20</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=819&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_1').append('<table id="table_popup_1" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_1').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.02929,7.61829],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_2"><p>Fermata: <strong>817 - SETTEMBRINI C.19</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=817&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_2').append('<table id="table_popup_2" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_2').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.02509,7.62909],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_3"><p>Fermata: <strong>811 - SETTEMBRINI C.16</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=811&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_3').append('<table id="table_popup_3" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_3').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.02306,7.63445],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_4"><p>Fermata: <strong>807 - SETTEMBRINI C.8</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=807&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_4').append('<table id="table_popup_4" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_4').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.02418,7.63686],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_5"><p>Fermata: <strong>3373 - CAIO MARIO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=3373&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_5').append('<table id="table_popup_5" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_5').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.02646,7.63721],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_6"><p>Fermata: <strong>3519 - TRAIANO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=3519&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_6').append('<table id="table_popup_6" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_6').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.03018,7.63986],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_7"><p>Fermata: <strong>3521 - TAZZOLI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=3521&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_7').append('<table id="table_popup_7" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_7').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.03446,7.64288],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_8"><p>Fermata: <strong>395 - COSENZA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=395&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_8').append('<table id="table_popup_8" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_8').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.03822,7.64552],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_9"><p>Fermata: <strong>393 - SAN MARINO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=393&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_9').append('<table id="table_popup_9" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_9').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.04102,7.64762],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_10"><p>Fermata: <strong>391 - FILADELFIA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=391&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_10').append('<table id="table_popup_10" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_10').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.0435,7.64942],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_11"><p>Fermata: <strong>389 - SEBASTOPOLI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=389&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_11').append('<table id="table_popup_11" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_11').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.04795,7.65249],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_12"><p>Fermata: <strong>387 - CAPRERA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=387&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_12').append('<table id="table_popup_12" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_12').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.05109,7.65473],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_13"><p>Fermata: <strong>385 - CASERMA MONTE GRAPPA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=385&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_13').append('<table id="table_popup_13" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_13').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.05441,7.65709],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_14"><p>Fermata: <strong>383 - ORBASSANO NORD</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=383&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_14').append('<table id="table_popup_14" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_14').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.0572,7.65908],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_15"><p>Fermata: <strong>381 - VESPUCCI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=381&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_15').append('<table id="table_popup_15" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_15').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.05975,7.66089],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_16"><p>Fermata: <strong>379 - EINAUDI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=379&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_16').append('<table id="table_popup_16" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_16').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.06277,7.66304],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_17"><p>Fermata: <strong>670 - POLITECNICO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=670&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_17').append('<table id="table_popup_17" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_17').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.06483,7.66455],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_18"><p>Fermata: <strong>377 - STATI UNITI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=377&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_18').append('<table id="table_popup_18" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_18').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.06793,7.66676],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_19"><p>Fermata: <strong>32 - VITTORIO EMANUELE II</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=32&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_19').append('<table id="table_popup_19" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_19').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.07125,7.66929],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_20"><p>Fermata: <strong>30 - QUESTURA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=30&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_20').append('<table id="table_popup_20" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_20').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.07437,7.66847],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_21"><p>Fermata: <strong>28 - XVIII DICEMBRE</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=28&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_21').append('<table id="table_popup_21" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_21').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/ico_rossa.png',
		className: 'percorso2',
		iconAnchor: [12, 25],
	});
L.marker([45.07659,7.67037],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_22"><p>Fermata: <strong>951 - STATUTO CAP.</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=951&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_22').append('<table id="table_popup_22" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_22').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var firstpolyline = new L.Polyline([new L.LatLng(45.03056,7.61517), new L.LatLng(45.023,7.63476), new L.LatLng(45.02294,7.63515), new L.LatLng(45.02302,7.63546), new L.LatLng(45.02343,7.63605), new L.LatLng(45.0243,7.63695), new L.LatLng(45.02471,7.63601), new L.LatLng(45.02483,7.63598), new L.LatLng(45.03775,7.64512), new L.LatLng(45.04791,7.65241), new L.LatLng(45.0511,7.65463), new L.LatLng(45.05142,7.65493), new L.LatLng(45.05138,7.65516), new L.LatLng(45.05144,7.65528), new L.LatLng(45.05163,7.6553), new L.LatLng(45.05256,7.65593), new L.LatLng(45.05377,7.65661), new L.LatLng(45.05446,7.65708), new L.LatLng(45.06878,7.66729), new L.LatLng(45.06905,7.66749), new L.LatLng(45.06913,7.6677), new L.LatLng(45.0713,7.66926), new L.LatLng(45.07139,7.66927), new L.LatLng(45.07262,7.6702), new L.LatLng(45.07283,7.6705), new L.LatLng(45.07368,7.6682), new L.LatLng(45.07375,7.66809), new L.LatLng(45.07385,7.66806), new L.LatLng(45.0767,7.67009), new L.LatLng(45.07678,7.67007), new L.LatLng(45.07694,7.6697), new L.LatLng(45.07681,7.66935), new L.LatLng(45.07673,7.66929), new L.LatLng(45.07646,7.66932), new L.LatLng(45.07629,7.66995), new L.LatLng(45.07577,7.67134), new L.LatLng(45.07587,7.67165), new L.LatLng(45.07603,7.67173), new L.LatLng(45.07622,7.67165), new L.LatLng(45.07666,7.67043)], {
	color: '#0055a4',
	className: 'percorso2',
	opacity: 0.6,
	weight: 5,
	offset: 3
});
firstpolyline.addTo(map);


var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/ico_verde.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.02418,7.63686],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_0"><p>Fermata: <strong>3373 - CAIO MARIO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=3373&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_0').append('<table id="table_popup_0" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_0').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.02646,7.63721],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_1"><p>Fermata: <strong>3519 - TRAIANO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=3519&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_1').append('<table id="table_popup_1" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_1').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.03018,7.63986],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_2"><p>Fermata: <strong>3521 - TAZZOLI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=3521&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_2').append('<table id="table_popup_2" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_2').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.03446,7.64288],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_3"><p>Fermata: <strong>395 - COSENZA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=395&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_3').append('<table id="table_popup_3" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_3').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.03822,7.64552],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_4"><p>Fermata: <strong>393 - SAN MARINO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=393&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_4').append('<table id="table_popup_4" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_4').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.04102,7.64762],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_5"><p>Fermata: <strong>391 - FILADELFIA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=391&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_5').append('<table id="table_popup_5" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_5').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.0435,7.64942],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_6"><p>Fermata: <strong>389 - SEBASTOPOLI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=389&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_6').append('<table id="table_popup_6" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_6').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.04795,7.65249],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_7"><p>Fermata: <strong>387 - CAPRERA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=387&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_7').append('<table id="table_popup_7" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_7').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.05109,7.65473],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_8"><p>Fermata: <strong>385 - CASERMA MONTE GRAPPA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=385&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_8').append('<table id="table_popup_8" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_8').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.05441,7.65709],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_9"><p>Fermata: <strong>383 - ORBASSANO NORD</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=383&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_9').append('<table id="table_popup_9" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_9').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.0572,7.65908],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_10"><p>Fermata: <strong>381 - VESPUCCI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=381&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_10').append('<table id="table_popup_10" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_10').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.05975,7.66089],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_11"><p>Fermata: <strong>379 - EINAUDI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=379&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_11').append('<table id="table_popup_11" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_11').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.06277,7.66304],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_12"><p>Fermata: <strong>670 - POLITECNICO</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=670&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_12').append('<table id="table_popup_12" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_12').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.06483,7.66455],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_13"><p>Fermata: <strong>377 - STATI UNITI</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=377&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_13').append('<table id="table_popup_13" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_13').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.06793,7.66676],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_14"><p>Fermata: <strong>32 - VITTORIO EMANUELE II</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=32&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_14').append('<table id="table_popup_14" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_14').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.07125,7.66929],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_15"><p>Fermata: <strong>30 - QUESTURA</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=30&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_15').append('<table id="table_popup_15" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_15').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/bus_stop_b.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.07437,7.66847],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_16"><p>Fermata: <strong>28 - XVIII DICEMBRE</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=28&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_16').append('<table id="table_popup_16" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_16').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var myIcon = L.icon({
    iconUrl: '/leaflet/images/ico3/ico_rossa.png',
		className: 'percorso3',
		iconAnchor: [12, 25],
	});
L.marker([45.07659,7.67037],{icon:myIcon})
.addTo(map).bindPopup('<div id="popupcontent_17"><p>Fermata: <strong>951 - STATUTO CAP.</strong>. <br>Passaggi (* se previsione in tempo reale):</p><div class="loading">Caricamento dati <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span></div></div>',{minWidth: 420, maxHeight: 400})
.on('click', function(e){
	jQuery.getJSON('/cms/index.php?option=com_gtt&task=palina.getTransitiOld&palina=951&bacino=U&realtime=true', { get_param: 'value' },
        function(data) {
		    jQuery(".loading").hide();
		    jQuery('#popupcontent_17').append('<table id="table_popup_17" class="table table-condensed table-striped table-hover passaggi"></table>');
		jQuery.each(data, function(index, element) {
			var row = jQuery('<tr>');
			if(element.Linea != undefined){
				row.append('<th>'+element.LineaAlias+'<small> ('+element.Direzione+')</small></th>');
				jQuery.each(element.PassaggiRT, function(i, passaggio){
				   var td = jQuery('<td>').text(passaggio).append('<sup>*</sup>').appendTo(row).wrapInner('<i></i>');
				});

				jQuery.each(element.PassaggiPR, function(i, passaggio){
					var td = jQuery('<td>').text(passaggio).appendTo(row);
				});

				if(row.find('td').length == '1') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '2') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '3') {var td = jQuery('<td>').text(' ').appendTo(row);}
				if(row.find('td').length == '4') {var td = jQuery('<td>').text(' ').appendTo(row);}
			} else
			    row.append('<th>Nessun risultato</th>');

			jQuery('#table_popup_17').append(row);
		});
	});
	map.panTo(this.getLatLng()); //centratura del fumetto al click
});

var firstpolyline = new L.Polyline([new L.LatLng(45.02419,7.63686), new L.LatLng(45.02431,7.63694), new L.LatLng(45.02471,7.63601), new L.LatLng(45.02483,7.63598), new L.LatLng(45.03775,7.64512), new L.LatLng(45.04791,7.65241), new L.LatLng(45.0511,7.65463), new L.LatLng(45.05142,7.65493), new L.LatLng(45.05138,7.65516), new L.LatLng(45.05144,7.65528), new L.LatLng(45.05163,7.6553), new L.LatLng(45.05256,7.65593), new L.LatLng(45.05377,7.65661), new L.LatLng(45.05446,7.65708), new L.LatLng(45.06878,7.66729), new L.LatLng(45.06905,7.66749), new L.LatLng(45.06913,7.6677), new L.LatLng(45.0713,7.66926), new L.LatLng(45.07139,7.66927), new L.LatLng(45.07262,7.6702), new L.LatLng(45.07283,7.6705), new L.LatLng(45.07368,7.6682), new L.LatLng(45.07375,7.66809), new L.LatLng(45.07385,7.66806), new L.LatLng(45.0767,7.67009), new L.LatLng(45.07678,7.67007), new L.LatLng(45.07694,7.6697), new L.LatLng(45.07681,7.66935), new L.LatLng(45.07673,7.66929), new L.LatLng(45.07646,7.66932), new L.LatLng(45.07629,7.66995), new L.LatLng(45.07577,7.67134), new L.LatLng(45.07587,7.67165), new L.LatLng(45.07603,7.67173), new L.LatLng(45.07622,7.67165), new L.LatLng(45.07666,7.67043)], {
	color: '#0055a4',
	className: 'percorso3',
	opacity: 0.6,
	weight: 5,
	offset: 3
});
firstpolyline.addTo(map);

map.fitBounds(firstpolyline.getBounds()); //centratura mappa sui vari livelli
//gestisco attivazione o meno dei percorsi
$('.percorso_check:not(:checked)').each(function() {
	var selezionato = $(this).attr("id") ;
	$("."+selezionato).hide();
});

$(".percorso_check").click(function() {
	var selezionato = $(this).attr("id") ;
	$("."+selezionato).toggle();
});


// indicazione della posizione dei bus in tempo reale

var c_type1_bus_orange = L.AwesomeMarkers.icon({
  icon: 'bus',
  prefix: 'fas fa',
  markerColor: 'orange',
  iconColor: '#FFFFFF' //any hex color (e.g., "#FFFFFF")
});

var c_type1_bus_green = L.AwesomeMarkers.icon({
  icon: 'bus',
  prefix: 'fas fa',
  markerColor: 'green',
  iconColor: '#FFFFFF' //any hex color (e.g., "#FFFFFF")
});

var c_type1_tram_orange = L.AwesomeMarkers.icon({
  icon: 'tram',
  prefix: 'fas fa',
  markerColor: 'orange',
  iconColor: '#FFFFFF' //any hex color (e.g., "#FFFFFF")
});

var c_type1_tram_green = L.AwesomeMarkers.icon({
  icon: 'tram',
  prefix: 'fas fa',
  markerColor: 'green',
  iconColor: '#FFFFFF' //any hex color (e.g., "#FFFFFF")
});

var user_icon = L.AwesomeMarkers.icon({
  icon: 'user',
  prefix: 'fas fa',
  markerColor: 'blue',
  iconColor: '#FFFFFF' //any hex color (e.g., "#FFFFFF")
});

var realTimeLayer = new L.layerGroup().addTo(map);

var command = L.control({position: 'topright'});
command.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'command');
	div.innerHTML = '<div id="command"><p id="update_time" class="updaterTime"></p><div id="command" class="loader"></div></div>';
	return div;
};

command.addTo(map);

//$.getJSON('/GetVeicoliPerLineaJson?linea=10', function(data) {
$.getJSON('/cms/components/com_gtt/views/percorsi/tmpl/proxydaslinea.php?serviceName=GetVeicoliPerLineaJson&linea=10', function(data) {
	$.each(data, function(mezzo) {
		mapUpdater("" + data[mezzo].id, data[mezzo].lat, data[mezzo].lon, data[mezzo].tipo, data[mezzo].disabili, data[mezzo].direzione, data[mezzo].aggiornamento);
	})
	// getUserPosition(); // sui browser moderni funziona solo in contesto sicuro (https)
	updateInfoBox();
	window.setInterval(function() {
	//$.getJSON('/GetVeicoliPerLineaJson?linea=10', function(data) {
	jQuery.getJSON('/cms/components/com_gtt/views/percorsi/tmpl/proxydaslinea.php?serviceName=GetVeicoliPerLineaJson&linea=10', function(data) {
		$.each(data, function(mezzo) {
			mapUpdater("" + data[mezzo].id, data[mezzo].lat, data[mezzo].lon, data[mezzo].tipo, data[mezzo].disabili, data[mezzo].direzione, data[mezzo].aggiornamento);
		});
		updateInfoBox();
		// getUserPosition(); // sui browser moderni funziona solo in contesto sicuro (https)
	});
}, 2000);
});

function getUserPosition() {
	if (navigator.geolocation) {
		console.log('entra');
    	navigator.geolocation.getCurrentPosition(pinUserOnMap);
	}
	else {
		console.log('browser obsoleto');
	}
}

function pinUserOnMap(position) {
	console.log('chiama');
	mark = L.marker([position.coords.latitude, position.coords.longitude], {
		icon: user_icon,
	});
	mark.addTo(realTimeLayer);
}

function updateInfoBox() {
	var today = new Date();
	var time = (("0" + today.getHours()).slice(-2)) + ":" + (("0" + today.getMinutes()).slice(-2)) + ":" + (("0" + today.getSeconds()).slice(-2));
	$('#update_time').html('<i>' + time + '</i>');
}

var markersOnMap = new Array();
function mapUpdater(id, lat, lon, tipo, disabili, direzione, aggiornamento) {

	var mezzoIcon = L.icon({
		className: "mezzo" + id,
		iconAnchor: [9, 8],
		iconSize: [18, 18],
	});
	switch(tipo) {
		case 'B':
			if(disabili) {
				mezzoIcon.options.iconUrl = '/leaflet/images/ico3/marker_bus_verde.png'
			}
			else {
				mezzoIcon.options.iconUrl = '/leaflet/images/ico3/marker_bus_giallo.png'
			}
			break;
		case 'T':
			// console.log(tipo);
			if(disabili) {
				mezzoIcon.options.iconUrl = '/leaflet/images/ico3/marker_tram_verde.png'
			}
			else {
				mezzoIcon.options.iconUrl = '/leaflet/images/ico3/marker_tram_giallo.png'
			}
			break;
	}

	if(id in markersOnMap) {
		$('#pUpdate-' + id).text(aggiornamento);
		markersOnMap[id].direction_marker.options.rotationAngle = direzione;;
		//console.log(markersOnMap[id].options);
		markersOnMap[id].direction_marker.setLatLng([lat, lon]);
		markersOnMap[id].direction_marker.update();
		markersOnMap[id].mezzo_marker.setLatLng([lat, lon]);
		markersOnMap[id].mezzo_marker.update();
	}
	else {
		var popup_html = "Veicolo <b>" + id + "</b>";
		popup_html += "<br>";
		popup_html += "ultimo aggiornamento ricevuto " + '<p id="pUpdate-' + id + '">' + aggiornamento + '</p>';
		popup_html += "<br>";
		popup_html += '<a data-id="' + id + '" href="#" class="link-segui-veicolo">Segui questo veicolo sulla mappa</a>';
		var directionIcon = L.icon({
			iconUrl: '/leaflet/images/ico3/marker_freccia.png',
			className: "direzione" + id,
			iconAnchor: [20, 24],
			iconSize: [40, 40],
		});

		direction = L.marker([lat, lon], {
			icon: directionIcon,
			rotationAngle: direzione,
		});

		mezzo = L.marker([lat, lon], {
			icon: mezzoIcon,
		}).bindPopup(popup_html);
		markersOnMap[id] = {'direction_marker':direction, 'mezzo_marker':mezzo};
		direction.addTo(realTimeLayer);
		mezzo.addTo(realTimeLayer);
	}
	var followId = $('#follow-number').text();
	if(followId != '') {
		var latLngs = [ markersOnMap[followId].direction_marker.getLatLng() ];
		var markerBounds = L.latLngBounds(latLngs);
		map.fitBounds(markerBounds);
	}
}

$('#map').on('click', '.link-segui-veicolo', function(e) {
	var id = $(this).attr('data-id');
	var followBox = L.control({position: 'topright'});
	$(this).after('Stai seguendo questo veicolo');
	$(this).hide();
	followBox.onAdd = function (map) {
		var div = L.DomUtil.create('div', 'follow-box');
		div.innerHTML = '<div id="follow-box" style="padding: 5px; background-color: black; color: chartreuse;">Stai seguendo il veicolo <p id="follow-number">' + id + '</p>';
		div.innerHTML += '<a href="#" id="link-stop-segui">Smetti di seguire</a></div>';
		return div;
	};
	followBox.addTo(map);
	return false;
})

$('#map').on('click', '#link-stop-segui', function() {
	console.log(map);
	$('.follow-box').remove();
	return false;
})




});

</script>
