// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// Your code goes here!
var  height, width, color; //variable declaration
$('#sizePicker').submit(function(event){
  event.preventDefault();
  //sets height and width
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(height,width);//passes the height and width to the makeGrid.
})
function makeGrid(x , y) {
  $('tr').remove();//removes table rows
  for(var f=1; f<= x; f++){ //creates the grid
    $('#pixelCanvas').append('<tr id=table' + f + '></tr>');
    for(var t =1; t <= y; t++){
      $('#table' + f).append('<td></td>');//adds a cell for each row.
    }
  }
  //it adds color to the cell
  $('td').click(function addColor() {
    color = $('#colorPicker').val();
    if($(this).attr('style')){
      $(this).removeAttr('style')
    }else{
      $(this).attr('style', 'background-color:' + color);

    }

  })
}
