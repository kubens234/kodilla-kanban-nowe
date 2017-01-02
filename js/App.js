// OGÓLNA FUNKCJA
"use strict";
var baseUrl = 'https://kodilla.com/pl/bootcamp-api',
    myHeaders = {
        'X-Client-Id': '662',
        'X-Auth-Token': '2aa2dc9af899b30e855e5963a78cae9c'
};

$.ajaxSetup({
    headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
        setupColumns(response.columns);
    }
});

// TWORZENIE NOWYCH EGZEMPLARZY KOLUMN
function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);
  	})
}

