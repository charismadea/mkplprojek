var Application = {
	initApplication : function () {
		$(window).load('pageinit', "#page-one", function(){
			Application.initShowMhs();
		})
		$(document).on('click', '#detail-mhs', function(){
			var nim = $(this).data('nimmhs');
			Application.initShowDetailMhs(nim);
		})
	},
	
		
	
	initShowMhs : function(){
		$.ajax({
			url : 'https://localhost:81/serviceppk/web_service.php',
			type : 'get',
			beforeSend : function(){
				$.mobile.loading('show',{
					text : 'please wait while retrieving data . . .',
					textVisible : true
				});
			},
			success : function(dataObject){
				var appendList = '<li><a href="#page-two?id'+
				dataObject.NIM+'"target="_self" id="detail-mhs" data-nimmhs="'+
					'</p><p><b>'+dataObject.fakultas+'<b></p></a></li>';
				$('#list-mhs').append(appendList);
				$('#list-mhs').listview('refresh');
			},
			complete : function() {
				$.mobile.loading('hide');
			}
		});
	},

	initShowDetailMhs : function(nim){
		$.ajax({
			url : 'http://localhost:81/servisppk/web_service.php',
			type : 'get',
			beforesend : function(){
				$.mobile.loading('show', {
					text : 'please wait while retrieving data. . .',
				});
			},
			success : function(dataObject){
				$('#p-nim,#p-nama,#p-jurusan,#p-fakultas,#p-alamat,#p-nohp'),empty();
				$('#p-nim').append('<b>NIM: </b>'+dataObject.NIM);
				$('#p-nama').append('<b>Nama: </b>'+dataObject.Nama);
				$('#p-jurusan').append('<b>Jurusan: </b>'+dataObject.Jurusan);
				$('#p-fakultas').append('<b>Fakultas: </b>'+dataObject.Fakultas);
				$('#p-alamat').append('<b>Alamat: </b>'+dataObject.Alamat);
				$('#p-nohp').append('<b>NoHp: </b>'+dataObject.NoHp);
			},
			complete : function(){
				$.mobile.loading('hide');
			}
		});
	}
}